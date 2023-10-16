<template>
    <div class="card mb-4">
        <img class="card-img-top" :src="props.image" />
        <div class="card-body">
            <h5 class="card-title">{{ props.title }}</h5>
            <p class="card-text" v-html="props.content"></p>
            <div v-if="routerlink" class="mt-4">
                <router-link class="btn btn-outline-dark" :to="props.routerlink">Find out more...</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        title: String,
        image: String,
        content: String,
        routerlink: String,
    });
</script>