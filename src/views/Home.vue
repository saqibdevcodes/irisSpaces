<template>
  <Layout>
    <div class="bg-[#fffdf9]">
      <!-- Section 1 - Image & Text -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            <div
              class="space-y-4 sm:space-y-5 md:space-y-6 lg:pt-[0%] order-2 lg:order-1"
            >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl text-[#560216] font-bold"
              >
                NOT YOUR TYPICAL WORKSPACE
              </h2>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                iris spaces is more than just a desk or an office; it's an
                environment designed to spark creativity, fuel growth, and
                restore balance. This is not a space that confines you. It's a
                space that elevates you.
              </p>
              <a
                href="contact#booking_form_section"
                class="pt-4 sm:pt-6 inline-block"
              >
                <button
                  class="bg-[#560216] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-[#440114] transition-all cursor-pointer w-full sm:w-60"
                >
                  BOOK NOW
                </button>
              </a>
            </div>
            <div class="relative order-1 lg:order-2">
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
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16 overflow-hidden"
      >
        <div class="max-w-7xl mx-auto overflow-hidden">
          <!-- Carousel Container -->
          <div
            class="relative py-8 sm:py-10 md:py-12 overflow-hidden"
            @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide"
          >
            <!-- Images Container -->
            <div
              class="relative h-[28rem] sm:h-[36rem] md:h-[42rem] lg:h-[48rem] flex items-center justify-center overflow-hidden"
            >
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
              class="absolute left-2 sm:left-4 md:left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg transition-all z-30"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <button
              @click="handleNextSlide"
              @mouseenter="pauseAutoSlide"
              @mouseleave="resumeAutoSlide"
              class="absolute right-2 sm:right-4 md:right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg transition-all z-30"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <!-- Dots Indicator -->
            <div class="flex justify-center mt-6 sm:mt-8 space-x-2">
              <button
                v-for="(slide, index) in sliderImages"
                :key="index"
                @click="handleDotClick(index)"
                @mouseenter="pauseAutoSlide"
                @mouseleave="resumeAutoSlide"
                class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                :class="
                  currentSlide === index
                    ? 'bg-[#560216] w-6 sm:w-8'
                    : 'bg-gray-300'
                "
              ></button>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3 - Overlapping Images Left -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            <!-- Overlapping Images on Left -->
            <div
              class="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] w-full lg:w-[90%] lg:order-1"
            >
              <div class="absolute inset-0">
                <img
                  src="/images/n_img_3.jpg"
                  alt="Coworking Main"
                  class="w-full h-full object-cover bg-left rounded-lg shadow-xl"
                />
              </div>
              <div
                class="absolute bottom-6 sm:bottom-8 md:bottom-12 -right-4 sm:-right-8 md:-right-16 lg:-right-32 w-[60%] sm:w-[65%] md:w-[70%] h-[35%] sm:h-[40%] md:h-[45%]"
              >
                <img
                  src="/images/n_img_13.jpg"
                  alt="Coworking Detail"
                  class="w-full h-full object-cover rounded-lg shadow-2xl border-2 sm:border-3 md:border-4 border-white"
                />
              </div>
            </div>

            <!-- Text on Right -->
            <div
              class="space-y-4 sm:space-y-5 md:space-y-6 lg:order-2 lg:pl-12 lg:max-w-3xl"
            >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl text-[#560216] font-bold"
              >
                SPACES THAT ELEVATE YOU
              </h2>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed"
              >
                Every nook and corner is designed to help you work not just at
                100%, but at 1000%. An environment that stimulates your mind,
                sharpens your focus, and allows you to sit back and enjoy the
                reflections that come to you.
                <br /><br />
                Discover a space designed to bring out your best.
              </p>

              <a
                href="contact#booking_form_section"
                class="pt-4 sm:pt-6 inline-block"
              >
                <button
                  class="bg-[#560216] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-[#440114] transition-all cursor-pointer w-full sm:w-60"
                >
                  BOOK NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4 - Overlapping Images Right -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            <!-- Text on Left -->
            <div
              class="space-y-4 sm:space-y-5 md:space-y-6 lg:order-1 lg:pr-12 lg:max-w-xl lg:pt-[0%] order-2 lg:order-1"
            >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl text-[#560216] font-bold"
              >
                YOUR THIRD SPACE
              </h2>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                A space that doesn't confine you in a box, but expands your
                ability to think, grow, and find balance between work and
                wellness
                <br /><br />
                Work, unwind, and find your perfect balance.
              </p>
              <a
                href="contact#booking_form_section"
                class="pt-4 sm:pt-6 inline-block"
              >
                <button
                  class="bg-[#560216] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-[#440114] transition-all cursor-pointer w-full sm:w-60"
                >
                  BOOK NOW
                </button>
              </a>
            </div>

            <!-- Overlapping Images on Right -->
            <div
              class="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] w-full lg:w-[90%] lg:ml-auto lg:order-2 order-1 lg:order-2"
            >
              <!-- Large Background Image - Full Size -->
              <div class="absolute inset-0">
                <img
                  src="/images/contact_header_background.jpg"
                  alt="Meeting Space Main"
                  class="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
              <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
              <div
                class="absolute bottom-6 sm:bottom-8 md:bottom-12 -left-4 sm:-left-8 md:-left-16 lg:-left-32 w-[60%] sm:w-[65%] md:w-[70%] h-[35%] sm:h-[40%] md:h-[45%]"
              >
                <img
                  src="/images/conference_room_1.jpg"
                  alt="Meeting Space Detail"
                  class="w-full h-full object-cover rounded-lg shadow-2xl border-2 sm:border-3 md:border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5 - Overlapping Images Left -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            <!-- Overlapping Images on Left -->
            <div
              class="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] w-full lg:w-[90%] lg:order-1"
            >
              <!-- Large Background Image - Full Size -->
              <div class="absolute inset-0">
                <img
                  src="/images/cafe_1.jpg"
                  alt="Research Lab Main"
                  class="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
              <!-- Smaller Overlapping Image - Half Outside Bottom Right -->
              <div
                class="absolute bottom-6 sm:bottom-8 md:bottom-12 -right-4 sm:-right-8 md:-right-16 lg:-right-32 w-[60%] sm:w-[65%] md:w-[70%] h-[35%] sm:h-[40%] md:h-[45%]"
              >
                <img
                  src="/images/cafe_2.jpg"
                  alt="Research Lab Detail"
                  class="w-full h-full object-cover rounded-lg shadow-2xl border-2 sm:border-3 md:border-4 border-white"
                />
              </div>
            </div>

            <!-- Text on Right -->
            <div
              class="space-y-4 sm:space-y-5 md:space-y-6 lg:order-2 lg:pl-12 lg:max-w-xl lg:pt-[0%]"
            >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl text-[#560216] font-bold"
              >
                IRIS COFFEE ETC
              </h2>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                The "etc" in iris coffee etc reflects the richness of this space
                it is coffee, but also much more: discovery, memory-making, and
                connection.
              </p>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                Here, people come not only to sip coffee but to pause, browse,
                connect, and leave with something meaningful in hand, whether it
                is a thoughtful gift, or simply a renewed sense of calm.
              </p>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                Explore more than coffee
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6 - Overlapping Images Right -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            <!-- Text on Left -->
            <div
              class="space-y-4 sm:space-y-5 md:space-y-6 lg:order-1 lg:pr-12 lg:max-w-xl lg:pt-[0%] order-2 lg:order-1"
            >
              <h2
                class="text-3xl sm:text-4xl md:text-5xl text-[#560216] font-bold"
              >
                WORK SMARTER, <br />LIVE BETTER
              </h2>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                Step inside and you will be surrounded by colours, creativity,
                and energy, creating an environment that elevates your mind,
                surrounds you with inspiration, and makes you feel good while
                you do your best work
              </p>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                Step into an environment that inspires productivity and
                well-being.
              </p>
              <a
                href="contact#booking_form_section"
                class="pt-4 sm:pt-6 inline-block"
              >
                <button
                  class="bg-[#560216] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-[#440114] transition-all cursor-pointer w-full sm:w-60"
                >
                  BOOK NOW
                </button>
              </a>
            </div>

            <!-- Overlapping Images on Right -->
            <div
              class="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] w-full lg:w-[90%] lg:ml-auto lg:order-2 order-1 lg:order-2"
            >
              <!-- Large Background Image - Full Size -->
              <div class="absolute inset-0">
                <img
                  src="/images/n_img_11.jpg"
                  alt="Virtual Office Main"
                  class="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
              <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
              <div
                class="absolute bottom-6 sm:bottom-8 md:bottom-12 -left-4 sm:-left-8 md:-left-16 lg:-left-32 w-[60%] sm:w-[65%] md:w-[70%] h-[35%] sm:h-[40%] md:h-[45%]"
              >
                <img
                  src="/images/n_img_9.jpg"
                  alt="Virtual Office Detail"
                  class="w-full h-full object-cover rounded-lg shadow-2xl border-2 sm:border-3 md:border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 7 - Services Grid (Taller Rectangles) -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16 mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-10 md:mb-12"
      >
        <div class="max-w-7xl mx-auto">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#560216] mb-6 sm:mb-8 md:mb-12 text-center font-bold"
          >
            BUILT FOR BUSINESSES OF ALL SIZES
          </h2>

          <!-- Horizontal Scroll Container -->
          <div class="relative flex items-center gap-2 md:gap-2 lg:gap-2">
            <!-- Left Arrow - Outside container -->
            <button
              @click="scrollLeft"
              @mouseenter="pauseAutoScroll"
              @mouseleave="resumeAutoScroll"
              class="flex-shrink-0 p-2 md:p-3 rounded-full bg-[#560216] text-white hover:bg-[#440114] transition-all shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed z-10"
              :disabled="!canScrollLeft"
              aria-label="Scroll left"
            >
              <svg
                class="w-4 h-4 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <div
              ref="scrollContainer"
              class="flex-1 flex gap-3 md:gap-4 lg:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
              style="scroll-behavior: smooth"
              @scroll="updateScrollButtons"
              @mouseenter="pauseAutoScroll"
              @mouseleave="resumeAutoScroll"
            >
              <!-- Dynamic Cards -->
              <div
                v-for="(card, index) in serviceCards"
                :key="index"
                class="flex-shrink-0 h-96 sm:h-96 md:h-96 relative rounded-lg overflow-hidden shadow-lg group cursor-pointer hover-float transition-all duration-500"
                :style="{
                  width: cardWidth,
                }"
              >
                <img
                  :src="card.image"
                  :alt="card.alt"
                  class="w-full h-96 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <!-- Top Content (On Hover) -->
                <div
                  class="absolute inset-3 sm:inset-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-[-20px] z-30"
                >
                  <div
                    class="bg-white rounded-lg p-4 sm:p-5 md:p-2 shadow-2xl h-full flex flex-col items-center justify-between overflow-y-auto"
                  >
                    <div
                      class="flex flex-col items-center justify-center w-full"
                    >
                      <h3
                        class="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#560216] text-center"
                      >
                        {{ card.title }}
                      </h3>
                      <p
                        class="text-xs sm:text-sm md:text-sm text-gray-700 leading-relaxed whitespace-pre-line max-w-full"
                      >
                        {{ card.description }}
                      </p>
                    </div>
                    <RouterLink
                      :to="`/contact?service=${encodeURIComponent(
                        card.title
                      )}#booking_form_section`"
                      class="inline-block w-full"
                    >
                      <button
                        class="bg-[#560216] text-white w-full h-10 px-3 py-4 md:px-4 md:py-2 rounded-lg text-xs md:text-sm hover:bg-[#440114] transition-all cursor-pointer"
                      >
                        Book Now
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Arrow - Outside container -->
            <button
              @click="scrollRight"
              @mouseenter="pauseAutoScroll"
              @mouseleave="resumeAutoScroll"
              class="flex-shrink-0 p-2 md:p-3 rounded-full bg-[#560216] text-white hover:bg-[#440114] transition-all shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed z-10"
              :disabled="!canScrollRight"
              aria-label="Scroll right"
            >
              <svg
                class="w-4 h-4 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Section 8 - Full Width Hero -->
      <section
        class="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div class="absolute inset-0">
          <img
            src="/images/gallery_floor.jpg"
            alt="Hero"
            class="w-full h-full"
          />
          <!-- <div class="absolute inset-0 bg-black/10"></div> -->
        </div>

        <div class="relative z-10 text-center px-4 sm:px-6 mt-[14%]">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-[#f0ebe1] border-2 sm:border-3 md:border-4 border-[#f0ebe1] px-4 sm:px-6 md:px-8 lg:px-48 py-3 sm:py-4 md:py-5 lg:py-6 uppercase tracking-wide sm:tracking-wider inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            GLOBAL IN SPIRIT
          </h1>
          <p
            class="text-base sm:text-lg md:text-2xl opacity-90 text-white italic px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Spaces that are thoughtfully designed with a unique global ambiance
            for thinkers,
          </p>
          <p
            class="text-base sm:text-lg md:text-2xl opacity-90 mb-6 sm:mb-8 text-white italic px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Creators, and doers, unlike anything else in Pakistan.
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
  </Layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useRouter } from "vue-router";
import Layout from "../layout/layout.vue";
// Slider data
const sliderImages = ref([
  "/images/cafe_area_3.jpg",
  "/images/n_img_14.jpg",
  "/images/n_img_7.jpg",
  "/images/floor_1_hall.jpg",

  "/images/main_header_background.jpg",
  "/images/cafe_area.jpg",
  "/images/n_img_15.jpg",
  "/images/contact_header_background.jpg",
]);

// Service cards data
const serviceCards = ref([
  {
    image: "/images/floor_pic_1.jpg",
    alt: "PRIVATE OFFICE SPACES",
    title: "PRIVATE OFFICE SPACES",
    link: "contact#booking_form_section",
    description: `Small Office (4 persons)
Medium Office (6–10 persons)
Large Office (10–36 persons)

 Amenities: Fully furnished, high-speed
internet, utilities, mail handling,
reception, cleaning, security, meeting
room credits.`,
  },
  {
    image: "/images/floor_3_rest_area.jpg",
    alt: "CUSTOMIZED MANAGED OFFICES",
    title: "CUSTOMIZED MANAGED OFFICES",
    link: "contact#booking_form_section",
    description: `Fully customizable office space or
entire floor (8–36 person capacity)
Dedicated pantry & washrooms
Exclusive amenities with premium
membership option`,
  },
  {
    image: "/images/n_img_4.jpg",
    alt: "CO-WORKING SPACES",
    title: "CO-WORKING SPACES",
    link: "contact#booking_form_section",
    description: `Day Pass 
Hot Desk
Dedicated Desk 

 Benefits: High-speed Wi-Fi, locker,
mail handling, meeting room credits,
community events, reception support.`,
  },
  {
    image: "/images/cafe_area_2.jpg",
    alt: "TRAINING, EVENT, AND EXHIBITION SPACESm",
    title: "TRAINING, EVENT, AND EXHIBITION SPACES",
    link: "contact#booking_form_section",
    image: "/images/cafe_area_2.jpg",
    description: `Flexible event halls for 30–80 persons
Suitable for training sessions,
workshops, exhibitions, and corporate events

 Pricing: Quotation on request`,
  },
  {
    image: "/images/conference_room_1.jpg",
    alt: "Meeting Room",
    title: "MEETING ROOMS",
    link: "contact#booking_form_section",
    description: `Hourly Booking
Half-Day (6 hrs),Full-Day (12 hrs)
Types:
Conference Rooms (8-person, AV,
video conferencing)
Iris Pods (1–2 persons, soundproof for
calls/mentoring)
Premium Boardroom (10-person,
smart TV, whiteboards, high-speed
internet)`,
  },
  {
    image: "/images/n_img_6.jpg",
    alt: "Meeting Room",
    title: "VIRTUAL DESK",
    link: "contact#booking_form_section",
    description: `Business & mailing address service
Pricing: Quotation on request`,
  },
  {
    image: "/images/n_img_12.jpg",
    alt: "Meeting Room",
    title: "FOCUS GROUP FACILITY",
    link: "contact#booking_form_section",
    description: `Dedicated spaces for client research,
consultations, and focus groups

Pricing: Quotation on request`,
  },
  {
    image: "/images/n_img_5.jpg",
    alt: "Meeting Room",
    title: "CLT (CENTRAL LOCATION TEST) FACILITY",
    link: "contact#booking_form_section",
    description: `Available as part of a premium membership
Ideal for product/market research companies 

Pricing: Quotation on request`,
  },
  {
    image: "/images/n_img_16.jpg",
    alt: "Meeting Room",
    title: "IRIS PODS",
    link: "contact#booking_form_section",
    description: `Soundproof pods for private calls
Mentoring sessions, and
Focused one-to-one meetings.

Pricing: Quotation on request`,
  },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0
      ? sliderImages.value.length - 1
      : currentSlide.value - 1;
};

// Horizontal scroll functionality
const scrollContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);
const isAutoScrollPaused = ref(false);
let autoScrollInterval = null;
const cardWidth = ref("calc((100% - 48px) / 3)"); // 3 cards with gaps

const updateScrollButtons = () => {
  if (scrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
    canScrollLeft.value = scrollLeft > 10;
    canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10;

    // Update card width based on container width and screen size
    // Responsive: 1 card on mobile, 2 on tablet, 3 on desktop
    if (clientWidth > 0) {
      const windowWidth = window.innerWidth;
      let cardsToShow = 1;
      let gap = 12; // gap-3 = 12px (mobile)

      if (windowWidth >= 1024) {
        // Large screens (lg): 3 cards
        cardsToShow = 3;
        gap = 24; // gap-6 = 24px
      } else if (windowWidth >= 768) {
        // Medium screens (md): 2 cards
        cardsToShow = 2;
        gap = 16; // gap-4 = 16px
      }

      const availableWidth = clientWidth;
      const numberOfGaps = cardsToShow - 1;
      // Calculate width: (width - gaps) / number of cards
      const calculatedWidth =
        (availableWidth - numberOfGaps * gap) / cardsToShow;
      cardWidth.value = `${calculatedWidth}px`;
    }

    // If reached the end, scroll back to start
    if (!canScrollRight.value && scrollLeft >= scrollWidth - clientWidth - 5) {
      setTimeout(() => {
        if (scrollContainer.value && !isAutoScrollPaused.value) {
          scrollContainer.value.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }, 2000); // Wait 2 seconds before looping
    }
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    const cardWidthValue = parseFloat(cardWidth.value) || 300;
    const windowWidth = window.innerWidth;
    let gap = 12; // gap-3 = 12px (mobile)

    if (windowWidth >= 1024) {
      gap = 24; // gap-6 = 24px
    } else if (windowWidth >= 768) {
      gap = 16; // gap-4 = 16px
    }

    const scrollAmount = cardWidthValue + gap; // One card width + gap

    scrollContainer.value.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    const cardWidthValue = parseFloat(cardWidth.value) || 300;
    const windowWidth = window.innerWidth;
    let gap = 12; // gap-3 = 12px (mobile)

    if (windowWidth >= 1024) {
      gap = 24; // gap-6 = 24px
    } else if (windowWidth >= 768) {
      gap = 16; // gap-4 = 16px
    }

    const scrollAmount = cardWidthValue + gap; // One card width + gap

    scrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

const startAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
  }

  autoScrollInterval = setInterval(() => {
    if (!isAutoScrollPaused.value && scrollContainer.value) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;

      // Check if we can scroll right
      if (scrollLeft < scrollWidth - clientWidth - 10) {
        scrollRight();
      } else {
        // Loop back to start
        scrollContainer.value.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, 4000); // Scroll every 4 seconds
};

const pauseAutoScroll = () => {
  isAutoScrollPaused.value = true;
};

const resumeAutoScroll = () => {
  isAutoScrollPaused.value = false;
};

// Calculate position of each image relative to current slide
const getPosition = (index) => {
  const diff = index - currentSlide.value;
  const total = sliderImages.value.length;

  // Normalize to -total/2 to +total/2 range
  if (diff > total / 2) return diff - total;
  if (diff < -total / 2) return diff + total;
  return diff;
};

// Get carousel item positioning and styling
const getCarouselItemStyle = (index) => {
  const position = getPosition(index);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const isTablet =
    typeof window !== "undefined" &&
    window.innerWidth >= 640 &&
    window.innerWidth < 1024;

  // Center image (position 0)
  if (position === 0) {
    return {
      left: "50%",
      transform: "translateX(-50%) scale(1)",
      width: isMobile ? "85%" : isTablet ? "70%" : "60%",
      height: isMobile ? "24rem" : isTablet ? "32rem" : "42rem",
      zIndex: 20,
      opacity: 1,
    };
  }

  // Left image (position -1)
  if (position === -1) {
    return {
      left: isMobile ? "2%" : "5%",
      transform: "translateX(0) scale(0.85)",
      width: isMobile ? "30%" : isTablet ? "32%" : "35%",
      height: isMobile ? "18rem" : isTablet ? "24rem" : "32rem",
      zIndex: 10,
      opacity: isMobile ? 0.5 : 0.7,
    };
  }

  // Right image (position 1)
  if (position === 1) {
    return {
      right: isMobile ? "2%" : "5%",
      transform: "translateX(0) scale(0.85)",
      width: isMobile ? "30%" : isTablet ? "32%" : "35%",
      height: isMobile ? "18rem" : isTablet ? "24rem" : "32rem",
      zIndex: 10,
      opacity: isMobile ? 0.5 : 0.7,
    };
  }

  // Hidden images - keep them off-screen but not too far
  return {
    left: position < 0 ? "-50%" : "150%",
    transform: "scale(0.7)",
    width: isMobile ? "30%" : "35%",
    height: isMobile ? "16rem" : isTablet ? "20rem" : "26rem",
    zIndex: 0,
    opacity: 0,
    pointerEvents: "none",
  };
};

const getCarouselItemClass = (index) => {
  const position = getPosition(index);
  if (position === 0) return "carousel-center";
  if (position === -1) return "carousel-left";
  if (position === 1) return "carousel-right";
  return "carousel-hidden";
};

const handleImageClick = (index) => {
  const position = getPosition(index);
  if (position === -1) {
    handlePrevSlide();
  } else if (position === 1) {
    handleNextSlide();
  }
};

// Auto-slide with pause functionality
let autoSlideInterval = null;
const isPaused = ref(false);
let resumeTimeout = null;

const startAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  autoSlideInterval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide();
    }
  }, 4000); // Smooth 4 second interval
};

