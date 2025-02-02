"use client"

import { chipImg, frameImg, frameVideo } from '@/utils'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Power2 } from 'gsap'

const HowItWorks = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useGSAP(()=>{
        gsap.to('#hiwVideo', {
            scrollTrigger : {
              trigger: '#hiwVideo',
              toggleActions: 'play pause reverse restart',
              start: '-10% bottom',
            },
            onComplete: () => {
              videoRef.current?.play();
            }
          })
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: 'top center',
                toggleActions : 'play none none none'
            },
            opacity: 0,
            scale: 2,
            duration: 2, 
            ease: Power2.easeInOut
        })
        gsap.to('.g_fadeIn',{
            scrollTrigger:{
                trigger:'.g_fadeIn',
                start: '-20% bottom'
            },
            opacity: 1,
            y: 10,
            ease: Power2.easeInOut
        })
    },[])

  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <div id='chip' className='flex-center w-full my-20'>
                <Image src={chipImg} alt="chip" width={180} height={180} />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='hiw-title text-white'>
                    A17 Pro Chip.
                    <br /> A monster win for gaming.
                </h2>
                <p className='hiw-subtitle'>
                    It's here. It's the biggest redesign in the history of Apple GPUs.
                </p>
            </div>
            <div className='w-[90%] m-auto'>
            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <Image
                            src={frameImg}
                            alt = "frame"
                            className='bg-transparent relative z-10'
                        />
                    </div>
                    <div className='hiw-video'>
                        <video className='pointer-events-none' id='hiwVideo' playsInline preload='none' muted autoPlay ref= {videoRef}>
                            <source src={frameVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <p className='text-gray-300 font-semibold text-center mt-3'>Honkai: Star Rail</p>
            </div>
            </div>
            <div className='hiw-text-container'>
                <div className='flex flex-1 justify-center flex-col'>
                    <p className='hiw-text g_fadeIn'>
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                    </p>
                    <p className="hiw-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
                <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU</p>
                <p className="hiw-text">with 6 cores</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
