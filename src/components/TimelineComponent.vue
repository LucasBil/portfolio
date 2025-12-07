<script setup>
    import { BookOpenIcon } from '@heroicons/vue/24/outline';

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        timelines : {
            required: true,
        }
    })
</script>

<template>
    <ol class="relative border-s">                  
        <li class="mb-10 ms-6">            
            <span class="bg-neutral-content text-neutral absolute flex items-center justify-center w-6 h-6 rounded-sm -start-3">
                <BookOpenIcon class="w-5 h-5" />
            </span>
            <time class="text-lg font-bold px-1.5 py-0.5 rounded">{{ title }}</time>
        </li>
        <li v-for="timeline in timelines" class="mb-10 ms-6">
            <div class="absolute w-3 h-3 bg-neutral-content rounded-full mt-1.5 -start-1.5 border border-neutral-content"></div>
            <time class="font-bold px-1.5 py-0.5 rounded">{{ timeline.name }}</time>
            <h3 class="my-2 px-1.5 py-0.5 text-primary">{{ timeline.date }}</h3>
            <p class="px-1.5 py-0.5">{{ timeline.text }}</p>
        </li>
    </ol>
</template>
