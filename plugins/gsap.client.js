import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    // Global GSAP configuration
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false
    })
    // Smooth default timings and avoid conflicts between animations
    gsap.defaults({ duration: 0.6, ease: 'power1.out', overwrite: 'auto' })
    // Stabilize ScrollTrigger on device rotations/resize
    ScrollTrigger.config({ ignoreMobileResize: true, syncInterval: 0 })
    // Reduce visible stutter during spikes
    gsap.ticker.lagSmoothing(500, 33)
    // Ensure initial refresh after full load for accurate positions
    if (document.readyState === 'complete') {
      ScrollTrigger.refresh()
    } else {
      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
    }
    
    // Make GSAP available globally
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger
  }
  
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
