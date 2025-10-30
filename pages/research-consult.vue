<template>
  <div class="bg-white">
    <!-- Section 1 - Heading + Grid -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">Research & Consult</h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            Our expert research and consultation services help businesses make informed decisions about their workspace needs.
          </p>
        </div>
        
       
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer h-96">
            <img 
              :src="service.image" 
              :alt="service.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
              <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
              <button class="bg-[#560216] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#440114]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <!-- Section 2 - Hero -->
    <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="/images/floor_1_hall.jpg" 
          alt="Hero"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <div class="relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-5 text-white border-4 border-white px-8 md:px-12 py-4 md:py-6 uppercase tracking-wider inline-block">
          ideas to execution
        </h1>
        <p class="text-xl opacity-90 text-white italic">
          At iris spaces, we offer services that help your brands grow smarter
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>

useHead({
  title: 'Research & Consult - Iris Spaces',
  meta: [
    { name: 'description', content: 'Expert research and consultation services at Iris Spaces.' }
  ]
})

const services = [
  {
    id: 1,
    title: "Quantitative Research",
    image: "/images/art_8.jpg",
  },
  {
    id: 2,
    title: "Qualitative research",
    image: "/images/art_7.jpg",
  },
  {
    id: 3,
    title: "Mystery Shopping",
    image: "/images/art_6.jpg",
  },
  {
    id: 4,
    title: "Work Culture Survey",
    image: "/images/art_2.jpg",
  },
  {
    id: 5,
    title: "Leadership Training",
    image: "/images/art_4.jpg",
  },
  {
    id: 6,
    title: "Digital Marketing",
    image: "/images/art_5.jpg",
  },
]


</script>
