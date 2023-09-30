<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text" v-html="content"></p>
                <p><button class="btn btn-primary" @click="$emit('close')">Close</button></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsModal',
    props: [
        'title',
        'content'
    ],
}
</script>