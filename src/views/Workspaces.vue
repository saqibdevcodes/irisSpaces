<template>
  <Layout>
    <div class="bg-[#fffdf9]">
      <!-- Section 1 -->
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
                DESIGNED FOR INSPIRATION
              </h2>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxedd"
              >
                Experience a global-minded space designed to elevate your focus,
                spark conversations, and bring ideas alive. Whether you're a
                founder, freelancer, or creator, iris spaces is your trusted
                go-to third space
              </p>
            </div>

            <!-- Overlapping Images on Right -->
            <div
              class="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] w-full lg:w-[90%] lg:ml-auto lg:order-2 order-1 lg:order-2"
            >
              <!-- Large Background Image - Full Size -->
              <div class="absolute inset-0">
                <img
                  src="/images/cafe_general_area_1.jpg"
                  alt="Meeting Space Main"
                  class="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
              <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
              <div
                class="absolute bottom-6 sm:bottom-8 md:bottom-10 -left-4 sm:-left-8 md:-left-16 lg:-left-32 w-[60%] sm:w-[65%] md:w-[70%] h-[35%] sm:h-[40%] md:h-[45%]"
              >
                <img
                  src="/images/art_1.jpg"
                  alt="Meeting Space Detail"
                  class="w-full h-full object-cover rounded-lg shadow-2xl border-2 sm:border-3 md:border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2 -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            <div class="relative">
              <img
                src="/images/n_img_1.jpg"
                alt="Meeting Room"
                class="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div class="space-y-4 sm:space-y-5 md:space-y-6 lg:pt-[25%]">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl text-[#560216] font-bold"
              >
                WHAT WE OFFER
              </h2>
              <ul
                class="text-2xl sm:text-lg text-gray-600 space-y-2 sm:space-y-3"
              >
                <li class="flex items-start text-xl">
                  <span class="text-[#560216] mr-2 sm:mr-3 mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span
                    >Customized offices you can personalize to reflect your
                    brand and culture.</span
                  >
                </li>
                <li class="flex items-start text-xl">
                  <span class="text-[#560216] mr-2 sm:mr-3 mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span
                    >Flexible open spaces for collaboration, training, and
                    community events.</span
                  >
                </li>
                <li class="flex items-start text-xl">
                  <span class="text-[#560216] mr-2 sm:mr-3 mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span
                    >Wellness areas for meditation, balance, and recharging your
                    senses.</span
                  >
                </li>
                <li class="flex items-start text-xl">
                  <span class="text-[#560216] mr-2 sm:mr-3 mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span
                    >Private boardrooms for brainstorming, strategy, and
                    conversations.</span
                  >
                </li>

                <li class="flex items-start text-xl">
                  <span class="text-[#560216] mr-2 sm:mr-3 mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span
                    >Focus group discussion rooms for qualitative research and
                    collective insights.</span
                  >
                </li>
                <li class="flex items-start text-xl">
                  <span class="text-[#560216] mr-2 sm:mr-3 mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span
                    >One-to-one pods for private conversations and deep
                    thinking.</span
                  >
                </li>
                <li class="flex items-start text-xl">
                  <span class="text-[#560216] mr-2 sm:mr-3 mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span
                    >All the essentials—Wi-Fi, security, tea, coffee, and
                    more—without the hassle.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3 - Info Grid -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16 mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-16"
      >
        <div class="max-w-7xl mx-auto">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl text-[#560216] mb-8 sm:mb-10 md:mb-12 text-center font-bold"
          >
            BUILT FOR BUSINESSES OF ALL SIZES
          </h2>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
          >
            <div
              v-for="service in services"
              :key="service.id"
              class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer h-[400px] sm:h-[450px] md:h-[470px]"
            >
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
              ></div>

              <!-- Bottom Heading (Default - fades out on hover) -->
              <div
                class="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 z-10"
              >
                <h3
                  class="text-base sm:text-lg md:text-xl font-bold text-center"
                >
                  {{ service.title }}
                </h3>
              </div>

              <!-- Top Content (On Hover) -->
              <div
                class="absolute inset-3 sm:inset-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-[-20px] z-30"
              >
                <div
                  class="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-2xl h-full flex flex-col items-center justify-between overflow-y-auto"
                >
                  <div class="flex flex-col items-center w-full">
                    <h3
                      class="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#560216] text-center"
                    >
                      {{ service.title }}
                    </h3>
                    <p
                      class="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line max-w-full"
                    >
                      {{ service.description }}
                    </p>
                  </div>
                  <RouterLink
                    :to="`/contact?service=${encodeURIComponent(
                      service.title
                    )}#booking_form_section`"
                    class="flex justify-center mt-3 sm:mt-4 w-full"
                  >
                    <button
                      class="bg-[#560216] text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-[#440114] transition-all w-40 sm:w-96 md:w-96"
                    >
                      Book Now
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
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
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-[#f0ebe1] border-2 sm:border-3 md:border-4 border-[#f0ebe1] px-4 sm:px-6 md:px-8 lg:px-48 py-3 sm:py-4 md:py-5 lg:py-6 uppercase tracking-wide sm:tracking-wider inline-block"
          >
            GLOBAL IN SPIRIT
          </h1>
          <p
            class="text-base sm:text-lg md:text-2xl opacity-90 text-white italic px-4"
          >
            Spaces that are thoughtfully designed with a unique global ambiance
            for thinkers,
          </p>
          <p
            class="text-base sm:text-lg md:text-2xl opacity-90 mb-6 sm:mb-8 text-white italic px-4"
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
import Layout from "../layout/layout.vue";
// import { useHead } from "@unhead/vue";

// useHead({
//   title: "Workspaces - Iris Spaces",
//   meta: [
//     {
//       name: "description",
//       content: "Explore our premium workspace solutions.",
//     },
//   ],
// });

const services = [
  {
    id: 1,
    title: "PRIVATE OFFICE SPACES",
    image: "/images/floor_pic_1.jpg",
    description: `Small Office (4 persons)
Medium Office (6–10 persons)
Large Office (10–36 persons)

 Amenities: Fully furnished, high-speed
internet, utilities, mail handling,
reception, cleaning, security, meeting
room credits.`,
  },
  {
    id: 2,
    title: "CUSTOMIZED MANAGED OFFICES",
    image: "/images/floor_3_rest_area.jpg",
    description: `Fully customizable office space or
entire floor (8–36 person capacity)
Dedicated pantry & washrooms
Exclusive amenities with premium
membership option`,
  },
  {
    id: 3,
    title: "CO-WORKING SPACES",
    image: "/images/n_img_4.jpg",
    description: `Day Pass 
Hot Desk
Dedicated Desk 

 Benefits: High-speed Wi-Fi, locker,
mail handling, meeting room credits,
community events, reception support.`,
  },
  {
    id: 4,
    title: "TRAINING, EVENT, AND EXHIBITION SPACES",
    image: "/images/cafe_area_2.jpg",
    description: `Flexible event halls for 30–80 persons
Suitable for training sessions,
workshops, exhibitions, and corporate events

 Pricing: Quotation on request`,
  },
  {
    id: 5,
    title: "MEETING ROOMS",
    image: "/images/conference_room_1.jpg",
    description: `Hourly Booking
Half-Day (6 hrs)
Full-Day (12 hrs)
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
    id: 6,
    title: "VIRTUAL DESK",
    image: "/images/n_img_6.jpg",
    description: `Business & mailing address service
Pricing: Quotation on request`,
  },
  {
    id: 7,
    title: "FOCUS GROUP FACILITY",
    image: "/images/n_img_12.jpg",
    description: `Dedicated spaces for client research,
consultations, and focus groups

Pricing: Quotation on request`,
  },
  {
    id: 8,
    title: "CLT (CENTRAL LOCATION TEST) FACILITY",
    image: "/images/n_img_5.jpg",
    description: `Available as part of a premium membership
Ideal for product/market research companies 

Pricing: Quotation on request`,
  },
  {
    id: 9,
    title: "IRIS PODS",
    image: "/images/n_img_16.jpg",
    description: `Soundproof pods for private calls
Mentoring sessions, and
Focused one-to-one meetings.

Pricing: Quotation on request`,
  },
];
</script>
