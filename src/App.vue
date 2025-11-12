<script setup>
import { ref } from "vue";

const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const down = ref(false);
const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  down.value = scrollTop > 100;
};

window.addEventListener("scroll", handleScroll);
</script>

<template>
  <RouterView />
  <button
    v-if="down"
    @click="toTop"
    class="fixed bottom-6 right-6 bg-[#560216] text-white p-3 rounded-full shadow-lg hover:bg-[#440114] transition-colors duration-300 z-50 cursor-pointer"
    aria-label="Scroll to top"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      ></path>
    </svg>
  </button>
</template>

<style scoped></style>
