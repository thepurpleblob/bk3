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
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LayoutBlock from '@/components/LayoutBlock.vue';

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
</script>

<style>

</style>