const pauseAutoSlide = () => {
  isPaused.value = true;
  // Clear any pending resume timeout
  if (resumeTimeout) {
    clearTimeout(resumeTimeout);
    resumeTimeout = null;
  }
};

const resumeAutoSlide = () => {
  isPaused.value = false;
};

const handleNextSlide = () => {
  nextSlide();
};

const handlePrevSlide = () => {
  prevSlide();
};

const handleDotClick = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  startAutoSlide();
  // Wait for DOM to render before calculating
  nextTick(() => {
    updateScrollButtons();
    // Center the first set of cards on initial load
    if (scrollContainer.value) {
      setTimeout(() => {
        updateScrollButtons();
      }, 100);
    }
  });
  startAutoScroll(); // Start auto-scroll for horizontal slider
  // Update scroll buttons on window resize with debounce
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateScrollButtons();
    }, 150);
  });
});

// onUnmounted(() => {
//   if (autoSlideInterval) {
//     clearInterval(autoSlideInterval);
//   }
//   if (autoScrollInterval) {
//     clearInterval(autoScrollInterval);
//   }
//   window.removeEventListener("resize", updateScrollButtons);
// });

// useHead({
//   title: "Iris Spaces - Premium Workspace Solutions",
//   meta: [
//     {
//       name: "description",
//       content: "Discover premium workspace solutions at Iris Spaces.",
//     },
//   ],
// });
</script>

<style scoped>
/* Hide scrollbar for horizontal scroll */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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
