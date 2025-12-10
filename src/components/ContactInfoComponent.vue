<script setup lang="ts">
    import Avatar from './AvatarComponent.vue';
    import Badge from './BadgeComponent.vue';
    import Info from './InfoComponent.vue';

    import { EnvelopeIcon, DevicePhoneMobileIcon, CalendarDateRangeIcon, MapPinIcon } from '@heroicons/vue/24/outline';
    import Github from '@/components/icons/github-mark.vue';
    import Linkedin from './icons/linkedin-mark.vue';

    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <div tabindex="0" class="collapse lg:collapse-open collapse-plus bg-base-100 border-base-300 border rounded-xl">
        <div class="collapse-title grid grid-flow-col grid-rows-1 lg:grid-rows-2 place-items-center gap-2">
            <Avatar avatar="memoji.png" />
            <div class="grow flex flex-col lg:items-center gap-2">
                <p class="font-semibold">Lucas BILLY</p>
                <div class="flex gap-3 flex-wrap">
                    <Badge :text="t('web-developer')" />
                </div>
            </div>
        </div>
        <div class="collapse-content flex flex-col gap-3">
            <div class="divider my-0"></div>
            <div class="flex flex-col gap-4">
                <Info :icon="EnvelopeIcon" :label="t('email')" value="lucasbill318@icloud.com" />
                <Info :icon="DevicePhoneMobileIcon" :label="t('phone')" value="+33 7 50 25 32 56" />
                <Info :icon="CalendarDateRangeIcon" :label="t('birthday')" :value="t('birthday-date')" />
                <Info :icon="MapPinIcon" :label="t('location')" value="Alby-sur-Chérant, Haut Savoie, France" />
            </div>
            <div class="lg:hidden divider my-1"></div>
            <div class="flex lg:justify-center gap-3">
                <a href="https://github.com/LucasBil" target="_blank">
                    <Github class="h-6"/>
                </a>
                <a href="https://www.linkedin.com/in/lucas-billy" target="_blank">
                    <Linkedin class="h-6"/>
                </a>
            </div>
        </div>
    </div>
</template>