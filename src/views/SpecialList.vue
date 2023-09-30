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

<script>
import axios from 'axios';
import EventCard from '../components/EventCard.vue';

export default {
    name: 'SpecialList',
    components: {
        EventCard,
    },
    data: function() {
        return {
            loading: true,
            items: [],
            noitems: false,
            blockstyle: '',
            assets: '',
        }
    },
    mounted: function() {
        const url = process.env.VUE_APP_ENDPOINT;
        this.assets = process.env.VUE_APP_ASSETS + '/';
        
        // Get front page items
        const v = this;
        axios.get(url + '/Specials?filter={ "status": { "_eq": "published" }}')
        .then(response => {
            const items = response.data.data;
            let isleft = true;
            items.forEach(item => {
                item.imageurl = v.assets + item.Image;
                item.morelink = '/page/' + item.More;
                item.isleft = isleft;
                isleft = !isleft;
            });
            v.items = items;
            v.loading = false;
            v.noitems = v.items.length == 0;
        })
        .catch(err => {
            v.$log.error(err);
        });
    }
}
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
