<template>
  <div>
    <header>
      <!-- Header content -->
      <Header />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <!-- Footer content -->
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>
