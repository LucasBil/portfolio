<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()

    const props = defineProps({
        repo : {
            type: Object,
            required: true
        }
    });

    function formatDate(dateStr: string): string {
        const d = new Date(dateStr);
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();

        return `${month}/${year}`;
    }
</script>

<template>
    <div class="card bg-base-100 shadow-sm border border-base-300">
        <figure>
            <img
            :src="`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`"
            :alt="repo.name"
            loading="lazy" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
            {{ repo.name }}
            <div v-if="repo.language" class="badge badge-secondary">{{ repo.language }}</div>
            </h2>
            <p>{{ repo.description ?? t('project-no-description') }}</p>
            <div class="card-actions justify-between items-center">
                <p>{{ formatDate(repo.created_at) }} → {{ formatDate(repo.pushed_at) }}</p>
                <a :href="repo.svn_url" target="_blank" class="btn">{{ t("see-project") }}</a>
            </div>
        </div>
    </div>
</template>