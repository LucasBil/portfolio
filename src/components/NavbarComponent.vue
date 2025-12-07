<script setup lang="ts">
    import type { PropType } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';

    type Link = {
        label: string;
        router: string;
    }
    const props = defineProps({
        links : {
            type: Array as PropType<Link[]>,
            required: true
        }
    })

    const route = useRoute();
</script>

<template>
    <div class="navbar bg-white/5 backdrop-blur-md sticky bottom-0 right-0 rounded-t-2xl">
        <div class="navbar-start"></div>
        <div class="navbar-center">
            <ul class="menu menu-horizontal text-xs px-1">
                <li v-for="link in links" :class="route.name == link.router ? 'text-primary' : ''">
                    <RouterLink :to="{ name: link.router }" >{{ link.label }}</RouterLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end"></div>
    </div>
</template>