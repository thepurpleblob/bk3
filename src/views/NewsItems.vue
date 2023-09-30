<template>
    <div class="container-fluid">
        <h1>Latest News</h1>
        <LoadingCMS v-if="loading"></LoadingCMS>

        <div v-if="!loading">
            <div class="row">
                <div v-for="item in items" :key="item.id" class="col-12 col-sm-6 col-lg-4">
                    <NewsCard
                        :title="item.Title"
                        :gradient="item.gradient"
                        :image="assets + item.Image"
                        :showimage="item.Image ? true : false"
                        :intro="item.Intro"
                        :content="item.Content"
                        :routerlink="item.Page"
                    ></NewsCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import LoadingCMS from '@/components/LoadingCMS.vue';
    import NewsCard from '@/components/NewsCard.vue';
    import { useToast } from "vue-toastification";

    const items = ref([]);
    const loading = ref(true);
    const assets = ref('');

    const toast = useToast();

    onMounted(() => {
        const url = process.env.VUE_APP_ENDPOINT;
        assets.value = process.env.VUE_APP_ASSETS + '/';
        axios.get(url + '/News?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            items.value = response.data.data;
            loading.value = false;
        })
        .catch(err => {
            toast.error("Failed to communicate with server - see console");
            window.console.error(err);
        });
    });
</script>

<style lang="scss">
    @import '@/style/gradients.css';
</style>