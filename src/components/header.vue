<template>
  <div class="min-h-screen bg-[#fffdf9] flex flex-col">
    <!-- Header with Background Image -->
    <header
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          :src="headerImage"
          :alt="currentPageTitle"
          class="object-cover w-full h-full"
          loading="eager"
          fetchpriority="high"
        />
        <div class="absolute inset-0"></div>
      </div>

      <!-- Navigation Bar -->
      <nav
        class="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 md:px-8 font-heading drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
      >
        <div class="flex items-center justify-between max-w-7xl mx-auto">
          <!-- Logo -->
          <!-- <RouterLink to="/" class="flex items-center space-x-2 z-50">
            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span class="text-[#560216] font-bold text-xl">IS</span>
            </div>
            <span class="text-white font-bold text-xl hidden sm:block">IRIS SPACES</span>
          </RouterLink> -->
          <RouterLink
            to="/"
            class="flex items-center space-x-2 z-50 text-decoration-none logo-link"
          >
            <!-- Replace this with your logo -->
            <img
              src="/images/logo_white_text.png"
              alt="Iris Spaces Logo"
              class="w-32 sm:w-40 md:w-32 object-contain"
              loading="eager"
              fetchpriority="high"
            />
          </RouterLink>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-white"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex md:space-x-4 lg:space-x-6 xl:space-x-8">
            <RouterLink
              to="/"
              class="text-white text-base lg:text-lg xl:text-xl hover:text-[#f0ebe1] transition-colors duration-300 font-medium"
              :class="{ 'border-b-2 border-white': $route.path === '/' }"
            >
              HOME
            </RouterLink>
            <RouterLink
              to="/workspaces"
              class="text-white text-base lg:text-lg xl:text-xl hover:text-[#f0ebe1] transition-colors duration-300 font-medium"
              :class="{
                'border-b-2 border-white': $route.path === '/workspaces',
              }"
            >
              WORKSPACES
            </RouterLink>
            <RouterLink
              to="/coffee"
              class="text-white text-base lg:text-lg xl:text-xl hover:text-[#f0ebe1] transition-colors duration-300 font-medium"
              :class="{ 'border-b-2 border-white': $route.path === '/coffee' }"
            >
              COFFEE ETC
            </RouterLink>
            <RouterLink
              to="/research-consult"
              class="text-white text-base lg:text-lg xl:text-xl hover:text-[#f0ebe1] transition-colors duration-300 font-medium"
              :class="{
                'border-b-2 border-white': $route.path === '/research-consult',
              }"
            >
              RESEARCH & CONSULT
            </RouterLink>
            <RouterLink
              to="/contact"
              class="text-white text-base lg:text-lg xl:text-xl hover:text-[#f0ebe1] transition-colors duration-300 font-medium"
              :class="{ 'border-b-2 border-white': $route.path === '/contact' }"
            >
              CONTACT
            </RouterLink>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div
          v-if="mobileMenuOpen"
          class="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 z-[999]"
        >
          <div class="flex flex-col space-y-4">
            <RouterLink
              to="/"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              HOME
            </RouterLink>
            <RouterLink
              to="/workspaces"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              WORKSPACES
            </RouterLink>
            <RouterLink
              to="/coffee"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              COFFEE ETC
            </RouterLink>
            <RouterLink
              to="/research-consult"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              RESEARCH & CONSULT
            </RouterLink>
            <RouterLink
              to="/contact"
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-[#560216] transition-colors duration-300 font-medium"
            >
              CONTACT
            </RouterLink>
          </div>
        </div>
      </nav>

      <!-- White Overlay for Coffee Page -->
      <div
        v-if="route.path === '/coffee'"
        class="absolute inset-0 bg-white/50 z-40"
      ></div>

      <!-- Centered Title -->
      <div class="relative z-40 text-center px-4">
        <h1
          v-if="route.path !== '/coffee'"
          :class="[
            'text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold border-2 sm:border-3 md:border-4 px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 uppercase tracking-wide sm:tracking-wider inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]',
            h1ColorClasses,
          ]"
        >
          IRIS SPACES
        </h1>
        <h1
          v-else
          class="inline-flex items-center justify-center gap-4 sm:gap-6 md:gap-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#560216] border-2 border-[#560216] px-6 sm:px-10 md:px-14 py-6 sm:py-8 md:py-10 uppercase tracking-wide sm:tracking-wider"
        >
          <span class="text-center leading-tight font-heading">
            PAGE UNDER <br />
            CONSTRUCTION
          </span>

          <img
            src="/images/cup.webp"
            alt="Coffee Cup"
            class="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 object-contain flex-shrink-0"
            loading="eager"
            fetchpriority="high"
          />
        </h1>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const mobileMenuOpen = ref(false);
const isImageModalOpen = ref(false);
const modalImageSrc = ref("");
const modalImageAlt = ref("");
const isResearchConsult = ref(false);

// Header images mapping
const headerImages = {
  "/": "/images/main_header_background.jpg",
  "/workspaces": "/images/n_img_15.jpg",
  "/coffee": "/images/cafe_2.jpg",
  "/research-consult": "/images/n_img_10.jpg",
  "/contact": "/images/n_img_2.jpg",
};

// Page titles
const pageTitles = {
  "/": "HOME",
  "/workspaces": "Workspaces",
  "/coffee": "COFFEE ETC",
  "/research-consult": "RESEARCH & CONSULT",
  "/contact": "CONTACT",
};

// Computed properties for current page
const headerImage = computed(
  () => headerImages[route.path] || "/images/office-space-1.jpg"
);
const currentPageTitle = computed(
  () => pageTitles[route.path] || "Iris Spaces"
);
const h1ColorClasses = computed(() => {
  return isResearchConsult.value || route.path === "/workspaces"
    ? "text-white border-white "
    : "text-[#f0ebe1] border-[#f0ebe1] ";
});

// Update isResearchConsult on mount and route changes
const updateResearchConsultStatus = () => {
  isResearchConsult.value = route.path === "/research-consult";
};

// Update when route changes
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
    updateResearchConsultStatus();
  },
  { immediate: true }
);
</script>
