import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import React from 'react'
import Coke from './Coke'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='w-[95%] h-screen mx-auto flex justify-between'>
        <div className='w-[50%] h-screen flex flex-col justify-center'>
          <h1 className='text-8xl font-bold'>Cocacola</h1>
          <div className='flex mt-4'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '170px' }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: 4
              }}
              className='h-[95px] w-[170px] mr-4 coke rounded'
            ></motion.div>
            <h1 className='text-8xl font-bold'>Diet Coke</h1>
          </div>
          <h1 className='text-8xl font-bold'>Is Famous</h1>
        </div>
        <div className='h-[100px] w-[100px] bg-white rounded-full fixed z-20 follower hidden'>
          <h1 className='text-xl text-black font-semibold absolute top-[25%] left-[2%] text-center'>
           Drag To Rotate
          </h1>
        </div>
        <div className='w-[50%] h-screen flex justify-center cokeee relative z-10'>
          <Canvas camera={{ fov: 45, position: [1.3, 2.4, 5.5] }}>
            <ambientLight intensity={0.01} />
            <OrbitControls
              enablePan={true}
              enableRotate={true}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2.7}
              minPolarAngle={Math.PI / 2.7}
            />
            <Environment
              files={
                'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/blue_photo_studio_4k.exr'
              }
            />
            <Coke />
            <EffectComposer>
              <Bloom
                intensity={0.12}
                luminanceThreshold={1.0}
                luminanceSmoothing={0.24}
              />
            </EffectComposer>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Hero
