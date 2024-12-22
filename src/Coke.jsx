import { useGLTF } from '@react-three/drei'
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'

const Coke = () => {
  const { scene, nodes } = useGLTF('/3_cans_com.glb')
  const meshes = {}

  Object.keys(nodes).forEach(key => {
    meshes[key] = nodes[key]
  })

  const coke = useRef(null)
  const [clicked, setClicked] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [rotationSpeed, setRotationSpeed] = useState(1.0)
  const [rotationProgress, setRotationProgress] = useState(0)

  const switchSound = useRef(new Audio('/eff.mp3'))

  useEffect(() => {
    switchSound.current.load()

    const interval = setInterval(() => {
      switchSound.current.play().catch(err => {
        console.error('Audio play failed:', err)
      })

      setIsTransitioning(true)
      setRotationProgress(0)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  useFrame((state, delta) => {
    if (coke.current) {
      coke.current.rotation.y += delta * rotationSpeed

      if (isTransitioning) {
        setRotationSpeed(30)

        setRotationProgress(prevProgress => prevProgress + delta * 10)

        if (rotationProgress >= Math.PI * 2) {
          setIsTransitioning(false)
          setClicked(prev => (prev === 3 ? 1 : prev + 1))
          coke.current.rotation.y = 0
          setRotationSpeed(1.0)
        }
      }
    }
  })


  const follower = document.querySelector('.follower')
  const win = document.querySelector('.cokeee')

  win.addEventListener('mouseenter', e => {
    follower.style.display = 'block'
  })

  win.addEventListener('mousemove', dets => {
    follower.style.top = dets.clientY + 'px'
    follower.style.left = dets.clientX + 'px'
  })

  window.addEventListener('click', () => {
    document.body.style.cursor = 'grabbing'
  })

  win.addEventListener('mouseleave', () => {
    follower.style.display = 'none'
    document.body.style.cursor = 'auto'
  })

  return (
    <Suspense fallback={null}>
      <group className='cokke'>
        {meshes[`Cylinder00${clicked}`] && (
          <primitive
            key={clicked}
            object={meshes[`Cylinder00${clicked}`]}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            ref={coke}
          />
        )}
      </group>
    </Suspense>
  )
}

export default Coke
