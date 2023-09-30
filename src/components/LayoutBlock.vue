<template>
    <div class="row my-4 border border-3 rounded-2">
        <div v-if="imageleft" class="col-sm-6 col-lg-7 p-0">
            <img class="img-fluid float-end" :src="image" />
        </div>
        <div class="col-12 col-sm-6 col-lg-5 p-4">
            <h1>{{ props.heading }}</h1>
            <p class="text-center" v-html="props.content"></p>
            <div v-if="list" class="mt-3">
                <ul class="list-unstyled fs-4">
                    <li v-for="item in props.list" :key="item.n">
                        <router-link v-if="item.routerlink" class="link-dark text-decoration-none" :to="item.routerlink">
                            <font-awesome-icon class="fa-fw pe-1" :icon="item.icon"/>{{item.text}}
                        </router-link>
                        <a v-if="item.externallink" class="link-dark text-decoration-none" :href="item.externallink">
                            <font-awesome-icon class="fa-fw pe-1" :icon="item.icon"/>{{item.text}}
                        </a>
                    </li>
                </ul>
            </div>
            <div v-if="props.routerlink" class="mt-4">
                <router-link class="btn btn-outline-dark" :to="routerlink">Find out more...</router-link>
            </div>
            <div v-if="props.linkimage" class="mt-4">
                <a :href="props.linkimage.link"><img :src="props.linkimage.src" :style="props.linkimage.style" /></a>
            </div>
        </div>
        <div v-if="!props.imageleft" class="col-sm-6 col-lg-7 p-0">
            <img class="img-fluid float-end" :src="props.image" />
        </div>
    </div>   
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps([
        'heading',
        'routerlink',
        'image',
        'imageleft',
        'content',
        'list',
        'linkimage',
    ]);
</script>
