<script setup lang="ts">
    import Title from '@/components/TitleComponent.vue';
    import Timeline from '@/components/TimelineComponent.vue';

    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()

    const shool = [
        {
            name: t("shool-1-name"),
            date: `2024 - ${t("now")}`,
            text: t("shool-1-text")
        },
        {
            name: t("shool-2-name"),
            date: "2023 - 2024",
            text: t("shool-2-text")
        },
        {
            name: t("shool-3-name"),
            date: "2020 - 2023",
            text: t("shool-3-text")
        },
        {
            name: t("shool-4-name"),
            date: "2018 - 2020",
            text: t("shool-4-text")
        },
    ]

    const work = [
        {
            name: t("work-1-name"),
            date: t("work-1-date"),
            text: t("work-1-text")
        },
        {
            name: t("work-2-name"),
            date: t("work-2-date"),
            text: t("work-2-text")
        },
        {
            name: t("work-3-name"),
            date: t("work-3-date"),
            text: t("work-3-text")
        }
    ];

    const languages = [
        "VueJS", "Symfony", "Laravel", "MAUI", "C#", "C", "Python", "Java", "Javascript", "PHP", "HTML5", "CSS", "Kotlin",
        "Swift", "SQL", "NoSQL"
    ]
</script>


<template>
    <div class="flex flex-col">
        <Title :text="t('resume')" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
                <div class="mx-2">
                    <Timeline :title="t('education')" :timelines="shool" />
                </div>
                <div class="mx-2">
                    <Timeline :title="t('experience')" :timelines="work" />
                </div>
            </div>
            <div>
                <p class="font-semibold text-xl">{{ t("my-skills") }}</p>
                <div class="flex flex-wrap gap-2 mt-3">
                    <div v-for="language in languages" class="badge badge-outline grow">{{ language }}</div>
                </div>
            </div>
        </div>

    </div>
</template>