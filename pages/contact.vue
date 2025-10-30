<template>
  <div class="bg-white">
    <!-- Section 1 -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="space-y-6 lg:pt-[30%]">
            <h2 class="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p class="text-lg text-gray-600">
              Whether you're an established enterprise, solopreneur or a growing startup, iris spaces is designed to elevate your workday.
            </p>
          </div>
          <div class="relative">
            <img 
              src="/images/art_3.jpg" 
              alt="Office"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 - Contact Form -->
    <section class="px-4 py-16 md:px-[8%] lg:px-[10%] xl:px-[12%] bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
          <p class="text-lg text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent"
              />
            </div>
  <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent"
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
              <input
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Requirements *</label>
              <select
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent"
              >
                <option value="">Select your requirements</option>
                <option value="office-space">Office Space</option>
                <option value="co-working">Co-working Space</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="event-space">Event Space</option>
                <option value="research-consultation">Research Consultation</option>
              </select>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
            <textarea
              rows="5"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent resize-none"
              placeholder="Please provide any additional information..."
            ></textarea>
          </div>
          
          <div class="text-center pt-6">
            <button
              type="submit"
              class="bg-[#560216] text-white px-12 py-4 rounded-lg font-medium text-lg hover:bg-[#440114]"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Section 3 - Info Grid -->
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
  title: 'Contact Us - Iris Spaces',
  meta: [
    { name: 'description', content: 'Contact Iris Spaces for workspace solutions.' }
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
  },
  {
    id: 8,
    title: "CLT (Central Location Test) Facility",
    image: "/images/cafe_area_2.jpg",
  },
]



</script>
