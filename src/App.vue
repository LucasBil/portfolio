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
  <div class="min-h-screen relative p-3 md:p-0 md:py-6 grid grid-cols-1 md:grid-cols-6 gap-4">
    <div class="md:col-start-2 md:flex md:flex-col ">
      <ContactInfo class="md:sticky md:top-50" />
    </div>
    <main class="relative bg-base-100 border-base-300 border rounded-xl p-4 md:p-10 md:col-span-3">
      <div class="hidden md:flex absolute right-0 top-0 bg-base-300 py-3 px-10 rounded-bl-lg gap-6">
        <RouterLink v-for="link in routes"
          :class="route.name == link.router ? 'text-primary' : ''"
          :to="{ name: link.router }" >{{ link.label }}</RouterLink>
      </div>
      <RouterView />
    </main>
  </div>
  <Navbar class="md:hidden" :links="routes"/>
</template>

<style scoped></style>
