<script setup>
import { ref } from "vue";

const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// WhatsApp chat link - replace with your actual WhatsApp number
const whatsappNumber = "+923018112093"; // Replace with your number (include country code without +)
const whatsappMessage = "Hello! I'm interested in your services."; // Default message

// Dialog state
const showDialog = ref(false);

const openDialog = () => {
  showDialog.value = true;
};

const closeDialog = () => {
  showDialog.value = false;
};

const openWhatsApp = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(url, "_blank");
  closeDialog(); // Close dialog after opening WhatsApp
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

  <!-- WhatsApp Chat Button -->
  <button
    @click="openDialog"
    class="fixed bottom-20 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors duration-300 z-50 cursor-pointer"
    aria-label="Chat on WhatsApp"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  </button>

  <!-- Scroll to Top Button -->
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

  <!-- WhatsApp Dialog Popover -->
  <Transition name="slide-fade">
    <div
      v-if="showDialog"
      class="fixed bottom-32 right-6 z-[100] w-80 max-w-[calc(100vw-3rem)]"
    >
      <div class="bg-white rounded-lg shadow-2xl p-6 relative">
        <!-- Close button -->
        <button
          @click="closeDialog"
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close dialog"
        >
          <svg
            class="w-5 h-5"
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

        <!-- Dialog content -->
        <div class="text-center">
          <!-- WhatsApp icon -->
          <div
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] mb-3"
          >
            <svg
              class="w-7 h-7 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p class="text-gray-600 text-sm mb-4">
            Chat with our support team on WhatsApp. We're here to help!
          </p>

          <!-- Chat button -->
          <button
            @click="openWhatsApp"
            class="w-full bg-[#25D366] text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#20ba5a] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Chat with Support
          </button>

          <!-- Cancel button -->
          <button
            @click="closeDialog"
            class="w-full mt-2 text-gray-600 px-4 py-2 rounded-lg hover:text-gray-800 transition-colors duration-300 text-sm"
          >
            Cancel
          </button>
        </div>

        <!-- Arrow pointing to button -->
        <div
          class="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"
        ></div>
      </div>
    </div>
  </Transition>

  <!-- Backdrop overlay (optional - for closing when clicking outside) -->
  <Transition name="fade">
    <div
      v-if="showDialog"
      @click="closeDialog"
      class="fixed inset-0 z-[90]"
    ></div>
  </Transition>
</template>

<style scoped>
/* Slide-fade transition for popover */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Fade transition for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
