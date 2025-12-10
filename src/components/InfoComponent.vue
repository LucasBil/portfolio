<script setup lang="ts">
    const props = defineProps({
        icon: {
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    })
</script>

<template>
    <div class="flex place-items-center gap-2">
        <div class="avatar">
            <div class="w-8 h-8 rounded-xl bg-neutral text-neutral-content p-2">
                <component :is="icon" />
            </div>
        </div>
        <div class="grow flex flex-col">
            <p class="font-light text-xs">{{ label }}</p>
            <p class="font-medium text-wrap">{{ value }}</p>
        </div>
    </div>
</template>