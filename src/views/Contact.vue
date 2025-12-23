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
            <div class="space-y-4 sm:space-y-5 md:space-y-6 lg:pt-[0%]">
              <h2
                class="text-3xl sm:text-4xl md:text-5xl text-[#560216] font-bold"
              >
                GET IN TOUCH
              </h2>
              <p
                class="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed"
              >
                Whether you're an established enterprise, solopreneur or a
                growing startup, iris spaces is designed to elevate your
                workday.
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
      <section
        id="booking_form_section"
        class="px-4 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[12%] py-8 sm:py-12 md:py-16"
      >
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8 sm:mb-10 md:mb-12">
            <h2
              class="text-3xl sm:text-4xl md:text-5xl text-[#560216] mb-3 sm:mb-4 font-bold"
            >
              SEND US A MESSAGE
            </h2>
            <p class="text-base sm:text-lg text-gray-600 px-4">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <!-- Success Message -->
          <div
            v-if="submitSuccess"
            class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
          >
            <p class="font-semibold">{{ submitMessage }}</p>
          </div>

          <!-- Error Message -->
          <div
            v-if="submitError"
            class="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center"
          >
            <p class="font-semibold">{{ submitError }}</p>
          </div>

          <form
            @submit.prevent="handleSubmit"
            class="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
            >
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Full Name *</label
                >
                <input
                  v-model="formData.fullName"
                  type="text"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent',
                    errors.fullName ? 'border-red-500' : 'border-gray-300',
                  ]"
                  @blur="validateField('fullName')"
                />
                <p v-if="errors.fullName" class="text-red-500 text-sm mt-1">
                  {{ errors.fullName }}
                </p>
              </div>

              


              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Email Address *</label
                >
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent',
                    errors.email ? 'border-red-500' : 'border-gray-300',
                  ]"
                  @blur="validateField('email')"
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                  {{ errors.email }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">


              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Contact Number *</label
                >
                <input
                  v-model="formData.contactNumber"
                  type="tel"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent',
                    errors.contactNumber ? 'border-red-500' : 'border-gray-300',
                  ]"
                  @blur="validateField('contactNumber')"
                />
                <p
                  v-if="errors.contactNumber"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ errors.contactNumber }}
                </p>
              </div>



              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Company Name *</label
                >
                <input
                  v-model="formData.companyName"
                  type="text"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent',
                    errors.companyName ? 'border-red-500' : 'border-gray-300',
                  ]"
                  @blur="validateField('companyName')"
                />
                <p v-if="errors.companyName" class="text-red-500 text-sm mt-1">
                  {{ errors.companyName }}
                </p>
              </div>


              
             
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Requirements *</label
                >
                <select
                  v-model="formData.requirements"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent',
                    errors.requirements ? 'border-red-500' : 'border-gray-300',
                  ]"
                  @blur="validateField('requirements')"
                >
                  <option value="">Select your requirements</option>
                  <option value="PRIVATE OFFICE SPACES">
                    PRIVATE OFFICE SPACES
                  </option>
                  <option value="CUSTOMIZED MANAGED OFFICES">
                    CUSTOMIZED MANAGED OFFICES
                  </option>
                  <option value="CO-WORKING SPACES">CO-WORKING SPACES</option>
                  <option value="TRAINING, EVENT, AND EXHIBITION SPACES">
                    TRAINING, EVENT, AND EXHIBITION SPACES
                  </option>
                  <option value="MEETING ROOMS">MEETING ROOMS</option>
                  <option value="VIRTUAL DESK">VIRTUAL DESK</option>
                  <option value="FOCUS GROUP FACILITY">
                    FOCUS GROUP FACILITY
                  </option>
                  <option value="CLT (CENTRAL LOCATION TEST) FACILITY">
                    CLT (CENTRAL LOCATION TEST) FACILITY
                  </option>
                  <option value="IRIS PODS">IRIS PODS</option>
                </select>
                <p v-if="errors.requirements" class="text-red-500 text-sm mt-1">
                  {{ errors.requirements }}
                </p>
              </div>


              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Total Number of Seats / Space
                </label>

                <div class="flex items-center border rounded-lg overflow-hidden"
                    :class="errors.totalSeats ? 'border-red-500' : 'border-gray-300'">

                  <!-- Decrease -->
                  <button
                    type="button"
                    class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-lg font-semibold"
                    @click="decreaseSeats"
                    :disabled="formData.totalSeats <= 0"
                  >
                    −
                  </button>

                  <!-- Input -->
                  <input
                    v-model.number="formData.totalSeats"
                    type="number"
                    min="0"
                    class="w-full text-center py-3 outline-none focus:ring-2 focus:ring-[#560216]"
                    @blur="validateField('totalSeats')"
                  />

                  <!-- Increase -->
                  <button
                    type="button"
                    class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-lg font-semibold"
                    @click="increaseSeats"
                  >
                    +
                  </button>
                </div>

                <p v-if="errors.totalSeats" class="text-red-500 text-sm mt-1">
                  {{ errors.totalSeats }}
                </p>
              </div>


            </div>


            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >When Do You Possibly Require The Space:</label
              >
              <input
                v-model="formData.spaceRequiredDate"
                type="date"
                :min="minDate"
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent',
                  errors.spaceRequiredDate
                    ? 'border-red-500'
                    : 'border-gray-300',
                ]"
                @blur="validateField('spaceRequiredDate')"
                @change="validateField('spaceRequiredDate')"
              />
              <p
                v-if="errors.spaceRequiredDate"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.spaceRequiredDate }}
              </p>
            </div>

            

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Additional Details</label
              >
              <textarea
                v-model="formData.additionalDetails"
                rows="5"
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560216] focus:border-transparent resize-none',
                  errors.additionalDetails
                    ? 'border-red-500'
                    : 'border-gray-300',
                ]"
                placeholder="Please provide any additional information..."
                @blur="validateField('additionalDetails')"
              ></textarea>
              <p
                v-if="errors.additionalDetails"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.additionalDetails }}
              </p>
            </div>

            <div class="text-center pt-4 sm:pt-5 md:pt-6">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="bg-[#560216] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-[#440114] disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full sm:w-auto"
              >
                <span v-if="isSubmitting">Submitting...</span>
                <span v-else>Submit Request</span>
              </button>
            </div>
          </form>
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

              <!-- Bottom Heading (Default - fades out on hover) -->
              <div
                class="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 z-10"
              >
                <h3
                  class="text-base sm:text-lg md:text-xl font-bold text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
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
                  <a
                    href="#booking_form_section"
                    @click="selectService(service.title)"
                    class="flex justify-center mt-3 sm:mt-4 w-full"
                  >
                    <button
                      class="bg-[#560216] text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-[#440114] transition-all w-40 sm:w-96 md:w-96"
                    >
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4 - Hero -->
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
            class="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-[#f0ebe1] border-2 sm:border-3 md:border-4 border-[#f0ebe1] px-4 sm:px-6 md:px-8 lg:px-48 py-3 sm:py-4 md:py-5 lg:py-6 uppercase tracking-wide sm:tracking-wider inline-block"
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
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Layout from "../layout/layout.vue";
import axios from "axios";

