<template>
    <div class="home container-fluid">

        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary text-center my-4" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-if="noitems" class="alert alert-primary">
            There are no special activities at the moment. Please check back later.
        </div>

        <div v-if="!loading">
            <div class="row">
                <div v-for="item in items" :key="item.id" class="col-12 col-sm-6 col-lg-4">
                    <EventCard
                        :title="item.Title"
                        :image="item.imageurl"
                        :content="item.Content"
                        :routerlink="item.Page"
                    ></EventCard>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import EventCard from '@/components/EventCard.vue';
    import { useToast } from "vue-toastification";

    const toast = useToast();

    const loading = ref(true);
    const items = ref([]);
    const noitems = ref(false);
    //const blockstyle = ref('');
    const assets = ref('');

    onMounted(() => {
        const url = process.env.VUE_APP_ENDPOINT;
        assets.value = process.env.VUE_APP_ASSETS + '/';
        
        // Get front page items
        axios.get(url + '/Specials?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            const newitems = response.data.data;
            let isleft = true;
            newitems.forEach(item => {
                item.imageurl = assets.value + item.Image;
                item.morelink = '/page/' + item.More;
                item.isleft = isleft;
                isleft = !isleft;
            });
            items.value = newitems;
            loading.value = false;
            noitems.value = items.value.length == 0;
        })
        .catch(err => {
            toast.error("Failed to communicate with server - see console");
            window.console.error(err);
        });        
    })
</script>

<style>
    .list-icon {
        font-size: 2rem;
        vertical-align: middle;
    }

    .fp-block img {
        display: inline-block;
        border-radius: 5px;
        max-width: 100%;
        height: auto;
        padding-right: 5px;
    }

    .item-img {
        min-height: 400px;
    }
</style>
