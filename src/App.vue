<script setup lang="ts">
  import { RouterView, RouterLink, useRoute } from 'vue-router';
  // Components
  import ContactInfo from '@/components/ContactInfoComponent.vue';
  import Navbar from './components/NavbarComponent.vue';
  
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const routes = [
    { 'router' : 'about', 'label' : t("about") },
    { 'router' : 'resume', 'label' : t("resume") },
    { 'router' : 'portfolio', 'label' : t("portfolio") },
    { 'router' : 'contact', 'label' : t("contact") },
  ];

  const route = useRoute();
</script>

<template>
  <div class="min-h-screen relative p-3 lg:p-0 lg:py-6 grid grid-cols-1 lg:grid-cols-8 gap-4">
    <div class="lg:col-start-2 lg:flex lg:flex-col lg:col-span-2">
      <ContactInfo class="lg:sticky lg:top-30" />
    </div>
    <main class="relative bg-base-100 border-base-300 border rounded-xl p-4 lg:p-10 lg:col-span-4">
      <div class="hidden lg:flex absolute right-0 top-0 bg-base-300 py-3 px-10 rounded-bl-lg gap-6">
        <RouterLink v-for="link in routes"
          :class="route.name == link.router ? 'text-primary' : ''"
          :to="{ name: link.router }" >{{ link.label }}</RouterLink>
      </div>
      <RouterView />
    </main>
  </div>
  <Navbar class="lg:hidden" :links="routes"/>
</template>

<style scoped></style>
