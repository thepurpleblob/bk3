<template>
    <div class="page py-2">

        <LoadingCMS v-if="loading"></LoadingCMS>

        <div v-if="!loading">
            <div class="container-fluid">
                <h2>{{ title }}</h2>
            </div>
            <div class="pagecontent container-fluid fs-5" v-html="content"></div>
            <div v-html="video" class="mt-2"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue';
    import axios from 'axios';
    import LoadingCMS from '@/components/LoadingCMS.vue';
    import { useToast } from "vue-toastification";
    import { useRoute } from 'vue-router';

    const loading = ref(true);
    const title = ref('');
    const video = ref('');
    const content = ref('');
    const toast = useToast();
    const route = useRoute();

    function update() {
        const url = process.env.VUE_APP_ENDPOINT;

        // Get front page items
        const slug = route.params.slug;
        let filter = '';
        if (isNaN(slug)) {
            filter = '/Page?filter={ "status": {"_eq": "published"}, "slug": {"_eq": "' + slug + '"}}';
        } else {
            filter = '/Page?filter={ "status": {"_eq": "published"}, "id": {"_eq": "' + slug + '"}}'
        }
        axios.get(url + filter)
        .then(response => {
            const pages = response.data.data;
            if (pages.length !== 0) {
                const page = pages[0];
                title.value = page.Title;
                content.value = page.Content;
                video.value = page.video;
            } else {
                toast.error("Unkown page!");
            }
            loading.value = false;
        })
        .catch(err => {
            toast.error("Failed to communicate with server - see console");
            window.console.error(err);
        });
    }

    onMounted(() =>{
        update();
    });

    watch(
        () => route.fullPath,
        () => {
            update();
        }
    );
</script>

<style>
    .page img {
        display: inline-block;
        border-radius: 5px;
        max-width: 100%;
        height: auto;
        padding-right: 5px;
    }

    iframe {
        aspect-ratio: 16 / 9;
        width: 100% !important;
        height: auto !important;
    }
</style>
