<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ props.title }}</h5>
                <p class="card-text" v-html="props.content"></p>
                <p><button class="btn btn-primary" @click="close_news()">Close</button></p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        title: String,
        content: String,
    });

    const emits = defineEmits(['close']);

    function close_news() {
        emits('close');
    }
</script>