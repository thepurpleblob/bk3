<template>
    <div class="card mb-4">
        <img v-if="showimage" class="card-img-top" height="200px" :src="image" />
        <img v-if="!showimage" class="card-img-top" height="200px" :class="'u-grad-' + gradient" />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text" v-html="intro"></p>
            <div v-if="routerlink" class="mt-4">
                <router-link class="btn btn-outline-dark" :to="routerlink">Find out more...</router-link>
            </div>
            <button class="btn btn-primary" @click.prevent="openfull()">Read more</button>
        </div>
    </div>
</template>

<script>
import NewsModal from '../components/NewsModal.vue';

export default {
    name: 'NewsCard',
    props: [
        'title',
        'gradient',
        'image',
        'showimage',
        'intro',
        'content',
        'routerlink',
    ],
    methods: {
        openfull: function() {
            this.$modal.show(
                NewsModal,
                {
                    title: this.title,
                    content: this.content,
                },
                {
                    //adaptive: true,
                    height: 'auto',
                    scrollable: true,
                    overlayTransition: 'opacity-25',
                    classes: 'my-3',
                }
                );
        }
    }
}
</script>