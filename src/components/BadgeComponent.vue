<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            required: true,
        }
    })
</script>

<template>
    <span class="badge badge-outline truncate">{{ text }}</span>
</template>