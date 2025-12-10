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

            <label class="swap bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <input type="checkbox" />
                <div class="flex flex-col justify-center items-center gap-1 swap-off">
                    <GlobeAltIcon class="h-12 text-primary" />
                    <h2 class="font-bold text-lg text-center">{{ t("web-development") }}</h2>
                </div>
                <div class="swap-on">
                    <p class="text-sm font-thin text-center">{{ t("web-development-text") }}</p>
                </div>
            </label>

            <label class="swap bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <input type="checkbox" />
                <div class="flex flex-col justify-center items-center gap-1 swap-off">
                    <CommandLineIcon class="h-12 text-primary" />
                    <h2 class="font-bold text-lg text-center">{{ t("application-development") }}</h2>
                </div>
                <div class="swap-on">
                    <p class="text-sm font-thin text-center">{{ t("application-development-text") }}</p>
                </div>
            </label>

            <label class="swap bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <input type="checkbox" />
                <div class="flex flex-col justify-center items-center gap-1 swap-off">
                    <PuzzlePieceIcon class="h-12 text-primary" />
                    <h2 class="font-bold text-lg text-center">{{ t("card-games") }}</h2>
                </div>
                <div class="swap-on">
                    <p class="text-sm font-thin text-center">{{ t("card-games-text") }}</p>
                </div>
            </label>

            <label class="swap bg-base-100 shadow-2xl border border-base-300 rounded-lg p-6">
                <input type="checkbox" />
                <div class="flex flex-col justify-center items-center gap-1 swap-off">
                    <BookOpenIcon class="h-12 text-primary" />
                    <h2 class="font-bold text-lg text-center">{{ t("animation") }}</h2>
                </div>
                <div class="swap-on">
                    <p class="text-sm font-thin text-center">{{ t("animation-text") }}</p>
                </div>
            </label>

        </div>
    </div>
</template>