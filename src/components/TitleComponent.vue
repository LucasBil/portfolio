<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            required: true,
        }
    })
</script>

<template>
    <div>
        <p class="font-bold text-2xl">{{ text }}</p>
        <div class="divider divider-primary h-2 w-10 my-1"></div>
    </div>
</template>