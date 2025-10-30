<template>
  <div class="bg-white">
    <!-- Section 1 - Image & Text -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="space-y-6 lg:pt-[30%]">
            <h2 class="text-5xl ">Not your typical
              workspace</h2>
            <p class="text-lg text-gray-600">
              iris spaces is more than just a desk or an office; it's an environment designed to spark creativity, fuel growth, and restore balance. This is not a space that confines you. It's a space that elevates you.
            </p>
          </div>
          <div class="relative">
            <img 
              src="/images/building_sketch.png" 
              alt="Office"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 - Image Carousel -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto overflow-hidden">
        <!-- Carousel Container -->
        <div 
          class="relative py-12 overflow-hidden" 
          @mouseenter="pauseAutoSlide" 
          @mouseleave="resumeAutoSlide"
        >
          <!-- Images Container -->
          <div class="relative h-[36rem] flex items-center justify-center overflow-hidden">
            <!-- All images positioned absolutely for smooth transitions -->
            <div 
              v-for="(image, index) in sliderImages" 
              :key="index"
              class="absolute carousel-item transition-all duration-700 ease-out cursor-pointer"
              :class="getCarouselItemClass(index)"
              :style="getCarouselItemStyle(index)"
              @click="handleImageClick(index)"
              @mouseenter="pauseAutoSlide"
              @mouseleave="resumeAutoSlide"
            >
              <img 
                :src="image" 
                :alt="`Workspace ${index + 1}`"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <!-- Navigation Arrows -->
          <button 
            @click="handlePrevSlide"
            @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-30"
          >
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            @click="handleNextSlide"
            @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-30"
          >
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <!-- Dots Indicator -->
          <div class="flex justify-center mt-8 space-x-2">
            <button 
              v-for="(slide, index) in sliderImages" 
              :key="index"
              @click="handleDotClick(index)"
              @mouseenter="pauseAutoSlide"
              @mouseleave="resumeAutoSlide"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="currentSlide === index ? 'bg-[#560216] w-8' : 'bg-gray-300'"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 - Overlapping Images Left -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Overlapping Images on Left -->
          <div class="relative h-[700px] w-[90%] lg:order-1">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img 
                src="/images/cafe_general_area_1.jpg" 
                alt="Coworking Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Right -->
            <div class="absolute bottom-10 -right-32 w-[70%] h-[45%]">
              <img 
                src="/images/cafe_area.jpg" 
                alt="Coworking Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
          
          <!-- Text on Right -->
          <div class="space-y-6 lg:order-2 lg:pl-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">Spaces that
              elevate you</h2>
            <p class="text-lg text-gray-600">
              Every nook and corner is designed to help you work not just at 100%, but at 1000%. An environment that stimulates your mind, sharpens your focus, and allows you to sit back and enjoy the reflections that come to you.
            </p>
            
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 - Overlapping Images Right -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Text on Left -->
          <div class="space-y-6 lg:order-1 lg:pr-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">Your Third Space</h2>
            <p class="text-lg text-gray-600">
              A space that doesn't confine you in a box, but expands your ability to think, grow, and find balance between work and wellness
            </p>
          </div>
          
          <!-- Overlapping Images on Right -->
          <div class="relative h-[700px] w-[90%] ml-auto lg:order-2">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img 
                src="/images/contact_header_background.jpg" 
                alt="Meeting Space Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
            <div class="absolute bottom-10 -left-32 w-[70%] h-[45%]">
              <img 
                src="/images/conference_room_1.jpg" 
                alt="Meeting Space Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5 - Overlapping Images Left -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Overlapping Images on Left -->
          <div class="relative h-[700px] w-[90%] lg:order-1">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img 
                src="/images/cafe_1.jpg" 
                alt="Research Lab Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Right -->
            <div class="absolute bottom-10 -right-32 w-[70%] h-[45%]">
              <img 
                src="/images/cafe_2.jpg" 
                alt="Research Lab Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
          
          <!-- Text on Right -->
          <div class="space-y-6 lg:order-2 lg:pl-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">iris Coffee Etc</h2>
            <p class="text-lg text-gray-600">
              The "etc" in iris coffee etc reflects the richness of this space it is coffee, but also much more: discovery, memory-making, and connection.

Here, people come not only to sip coffee but to pause, browse, connect, and leave with something meaningful in hand, whether it is a thoughtful gift, or simply a renewed sense of calm.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6 - Overlapping Images Right -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Text on Left -->
          <div class="space-y-6 lg:order-1 lg:pr-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">Work smarter,

