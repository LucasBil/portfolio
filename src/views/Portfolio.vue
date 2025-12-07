<script setup>
    import { ref } from 'vue';
    import Title from '@/components/TitleComponent.vue';
    import SkeletonRepoComponent from '@/components/SkeletonRepoComponent.vue';
    

    import { defineAsyncComponent } from 'vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()

    const LazyRepoCard = defineAsyncComponent(() => 
        import('@/components/RepoComponent.vue')
    );

    const repos = ref([]);
    const languages = ref([]);
    const select = ref("all");
    const loading = ref(true);

    fetch("https://api.github.com/users/lucasbil/repos")
    .then(response => response.json())
    .then(data => {
        repos.value = data.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        const set = new Set(
            data.map(repo => repo.language)
            .filter(lang => lang !== null)
        );
        languages.value = [...set];
        loading.value = false;
    })
</script>

<template>
    <div class="flex flex-col gap-4">
        <Title text="Portfolio" />
        <select v-model="select" class="select">
            <option value="all" selected>{{ t("all") }}</option>
            <option v-for="language in languages" :value="language">{{ language }}</option>
        </select>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <SkeletonRepoComponent v-if="loading" v-for="n in 10" />
            <LazyRepoCard v-if="!loading" v-for="repo in repos"
                :class="select == 'all' ? '' : repo.language != select ? 'hidden' : ''"
                :key="repo.id"
                :repo="repo"
            />
        </div>
    </div>
</template>