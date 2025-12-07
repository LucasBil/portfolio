<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { ref } from 'vue';
    import Title from '@/components/TitleComponent.vue';
    import Map from '@/components/MapComponent.vue';
    import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';
    import { useI18n } from 'vue-i18n';
    import emailjs from 'emailjs-com';

    const router = useRouter();
    const { t } = useI18n();

    const fullname = ref("")
    const email = ref("")
    const text = ref("")
    const disable = ref(false)

    function sendEmail(event: SubmitEvent) {
        event.preventDefault();

        if (!fullname.value.trim() || !email.value.trim() || !text.value.trim()) {
            return;
        }

        disable.value = true
        const templateParams = {
            fullname: fullname.value,
            email: email.value,
            message: text.value,
        }
        emailjs.send(
            "service_khgn7ni",
            "template_vjmqe4c",
            templateParams,
            "G15pT3X95ls0WURa1"
        ).then(() => {
            router.push({ name: "about" });
        }).catch(() => {
            router.push({ name: "about" });
        })
    }
</script>

<template>
    <div class="flex flex-col gap-2">
        <Title :text="t('contact')" />
        <Map />
        <form @submit="e => sendEmail(e)" class="flex flex-col gap-3">
            <p class="font-semibold text-lg">{{ t("contact-form") }}</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input v-model="fullname" type="text" :placeholder="t('fullname')" class="input validator w-full" required />
                <label class="input validator w-full">
                    <EnvelopeIcon class="h-[1em]" />
                    <input v-model="email" class="grow" type="email" :placeholder="t('email-address')" required/>
                </label>
                <textarea  v-model="text" class="textarea validator h-40 w-full md:col-span-2" :placeholder="t('your-message')" required></textarea>
            </div>

            <button type="submit" class="btn flex md:self-end gap-3" :disabled="disable">
                <PaperAirplaneIcon class="h-[1em]" />
                <p>{{ t("send-message") }}</p>
            </button>
        </form>
    </div>
</template>