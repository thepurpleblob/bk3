<template>
    <div class="card mb-4">
        <img class="card-img-top" :src="image" />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text" v-html="content"></p>
            <div v-if="routerlink" class="mt-4">
                <router-link class="btn btn-outline-dark" :to="routerlink">Find out more...</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventCard',
    props: [
        'title',
        'image',
        'content',
        'routerlink',
    ]
}
</script>