// Get today's date in YYYY-MM-DD format for date input min attribute
const minDate = computed(() => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
});

// Form state
const formData = ref({
  fullName: "",
  companyName: "",
  totalSeats: 0,
  email: "",
  contactNumber: "",
  requirements: "",
  additionalDetails: "",
  spaceRequiredDate: "",
});

const errors = ref({
  fullName: "",
  companyName: "",
  email: "",
  contactNumber: "",
  totalSeats: 0,
  requirements: "",
  additionalDetails: "",
  spaceRequiredDate: "",
});


const increaseSeats = () => {
  formData.value.totalSeats++;
};

const decreaseSeats = () => {
  if (formData.value.totalSeats > 0) {
    formData.value.totalSeats--;
  }
};
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref("");
const submitMessage = ref("");

// Function to select service
const selectService = (serviceTitle) => {
  formData.value.requirements = serviceTitle;
};

// Check URL for service parameter on mount
onMounted(() => {
  const route = useRoute();
  const serviceParam = route.query.service;
  if (serviceParam) {
    formData.value.requirements = serviceParam;
  }
});

// Validation functions
const validateField = (fieldName) => {
  const value = formData.value[fieldName];

  switch (fieldName) {
      case "fullName":
        if (!value || value.trim().length < 2) {
          errors.value.fullName = "Full name must be at least 2 characters";
        } else if (value.length > 100) {
          errors.value.fullName = "Full name must be less than 100 characters";
        } else {
          errors.value.fullName = "";
        }
        break;

    case "companyName":
      if (!value || value.trim().length < 2) {
        errors.value.companyName = "Company name must be at least 2 characters";
      } else if (value.length > 100) {
        errors.value.companyName = "Company name must be less than 100 characters";
      } else {
        errors.value.companyName = "";
      }
      break;

    case "totalSeats":
      if (value === null || value === undefined || value < 0) {
        errors.value.totalSeats = "Total seats cannot be negative";
      } else {
        errors.value.totalSeats = "";
      }
      break;


    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value)) {
        errors.value.email = "Please enter a valid email address";
      } else {
        errors.value.email = "";
      }
      break;

    case "contactNumber":
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!value || value.trim().length < 10) {
        errors.value.contactNumber =
          "Contact number must be at least 10 digits";
      } else if (!phoneRegex.test(value)) {
        errors.value.contactNumber = "Please enter a valid contact number";
      } else {
        errors.value.contactNumber = "";
      }
      break;

    case "requirements":
      if (!value) {
        errors.value.requirements = "Please select a requirement";
      } else {
        errors.value.requirements = "";
      }
      break;

    case "additionalDetails":
      if (value && value.length > 1000) {
        errors.value.additionalDetails =
          "Additional details must be less than 1000 characters";
      } else {
        errors.value.additionalDetails = "";
      }
      break;

    case "spaceRequiredDate":
      if (!value || !value.trim()) {
        // Allow empty - field is optional
        errors.value.spaceRequiredDate = "";
      } else {
        // Validate that the date is from today onward
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);
        
        if (isNaN(selectedDate.getTime())) {
          errors.value.spaceRequiredDate = "Please enter a valid date";
        } else if (selectedDate < today) {
          errors.value.spaceRequiredDate = "Date must be from today onward";
        } else {
          errors.value.spaceRequiredDate = "";
        }
      }
      break;
  }
};

