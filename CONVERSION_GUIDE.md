# Nuxt to Vue.js Conversion Guide for Iris Spaces

## ✅ What's Already Done

1. **Project Setup** ✓
   - Created Vue 3 + Vite project
   - Installed Vue Router
   - Installed Tailwind CSS
   - Configured Tailwind with your custom theme
   - Copied all images from `/public/images`
   - Copied all fonts to `/public/fonts`
   - Created main CSS file with all your styles

2. **Router Setup** ✓
   - Created `src/router/index.js` with all routes
   - Configured scroll behavior for hash links

## 📋 What Needs to Be Done

### Step 1: Create the Main App Layout

Create `src/App.vue`:
```vue
<template>
  <div id="app" class="min-h-screen bg-[#fffdf9] flex flex-col">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
```

### Step 2: Create Components

You need to create these components in `src/components/`:

1. **Header.vue** - Convert from `layouts/default.vue` (lines 1-156)
2. **Footer.vue** - Convert from `layouts/default.vue` (lines 164-257)
3. **ImageModal.vue** - For image popups

### Step 3: Create Views

Create these files in `src/views/`:

1. **Home.vue** - Convert from `pages/index.vue`
2. **Workspaces.vue** - Convert from `pages/workspaces.vue`
3. **Contact.vue** - Convert from `pages/contact.vue`
4. **ResearchConsult.vue** - Convert from `pages/research-consult.vue`
5. **Coffee.vue** - Convert from `pages/coffee.vue`

### Step 4: Key Conversions to Make

#### Nuxt Components → Vue Equivalents

| Nuxt Component | Vue Replacement |
|----------------|-----------------|
| `<NuxtLink>` | `<router-link>` |
| `<NuxtImg>` | `<img>` |
| `<NuxtLayout>` | Custom layout components |
| `<NuxtPage>` | `<router-view>` |
| `useRoute()` | `import { useRoute } from 'vue-router'` |
| `useRouter()` | `import { useRouter } from 'vue-router'` |
| `onMounted()` | `import { onMounted } from 'vue'` |
| `ref()` | `import { ref } from 'vue'` |
| `computed()` | `import { computed } from 'vue'` |

#### Remove Nuxt-Specific Code

- Remove `useHead()` calls (or use a package like `@vueuse/head`)
- Remove server-side specific code
- Remove `definePageMeta()`

### Step 5: Handle API Endpoints

The contact form API endpoint (`/api/contact/submit.post.mjs`) needs a backend.

**Options:**
1. Create a separate Node.js/Express backend
2. Use a serverless function (Vercel, Netlify)
3. Use a form service like Formspree or EmailJS

### Step 6: Environment Variables

Create `.env` file:
```
VITE_API_URL=your_api_url_here
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

### Step 7: Update package.json

Your scripts should be:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🚀 How to Run

1. Navigate to the project:
   ```bash
   cd "C:\Users\Saqu\Desktop\irisspaces vue"
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📝 Important Notes

### Image Paths
Change all image paths from:
- `/images/photo.jpg` → stays the same (already in `/public`)

### Router Links
Change all links from:
```vue
<NuxtLink to="/contact">Contact</NuxtLink>
```
To:
```vue
<router-link to="/contact">Contact</router-link>
```

### Form Handling
The contact form will need:
1. A backend API endpoint
2. CORS configuration
3. Email service integration (nodemailer, SendGrid, etc.)

## 🎯 Quick Start Template

Here's a basic structure for your views:

**src/views/Home.vue:**
```vue
<template>
  <div class="bg-[#fffdf9]">
    <!-- Your page content here -->
    <!-- Convert content from pages/index.vue -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Your component logic here
</script>

<style scoped>
/* Component-specific styles */
</style>
```

## ⚠️ Known Differences

1. **No SSR**: Vue (without Nuxt) runs client-side only
2. **No auto-imports**: Must manually import Vue functions
3. **No file-based routing**: Routes defined in router/index.js
4. **No API routes**: Need separate backend for contact form

## 🔗 Useful Resources

- Vue Router: https://router.vuejs.org/
- Vite: https://vitejs.dev/
- Vue 3 Docs: https://vuejs.org/
- Tailwind CSS: https://tailwindcss.com/

## 📦 Additional Packages You Might Need

```bash
npm install axios  # For API calls
npm install @vueuse/head  # For managing document head
```

---

Would you like me to continue creating the actual component files? This is a large task that will require converting 5+ page components and several shared components. Let me know if you'd like me to proceed with creating all the Vue files!

