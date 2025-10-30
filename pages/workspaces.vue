<template>
  <div class="bg-white">
    <!-- Section 1 -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Text on Left -->
          <div class="space-y-6 lg:order-1 lg:pr-12 lg:max-w-xl lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">Designed for
              inspiration</h2>
            <p class="text-lg text-gray-600">
              Experience a global-minded space designed to elevate your focus, spark conversations, and bring ideas alive. Whether you're a founder, freelancer, or creator, iris spaces is your trusted go-to third space
            </p>
          </div>
          
          <!-- Overlapping Images on Right -->
          <div class="relative h-[700px] w-[90%] ml-auto lg:order-2">
            <!-- Large Background Image - Full Size -->
            <div class="absolute inset-0">
              <img 
                src="/images/cafe_general_area_1.jpg" 
                alt="Meeting Space Main"
                class="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <!-- Smaller Overlapping Image - Half Outside Bottom Left (opposite side) -->
            <div class="absolute bottom-10 -left-32 w-[70%] h-[45%]">
              <img 
                src="/images/art_1.jpg" 
                alt="Meeting Space Detail"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative">
            <img 
              src="/images/art_2.jpg" 
              alt="Meeting Room"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="space-y-6 lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">What we offer</h2>
            <ul class="text-lg text-gray-600 space-y-3">
              <li class="flex items-start">
                <span class="text-[#560216] mr-3 mt-1">•</span>
                <span>Customized offices you can personalize to reflect your brand and culture.</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#560216] mr-3 mt-1">•</span>
                <span>Flexible open spaces for collaboration, training, and community events.</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#560216] mr-3 mt-1">•</span>
                <span>Wellness areas for meditation, balance, and recharging your senses.</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#560216] mr-3 mt-1">•</span>
                <span>Private boardrooms for brainstorming, strategy, and conversations.</span>
              </li>
              
              <li class="flex items-start">
                <span class="text-[#560216] mr-3 mt-1">•</span>
                <span>Focus group discussion rooms for qualitative research and collective insights.</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#560216] mr-3 mt-1">•</span>
                <span>One-to-one pods for private conversations and deep thinking.</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#560216] mr-3 mt-1">•</span>
                <span>All the essentials—Wi-Fi, security, tea, coffee, and more—without the hassle.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 - Grid -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">Built for businesses of all sizes</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
          <div v-for="service in services" :key="service.id" class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img 
              :src="service.image" 
              :alt="service.title"
              alt="Private Office"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-bold mb-2">{{ service.title }}</h3>
              <button class="bg-[#560216] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#440114] transition-all">
                Book Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 4 - Hero -->
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
          Global in Spirit
        </h1>
        <p class="text-xl opacity-90 text-white italic">
          Spaces that are thoughtfully designed with a unique global ambiance for thinkers,
        </p>
        <p class="text-xl opacity-90 mb-8 text-white italic">
          creators, and doers, unlike anything else in Pakistan.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Workspaces - Iris Spaces',
  meta: [
    { name: 'description', content: 'Explore our premium workspace solutions.' }
  ]
})


const services = [
  {
    id: 1,
    title: "Quantitative Research",
    image: "/images/floor_pic_1.jpg",
  },
  {
    id: 2,
    title: "Qualitative research",
    image: "/images/floor_3_rest_area.jpg",
  },
  {
    id: 3,
    title: "Mystery Shopping",
    image: "/images/meeting_room.jpg",
  },
  {
    id: 4,
    title: "Work Culture Survey",
    image: "/images/cafe_area_2.jpg",
  },
  {
    id: 5,
    title: "Leadership Training",
    image: "/images/conference_room_1.jpg",
  },
  {
    id: 6,
    title: "Digital Marketing",
    image: "/images/floor_pic_2_sitting.jpg",
  },
  {
    id: 7,
    title: "Focus Group Facility",
    image: "/images/cafe_area_3.jpg",
  }
]


</script>
