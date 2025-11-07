<template>
  <Layout>
    <div class="bg-[#fffdf9]">
      <!-- Section 1 - Heading + Grid -->
      <section
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-8 sm:mb-10 md:mb-12">
            <h1
              class="text-3xl sm:text-4xl md:text-5xl text-[#560216] mb-4 sm:mb-6 font-bold px-4"
            >
              EVERYTHING YOU NEED ALL IN ONE PLACE
            </h1>
            <!-- <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            Our expert research and consultation services help businesses make informed decisions about their workspace needs.
          </p> -->
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
          >
            <div
              v-for="service in services"
              :key="service.id"
              class="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer h-56 sm:h-60 md:h-64 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                :src="service.image"
                :alt="service.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur text-white m-[8%] sm:m-[10%] rounded-lg shadow-2xl p-3 sm:p-4 transition-all duration-300 group-hover:m-[6%] group-hover:sm:m-[8%]"
              >
                <h3
                  class="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-center px-1 font-bold leading-tight transition-colors duration-300 group-hover:text-[#440114]"
                >
                  {{ service.title }}
                </h3>
                <button
                  @click="openModal(service)"
                  class="bg-[#560216] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-[#440114] transition-all hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2 - Hero -->
      <section
        class="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div class="absolute inset-0">
          <img
            src="/images/n_img_8.jpg"
            alt="Hero"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="relative z-10 text-center px-4 sm:px-6">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-8xl mb-4 mt-[15%] sm:mb-5 text-[#560216] border-2 sm:border-3 md:border-4 border-[#560216] px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 uppercase tracking-wide sm:tracking-wider inline-block"
          >
            IDEAS TO EXECUTION
          </h1>
          <p
            class="text-lg sm:text-xl md:text-2xl opacity-90 text-white italic px-4 mt-3 sm:mt-4"
          >
            At iris spaces, we offer services that help your brands grow smarter
          </p>
        </div>
      </section>

      <!-- Service Info Modal -->
      <Teleport to="body">
        <Transition name="modal">
          <div
            v-if="isModalOpen"
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 sm:p-4"
            @click="closeModal"
          >
            <!-- Close Button -->
            <button
              class="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
              @click="closeModal"
              aria-label="Close modal"
            >
              <svg
                class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <!-- Modal Content -->
            <div
              class="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 lg:p-12"
              @click.stop
            >
              <div class="text-center mb-4 sm:mb-5 md:mb-6">
                <h2
                  class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#560216] mb-3 sm:mb-4 px-2"
                >
                  {{ selectedService?.title }}
                </h2>
                <div
                  class="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#560216] mx-auto"
                ></div>
              </div>

              <div
                class="space-y-4 sm:space-y-5 md:space-y-6 flex justify-center items-center gap-6"
              >
                <div
                  v-if="selectedService?.image"
                  class="mb-4 sm:mb-5 md:mb-6 w-[50%] flex justify-center"
                >
                  <img
                    :src="selectedService.image"
                    :alt="selectedService.title"
                    class="rounded-lg shadow-lg object-cover"
                  />
                </div>

                <div
                  class="prose prose-sm sm:prose-base md:prose-lg max-w-none w-[50%]"
                >
                  <p
                    v-if="selectedService?.description"
                    class="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line text-center px-2"
                  >
                    {{ selectedService.description }}
                  </p>
                </div>

                <!-- <div class="flex justify-center mt-8">
                <a 
                  href="/contact#booking_form_section"
                  @click="closeModal"
                  class="inline-block bg-[#560216] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#440114] transition-all"
                >
                  Get Started
                </a>
              </div> -->
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Layout from "../layout/layout.vue";

const isModalOpen = ref(false);
const selectedService = ref(null);

const openModal = (service) => {
  selectedService.value = service;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedService.value = null;
  }, 300);
};

// Close on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === "Escape" && isModalOpen.value) {
      closeModal();
    }
  };
  document.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

// Prevent body scroll when modal is open
watch(
  () => isModalOpen.value,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);

const services = [
  {
    id: 1,
    title: "QUANTITATIVE RESEARCH",
    image: "/images/art_8.jpg",
    description: `Our quantitative research services provide data-driven insights through structured surveys, statistical analysis, and comprehensive market studies. We help businesses understand consumer behavior, market trends, and performance metrics with precision and reliability.

Key Services:
• Online and offline surveys
• Statistical analysis and data interpretation
• Market segmentation studies
• Customer satisfaction surveys
• Brand awareness and perception studies

Deliverables include detailed reports with actionable insights to guide your strategic decisions.`,
  },
  {
    id: 2,
    title: "QUALITATIVE RESEARCH",
    image: "/images/art_7.jpg",
    description: `Deep dive into consumer motivations, attitudes, and behaviors through qualitative research methodologies. We facilitate meaningful conversations that uncover rich insights about your target audience.

Key Services:
• In-depth interviews (IDIs)
• Focus group discussions
• Ethnographic studies
• Consumer journey mapping
• Brand positioning research

Our experienced moderators create comfortable environments for authentic participant responses, ensuring you get genuine insights that inform your business strategies.`,
  },
  {
    id: 3,
    title: "MYSTERY SHOPPING",
    image: "/images/art_6.jpg",
    description: `Evaluate your customer experience from the consumer's perspective with our comprehensive mystery shopping services. We provide detailed assessments of service quality, staff performance, and overall customer satisfaction.

Key Services:
• Store visit evaluations
• Service quality assessments
• Staff performance monitoring
• Competitive benchmarking
• Customer journey analysis

Receive detailed reports with actionable recommendations to enhance customer experience and drive business growth.`,
  },
  {
    id: 4,
    title: "WORK CULTURE SURVEY",
    image: "/images/art_2.jpg",
    description: `Understand and improve your organizational culture through comprehensive workplace assessments. We help identify areas for improvement, measure employee satisfaction, and create strategies for positive cultural transformation.

Key Services:
• Employee satisfaction surveys
• Organizational culture assessment
• Engagement and retention analysis
• Leadership effectiveness studies
• Workplace environment evaluation

Our surveys provide actionable insights to build a thriving workplace culture that attracts and retains top talent.`,
  },
  {
    id: 5,
    title: "LEADERSHIP TRAINING",
    image: "/images/art_4.jpg",
    description: `Develop strong, effective leaders through our comprehensive leadership training programs. We offer customized workshops and coaching sessions designed to enhance leadership skills, strategic thinking, and team management capabilities.

Key Services:
• Leadership development workshops
• Executive coaching
• Team building programs
• Strategic planning sessions
• Performance management training

Our programs are tailored to your organization's needs, helping leaders at all levels unlock their potential and drive organizational success.`,
  },
  {
    id: 6,
    title: "DIGITAL MARKETING",
    image: "/images/art_5.jpg",
    description: `Amplify your brand's digital presence with our comprehensive digital marketing services. We help businesses reach their target audience, build brand awareness, and drive conversions through strategic online marketing.

Key Services:
• Social media marketing and management
• Content creation and strategy
• SEO and SEM optimization
• Email marketing campaigns
• Analytics and performance tracking

Our data-driven approach ensures your digital marketing efforts deliver measurable results and strong ROI.`,
  },
];
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
