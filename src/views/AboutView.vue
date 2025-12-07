<script setup lang="ts">
    import Title from '@/components/TitleComponent.vue';

    import { GlobeAltIcon, CommandLineIcon, PuzzlePieceIcon, BookOpenIcon } from '@heroicons/vue/24/outline';

    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <div class="flex flex-col gap-2">
        <Title :text="t('about-me')" />
        <div class="text-sm font-thin">
            <p class="mb-2">{{ t("presentation-1") }}</p>
            <p class="mb-2">{{ t("presentation-2") }}</p>
            <p class="mb-2">{{ t("presentation-3") }}</p>
        </div>
        <p class="font-semibold text-xl">{{ t("what-doing") }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">

            <div class="flex flex-col items-center gap-1 bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <GlobeAltIcon class="h-12 text-primary" />
                <h2 class="font-bold text-lg">{{ t("web-development") }}</h2>
                <p class="text-sm font-thin">{{ t("web-development-text") }}</p>
            </div>

            <div class="flex flex-col items-center gap-1 bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <CommandLineIcon class="h-12 text-primary" />
                <h2 class="font-bold text-lg">{{ t("application-development") }}</h2>
                <p class="text-sm font-thin">{{ t("application-development-text") }}</p>
            </div>

            <div class="flex flex-col items-center gap-1 bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <PuzzlePieceIcon class="h-12 text-primary" />
                <h2 class="font-bold text-lg">{{ t("card-games") }}</h2>
                <p class="text-sm font-thin">{{ t("card-games-text") }}</p>
            </div>

            <div class="flex flex-col items-center gap-1 bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <BookOpenIcon class="h-12 text-primary" />
                <h2 class="font-bold text-lg">{{ t("animation") }}</h2>
                <p class="text-sm font-thin">{{ t("animation-text") }}</p>
            </div>

        </div>
    </div>
</template>