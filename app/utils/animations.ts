import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target: gsap.TweenTarget, animationProps: gsap.TweenVars, scrollProps?: gsap.DOMTarget | ScrollTrigger.Vars | undefined) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}

export const animateWithGsapTimeline = (timeline: gsap.core.Timeline, rotationRef: RefObject<Group<Object3DEventMap>>, rotationState: number, firstTarget: string, secondTarget: string, animationProps: { transform: string; duration: number; }) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
}