live better</h2>
            <p class="text-lg text-gray-600">
              Step inside and you will be surrounded by colours, creativity, and energy, creating an environment that elevates your mind, surrounds you with inspiration, and makes you feel good while you do your best work
            </p>
          </div>
          
          <!-- Overlapping Images on Right -->
          <div class="relative h-[700px] w-[90%] ml-auto lg:order-2">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img 
                src="/images/cafe_area.jpg" 
                alt="Virtual Office Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
            <div class="absolute bottom-10 -left-32 w-[70%] h-[45%]">
              <img 
                src="/images/cafe_area_2.jpg" 
                alt="Virtual Office Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7 - Services Grid (Taller Rectangles) -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 text-center">Built for businesses of all sizes</h2>
        <!-- <p class="text-lg text-gray-600 text-center mb-12">
          Choose from our comprehensive range of workspace solutions, each designed to meet specific business needs.
        </p> -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img 
              src="/images/floor_pic_1.jpg" 
              alt="Private Office"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-bold mb-2">Private Office Spaces</h3>
              <button class="bg-[#560216] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#440114] transition-all">
                Book Now
              </button>
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img 
              src="/images/floor_3_rest_area.jpg" 
              alt="Coworking"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-bold mb-2">Co-working Areas</h3>
              <button class="bg-[#560216] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#440114] transition-all">
                Book Now
              </button>
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img 
              src="/images/meeting_room.jpg" 
              alt="Meeting Room"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-bold mb-2">Meeting Rooms</h3>
              <button class="bg-[#560216] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#440114] transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8 - Full Width Hero -->
    <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="/images/gallery_floor.jpg" 
          alt="Hero"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <div class="relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-5 text-white border-4 border-white px-8 md:px-12 py-4 md:py-6 uppercase tracking-wider inline-block">
          IRIS SPACES
        </h1>
        <p class="text-xl opacity-90 text-white italic">
          Spaces that are thoughtfully designed with a unique global ambiance for thinkers,
        </p>
        <p class="text-xl opacity-90 mb-8 text-white italic">
creators, and doers, unlike anything else in Pakistan.
        </p>
      </div>

      <!-- <div class="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
        <h2 class="text-5xl font-bold mb-6">Section 8: Ready to Transform Your Workspace?</h2>
        <p class="text-xl opacity-90 mb-8">
          Join thousands of satisfied clients who have transformed their business operations with our premium workspace solutions.
        </p>
      </div> -->
    </section>
  </div>
</template>

<script setup>
// Slider data
const sliderImages = ref([
  '/images/gallery_floor.jpg',
  '/images/cafe_area.jpg',
  '/images/main_header_background.jpg',
  '/images/workspace_header_background.jpg',
  '/images/contact_header_background.jpg'
])

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? sliderImages.value.length - 1 : currentSlide.value - 1
}

// Calculate position of each image relative to current slide
const getPosition = (index) => {
  const diff = index - currentSlide.value
  const total = sliderImages.value.length
  
  // Normalize to -total/2 to +total/2 range
  if (diff > total / 2) return diff - total
  if (diff < -total / 2) return diff + total
  return diff
}

// Get carousel item positioning and styling
const getCarouselItemStyle = (index) => {
  const position = getPosition(index)
  
  // Center image (position 0)
  if (position === 0) {
    return {
      left: '50%',
      transform: 'translateX(-50%) scale(1)',
      width: '50%',
      height: '32rem',
      zIndex: 20,
      opacity: 1
    }
  }
  
  // Left image (position -1)
  if (position === -1) {
    return {
      left: '5%',
      transform: 'translateX(0) scale(0.85)',
      width: '30%',
      height: '24rem',
      zIndex: 10,
      opacity: 0.7
    }
  }
  
  // Right image (position 1)
  if (position === 1) {
    return {
      right: '5%',
      transform: 'translateX(0) scale(0.85)',
      width: '30%',
      height: '24rem',
      zIndex: 10,
      opacity: 0.7
    }
  }
  
  // Hidden images - keep them off-screen but not too far
  return {
    left: position < 0 ? '-50%' : '150%',
    transform: 'scale(0.7)',
    width: '30%',
    height: '20rem',
    zIndex: 0,
    opacity: 0,
    pointerEvents: 'none'
  }
}

const getCarouselItemClass = (index) => {
  const position = getPosition(index)
  if (position === 0) return 'carousel-center'
  if (position === -1) return 'carousel-left'
  if (position === 1) return 'carousel-right'
  return 'carousel-hidden'
}

const handleImageClick = (index) => {
  const position = getPosition(index)
  if (position === -1) {
    handlePrevSlide()
  } else if (position === 1) {
    handleNextSlide()
  }
}

// Auto-slide with pause functionality
let autoSlideInterval = null
const isPaused = ref(false)
let resumeTimeout = null

const startAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
  autoSlideInterval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, 4000) // Smooth 4 second interval
}

const pauseAutoSlide = () => {
  isPaused.value = true
  // Clear any pending resume timeout
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
    resumeTimeout = null
  }
}

const resumeAutoSlide = () => {
  isPaused.value = false
}

const handleNextSlide = () => {
  nextSlide()
}

const handlePrevSlide = () => {
  prevSlide()
}

const handleDotClick = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})

useHead({
  title: 'Iris Spaces - Premium Workspace Solutions',
  meta: [
    { name: 'description', content: 'Discover premium workspace solutions at Iris Spaces.' }
  ]
})
</script>

<style scoped>
/* Carousel smooth transitions */
.carousel-item {
  transition: all 700ms cubic-bezier(0.45, 0.05, 0.15, 1);
  will-change: transform, left, right, width, height, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}

.carousel-center {
  pointer-events: none;
}

.carousel-left,
.carousel-right {
  cursor: pointer;
}

.carousel-left:hover,
.carousel-right:hover {
  opacity: 1 !important;
  transform: scale(0.9) !important;
}

.carousel-hidden {
  pointer-events: none;
}
</style>
