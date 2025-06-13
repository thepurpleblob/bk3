<template>
    <div class="home container-fluid">

        <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary text-center my-4" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-if="!loading">
            <LayoutBlock
                v-for="item in items" :key="item.id"
                :heading="item.Title"
                :content="item.Content"    
                :routerlink="item.Page"
                :image="item.imageurl"
                :imageleft="item.isleft"
            ></LayoutBlock>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import LayoutBlock from '@/components/LayoutBlock.vue';
    import { useToast } from "vue-toastification";

    const loading = ref(true);
    const items = ref([]);
    const assets = ref('');

    const toast = useToast();

    onMounted(() => {
        const url = process.env.VUE_APP_ENDPOINT;
        assets.value = process.env.VUE_APP_ASSETS + '/';
        
        // Get front page items
        const filter = {
            status: {
                _eq: 'published',
            }
        };
        //axios.get(url + '/Events?filter={ "status": { "_eq": "published" }}')
        axios.get(url + '/Events?sort=-pinned,SortDate&filter=' + JSON.stringify(filter))
        .then(response => {
            window.console.log(response);
            let isleft = true;
            const respitems = response.data.data;
            respitems.forEach(item => {
                item.imageurl = assets.value + item.Image;
                item.morelink = '/page/' + item.More;
                item.isleft = isleft;
                isleft = !isleft;
            });
            items.value = respitems;
            loading.value = false;
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
