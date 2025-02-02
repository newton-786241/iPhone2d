"use client"

import { explore1Img, explore2Img, exploreVideo } from '@/utils';
import React, { useRef } from 'react'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(()=>{
    gsap.to('#explorevideo', {
      scrollTrigger : {
        trigger: '#explorevideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current?.play()
      }
    })

    gsap.to('#features_title', {scrollTrigger : {
      trigger: '#features_title',
      start: '10% bottom'
    },
    opacity:1,
    y: 0
    })
    gsap.to('.g_text',{y: 0, opacity: 1, ease: 'power2.inOut', duration: 1})
    gsap.to('.g_grow', {
      scrollTrigger:{
        trigger:'.g_grow',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
        scrub: 5.5
      },
      scale: 1,
      opacity: 1,
      ease: 'power1'
    })
  })

  

  return (
    <section className='h-full common-padding bg-zinc-950 relative overflow-hidden'>
        <div className='screen-max-width'>
          <div className='w-full'>
            <h1 id = "features_title" className='text-gray-300 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>Explore the full story.</h1>
          </div>

          <div className='flex flex-col justify-center items-center overflow-hidden'>
            <div className='mt-32 mb-24 pl-24'>
              <h2 className='text-5xl lg:text-7xl font-semibold text-white'>iPhone</h2>
              <h2 className='text-5xl lg:text-7xl font-semibold text-white'>Forged in Titanium</h2>
            </div>

            <div className='flex-center flex-col sm:px-10'>
              <div className='relative h-[50vh] w-full items-center pb-5'>
                <video playsInline id="explorevideo" className='w-full h-full object-cover object-center' preload='none' muted ref={videoRef}>
                  <source src={exploreVideo} type="video/mp4"/>
                </video>
              </div>

              <div className='flex flex-col w-full relative'>
                <div className='feature-video-container'>
                  <div className='overflow-hidden flex-1 h-[50vh]'>
                    <Image src={explore1Img} alt = 'titanium' className='feature-video g_grow'/>
                  </div>
                  <div className='overflow-hidden flex-1 h-[50vh]'>
                    <Image src={explore2Img} alt='titanium 2' className='feature-video g_grow'/>
                  </div>
                </div>

                <div className='feature-text-container'>
                  <div className='flex-1 flex-center'>
                    <p className='feature-text g_text'>
                      iPhone 15 Pro is {' '}
                      <span className='text-white'> the first iPhone to feature an aerospace grade titanium design</span>
                      , using the same alloy that supercrafts use for missions to Mars.
                    </p>
                  </div>

                  <div className='flex-1 flex-center'>
                    <p className='feature-text g_text'>
                      Titanuim has one of the best strength-to-weight ratios of any metal, making these our {' '}
                      <span className='text-white'>Lightest pro model ever. </span>
                      You'll notice the difference the moment you pick one up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Features
