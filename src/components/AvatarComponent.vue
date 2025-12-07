<script setup lang="ts">
    const images = import.meta.glob('@/assets/img/*.png', { eager: true, import: 'default' })
    const props = defineProps({
        avatar: {
            type: String,
            required: true,
        }
    })

</script>

<template>
    <div class="avatar">
        <div class="w-20 h-20 rounded-xl bg-base-300 p-2">
            <img :src="`${images[`/src/assets/img/${props.avatar}`]}`" />
        </div>
    </div>
</template>