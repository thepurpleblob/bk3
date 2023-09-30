<template>
    <div class="row mt-4">
        <div class="col-12 col-sm-6">
            <div class="card">
                <h3 class="card-header">TIMETABLES</h3>
                <div class="card-body">
                    <h6 class="card-subtitle mb-4">Click on a date to see the train times...</h6>
                    <LoadingCMS v-if="loading"></LoadingCMS>
                    <v-calendar
                        v-if="isPopulated && !loading" 
                        is-expanded
                        :attributes="attributes"
                        :firstDayOfWeek="2"
                        :min-date="new Date()"
                        color="blue"
                        v-on:dayclick="onDayclick"
                        v-on:update:from-page="toPage">
                    </v-calendar>
                    <div v-if="!loading" class="row py-4">
                        <div v-for="label in labels" :key="label.title" class="col" @click.prevent="labelclicked(label.ttid, label.rawcolor)">
                            <a class="text-decoration-none text-dark" href="#">
                                <span class="dot rounded-circle" :class="label.color"></span> {{ label.title }}
                            </a>
                        </div>
                        <div v-if="!isEvents" class="alert alert-dark">
                            There are no services in this month
                        </div>
                    </div>
                    <div>
                        <!--
                        <a href="./staticassets/Timetable2022.pdf" download>Download PDF timetable</a>
                        -->
                        <span class="text-primary">PDF of 2023 Timetable coming soon</span>
                    </div>
                </div>
            </div>
        </div>    
        <FaresBlock></FaresBlock>     
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue';
    import axios from 'axios';
    import TimeTable from '@/components/TimeTable';
    import FaresBlock from '@/components/FaresBlock.vue';
    import LoadingCMS from '@/components/LoadingCMS.vue';
    import { useToast } from "vue-toastification";
    import { useRoute } from 'vue-router';

    const loading = def(true);
    const content = def('');
    const isPopulated = def(false);
    const isEvents = def(false);
    const labels = def([]);
    const toast = useToast();
    const route = useRoute();

    // Tidy up services data from Timetable
    function format_services(services) {
        const stations = [
            'UpBoness',
            'UpKinneil',
            'UpBirkhill',
            'UpManuel',
            'DownManuel',
            'DownBirkhill',
            'DownKinneil',
            'DownBoness',
        ];
        const timeregex = new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]');
        if (services) {
            services.forEach(service => {
                stations.forEach(station => {
                    if (timeregex.test(service[station])) {
                        service[station] = service[station].slice(0, 5);
                    } else {
                        service[station] = '--';
                    }
                })
            });
        }

        return services;
    }

    /**
     * Update the calendar page
     */
    function update() {
        const url = process.env.VUE_APP_ENDPOINT;

        // Get event items
        axios.get(url + '/Calendar?limit=-1')
        .then(response => {
            const events = response.data.data;
            attributes.value = [];
            events.forEach(event => {
                const eventdate = new Date(event.date);
                attributes.value.push({
                    key: event.id,
                    dates: eventdate,
                    highlight: {
                        color: event.Color,
                        //fillMode: eventdate < today ? 'light' : 'solid',
                        fillMode: 'solid',
                    },
                    customData: {
                        ttid: event.Timetable,
                        color: event.Color,
                    }
                });
            });
            isPopulated.value = true;
            loading.value = false;
        })
        .catch(err => {
            toast.error("Failed to communicate with server - see console");
            window.console.error(err);
        });       
    }

    /**
     * Get the individual timetable data
     */
    function displayTimetable(ttid, color) {
        const url = process.env.VUE_APP_ENDPOINT;
        axios.get(url + '/Timetable/' + ttid)
        .then(response => {
            const services = response.data.data.Service;
            const title = response.data.data.Title;
            const info = response.data.data.Info;
            const link = response.data.data.link;

            v.$modal.show(
                TimeTable,
                {
                    services: format_services(services),
                    title: title,
                    color: color,
                    info: info,
                    servicecount: services != null ? services.length : 0,
                    link: link,
                },
                {
                    adaptive: true,
                    height: 'auto',
                    minHeight: 300,
                }
            );
        })
        .catch(err => {
            toast.error("Failed to communicate with server - see console");
            window.console.error(err);
        });  
    }

    /**
     * Day has been clicked/selected
     */
    function onDayclick(day) {
        if (day.attributes.length) {
            const ttid = day.attributes[0].customData.ttid;
            const color = day.attributes[0].customData.color;
            if (ttid != null) {
                displayTimetable(ttid, color);
            }
        } else {
            this.$modal.show(
                TimeTable,
                {
                    title: '',
                    color: '#000000',
                    info: 'There are no services on this day',
                    servicecount: 0,
                },
                {
                    adaptive: true,
                    height: 'auto',
                    minHeight: 300,
                }
            );               
        }
    }

    /**
     * Page change
     */
    function toPage(page) {
        // (isPopulated is critical for this to be called with data)
        //this.$log.debug(this.events);
        const yearmonth = page.year.toString() + '-' + page.month.toString().padStart(2, '0');
        const labels = [];
        this.isEvents = false;
        this.events.forEach(event => {
            if ((event.date.slice(0, 7) == yearmonth) && (event.Color != null) && (event.Title != null)) {
                this.isEvents = true;
                if (event.SpecialEvent) {
                    if (!labels.find(label => {
                        return label.title == event.Title;
                    })) {
                        labels.push({
                            title: event.Title,
                            color: 'dot-' + event.Color,
                            ttid: event.Timetable,
                            rawcolor: event.Color,
                        });
                    }
                } else {
                    if (!labels.find(label => {
                        return label.color == 'dot-' + event.Color;
                    })) {
                        labels.push({
                            title: event.Title + ' Timetable',
                            color: 'dot-' + event.Color,
                            ttid: event.Timetable,
                            rawcolor: event.Color,
                        });
                    }
                }
            }
        });
        this.labels = labels;
    }

export default {


    methods: {




        labelclicked(ttid, color) {
            this.displayTimetable(ttid, color);
        }
    },
    mounted: function() {
        this.update();
    },
    watch: {
        '$route': function() {
            this.update();
        }
    },
}
</script>

<style lang="scss">
    .dot {
        height: 25px;
        width: 25px;
        display: inline-block;
        vertical-align: middle;
    }

    .dot-grey {
        background-color: #718096;
    }

    .dot-gray {
        background-color: #718096;
    }

    .dot-red {
        background-color: #e53e3e;
    }

    .dot-orange {
        background-color: #dd6b20;
    }

    .dot-yellow {
        background-color: #d69e2e;
    }

    .dot-green {
        background-color: #38a169;
    }

    .dot-teal {
        background-color: #319795;
    }

    .dot-blue {
        background-color: #3182ce;
    }

    .dot-indigo {
        background-color: #5a67d8;
    }

    .dot-purple {
        background-color: #805ad5;
    }   

    .dot-pink {
        background-color: #d53f8c;
    }
</style>
