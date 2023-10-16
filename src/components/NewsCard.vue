<template>
    <div class="card mb-4">
        <img v-if="props.showimage" class="card-img-top" height="200px" :src="props.image" />
        <img v-if="!props.showimage" class="card-img-top" height="200px" :class="'u-grad-' + props.gradient" />
        <div class="card-body">
            <h5 class="card-title">{{ props.title }}</h5>
            <p class="card-text" v-html="props.intro"></p>
            <div v-if="props.routerlink" class="mt-4">
                <router-link class="btn btn-outline-dark" :to="props.routerlink">Find out more...</router-link>
            </div>
            <button class="btn btn-primary" @click.prevent="openfull()">Read more</button>
        </div>
    </div>

    <VuModal v-model="showmodal" >
        <NewsModal :title="props.title" :content="props.content" @close="showmodal = false"></NewsModal>
    </VuModal>
</template>

<script setup>
    import { defineProps, ref } from 'vue';
    import NewsModal from '@/components/NewsModal.vue';

    const showmodal = ref(false);

    const props = defineProps({
        title: String,
        gradient: String,
        image: String,
        showimage: Boolean,
        intro: String,
        content: String,
        routerlink: String,
    });

    function openfull() {
        showmodal.value = true;
    }
</script>