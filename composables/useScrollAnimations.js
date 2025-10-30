export const useScrollAnimations = () => {
  const initScrollAnimations = () => {
    if (process.client) {
      // Wait for GSAP to be available
      const checkGSAP = () => {
        if (window.gsap && window.ScrollTrigger) {
          const { gsap, ScrollTrigger } = window
          
          // Defer initial refresh until after full load for stable measurements
          if (document.readyState === 'complete') {
            ScrollTrigger.refresh()
          } else {
            window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
          }
          
          // Rely only on explicit classes for reveals to avoid layout shifts
          
          // Fade in animations with enhanced timing
          gsap.utils.toArray('.animate-fade-in').forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power1.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true
              }
            })
          })
          
          // Slide left animations with enhanced effects
          gsap.utils.toArray('.animate-slide-left').forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power1.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true
              }
            })
          })
          
          // Slide right animations with enhanced effects
          gsap.utils.toArray('.animate-slide-right').forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power1.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true
              }
            })
          })
          
          // Scale animations with professional ease
          gsap.utils.toArray('.animate-scale').forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power1.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true
              }
            })
          })
          
          // Zoom in effect for images
          gsap.utils.toArray('.animate-zoom').forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power1.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true
              }
            })
          })
          
          // Enhanced stagger animations for grid items - Professional cascade
          gsap.utils.toArray('.animate-stagger').forEach((container) => {
            if (container.closest('footer')) return
            const items = container.querySelectorAll('.stagger-item, > div')
            if (items.length > 0) {
              gsap.from(items, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power1.out",
                immediateRender: false,
                stagger: {
                  amount: 0.6,
                  from: "start"
                },
                scrollTrigger: {
                  trigger: container,
                  start: "top 90%",
                  toggleActions: "play none none none",
                  once: true
                }
              })
            }
          })
          
          // Grid items animation (for grids without stagger class)
          gsap.utils.toArray('.grid').forEach((grid) => {
            if (grid.closest('footer')) return
            const items = grid.children
            if (items.length > 0 && !grid.classList.contains('animate-stagger')) {
              gsap.from(items, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power1.out",
                immediateRender: false,
                stagger: {
                  amount: 0.5,
                  from: "start"
                },
                scrollTrigger: {
                  trigger: grid,
                  start: "top 90%",
                  toggleActions: "play none none none",
                  once: true
                }
              })
            }
          })
          
          // Parallax effect for hero sections
          gsap.utils.toArray('.hero-parallax').forEach((element) => {
            gsap.to(element, {
              yPercent: -50,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            })
          })
          
          // Text reveal animations
          gsap.utils.toArray('.text-reveal').forEach((element) => {
            const text = element.textContent
            element.innerHTML = text.split('').map(char => 
              char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
            ).join('')
            
            const spans = element.querySelectorAll('span')
            gsap.fromTo(spans, { autoAlpha: 0 }, {
              autoAlpha: 1,
              duration: 0.5,
              ease: "power1.out",
              stagger: 0.02,
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            })
          })
          
          // Image hover animations
          gsap.utils.toArray('.image-hover').forEach((element) => {
            const img = element.querySelector('img')
            if (img) {
              element.addEventListener('mouseenter', () => {
                gsap.to(img, {
                  scale: 1.1,
                  duration: 0.6,
                  ease: "power2.out"
                })
              })
              
              element.addEventListener('mouseleave', () => {
                gsap.to(img, {
                  scale: 1,
                  duration: 0.6,
                  ease: "power2.out"
                })
              })
            }
          })
        } else {
          // Retry after a short delay
          setTimeout(checkGSAP, 100)
        }
      }
      
      checkGSAP()
    }
  }
  
  const animateOnScroll = (element, animation) => {
    if (process.client && window.gsap && window.ScrollTrigger) {
      const { gsap, ScrollTrigger } = window
      gsap.fromTo(element,
        animation.from || { opacity: 0, y: 50 },
        {
          ...animation.to,
          duration: animation.duration || 0.8,
          ease: animation.ease || "power2.out",
          scrollTrigger: {
            trigger: element,
            start: animation.start || "top 80%",
            end: animation.end || "bottom 20%",
            toggleActions: animation.toggleActions || "play none none reverse"
          }
        }
      )
    }
  }
  
  return {
    initScrollAnimations,
    animateOnScroll
  }
}
