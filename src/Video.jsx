import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Video = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.page2',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
        pin: true,
        scroller: 'body'
      }
    })
    tl.to(
      '.topp',
      {
        y: '-100%',
        ease: 'expo.out',
        opacity: 0
      },
      'a'
    )
    tl.to(
      '.bottomm',
      {
        y: '100%',
        ease: 'expo.out',
        opacity: 0
      },
      'a'
    )
  })
  return (
    <>
      <div className='main'>
        <div className='h-screen w-full relative page2 overflow-hidden'>
          <div className='h-[50%] w-full bg-[#111] absolute top-0 overflow-hidden topp'>
            <h1 className='text-[22vw] font-bold absolute bottom-[-116%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
              Cocacola
            </h1>
          </div>
          <div className='h-full w-full bg-zinc-900'>
            <video autoPlay loop muted>
              <source src='/coke_bg_video.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='h-[50%] w-full bg-[#111] absolute bottom-0 overflow-hidden bottomm'>
            <h1 className='text-[22vw] font-bold absolute top-[-13%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
              Cocacola
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
