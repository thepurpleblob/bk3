<template>
    <div class="home container-fluid">

        <LayoutBlock
            heading="A Great Day Out - the old fashioned way"
            routerlink="/plan"
            :image="require('@/assets/TicketTrial1.jpg')"
            :linkimage="{
                src: require('@/assets/Click-for-tickets.png'),
                link: 'https://bkrailway.digitickets.co.uk',
                style: 'width: 150px'
            }"
        ></LayoutBlock>

        <LayoutBlock
            heading="Fares and tickets"
            routerlink=""
            :image="require('@/assets/TicketOffice.jpg')"
            imageleft="true"
            :list="fareslist"
        ></LayoutBlock>

        <div v-if="page.video" class="row my-4 py-1 border border-3 rounded-2">
            <div v-html="page.video"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LayoutBlock from '@/components/LayoutBlock.vue';

const url = process.env.VUE_APP_ENDPOINT;
const fareslist = ref([
    {
        n: 1,
        text: 'Buy tickets',
        icon: 'ticket-alt',
        externallink: 'https://bkrailway.digitickets.co.uk'
    },
    {
        n: 2,
        text: 'Timetables',
        icon: 'calendar-alt',
        routerlink: '/fares'
    },
    {
        n: 3,
        text: 'Fares',
        icon: 'pound-sign',
        routerlink: '/plan',
    }
]);
const page = ref({});

onMounted(() => {
    axios.get(url + '/homepage')
    .then(result => {
        page.value = result.data.data;
    })
    .catch(error => {
        window.console.error(error);
    });
});
</script>

<style>
    iframe {
        aspect-ratio: 16 / 9;
        width: 100% !important;
        height: auto !important;
    }
</style>