const validateForm = () => {
  validateField("fullName");
  validateField("companyName");
  validateField("email");
  validateField("contactNumber");
  validateField("totalSeats");
  validateField("requirements");
  validateField("additionalDetails");
  validateField("spaceRequiredDate");
  return !Object.values(errors.value).some((error) => error !== "");
};

const handleSubmit = async () => {
  // Reset previous messages
  submitSuccess.value = false;
  submitError.value = "";

  // Validate form
  if (!validateForm()) {
    submitError.value =
      "Please correct the errors in the form before submitting.";
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/contact/submit`,
      {
        full_name: formData.value.fullName.trim(),
        company_name: formData.value.companyName.trim(),
        email: formData.value.email.trim(),
        contact_number: formData.value.contactNumber.trim(),
        total_seats: formData.value.totalSeats,
        requirements: formData.value.requirements,
        additionalDetails: formData.value.additionalDetails?.trim() || "",
        space_required_date: formData.value.spaceRequiredDate?.trim() || "",
      }
    );

    if (response.data.success) {
      submitSuccess.value = true;
      submitMessage.value =
        response.data.message || "Form submitted successfully!";

      // Reset form
      formData.value = {
        fullName: "",
        companyName: "",
        email: "",
        contactNumber: "",
        totalSeats: 0,
        requirements: "",
        additionalDetails: "",
        spaceRequiredDate: "",
        };

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } catch (error) {
    console.error("Form submission error:", error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 400) {
        // Validation errors from server
        if (error.response.data && Array.isArray(error.response.data)) {
          const serverErrors = error.response.data
            .map((err) => err.message)
            .join(", ");
          submitError.value = serverErrors;
        } else {
          submitError.value =
            error.response.data.message ||
            "Please check your form and try again.";
        }
      } else if (error.response.status === 429) {
        submitError.value =
          error.response.data.message ||
          "Please wait a few minutes before submitting again.";
      } else {
        submitError.value =
          error.response.data.message ||
          "An error occurred while submitting your form.";
      }
    } else if (error.request) {
      // The request was made but no response was received
      submitError.value =
        "Unable to connect to the server. Please check your internet connection and try again.";
    } else {
      // Something happened in setting up the request that triggered an Error
      submitError.value =
        "An error occurred while submitting your form. Please try again later.";
    }

    // Scroll to top to show error message
    window.scrollTo({ top: 0, behavior: "smooth" });
  } finally {
    isSubmitting.value = false;
  }
};

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
