<template>
    <div class="page py-2">
        <div class="container-fluid">
            <h2>Plan your visit</h2>

        <div class="row mb-4">
            <div class="col">
                <div class="card">
                    <h3 class="card-header text-center">WELCOME ABOARD</h3>
                    <div class="card-body">
                        <p>
                            There's nothing like a departure by steam or the rumble of a mighty heritage diesel locomotive.
                            Enjoy a scenic ten mile return train journey to Manuel along the Forth Estuary, through woodlands,
                            past waterfalls and over the Avon Viaduct.
                        </p>
                        <p>
                            Our friendly volunteers are waiting to  welcome you aboard and invite you the soak up the atmosphere
                            of our award-winning heritage railway through the sights, sounds and smells of yesteryear.
                        </p>
                        <!--
                        <div class="alert alert-warning">
                            <b>ACCESSIBILITY IMPORTANT INFO:</b> Our accessible carriage is available on most trains* and can
                            accomodate wheelchairs. Wheelchairs cannot be accommodated in our compartments
                            due to their historic nature.
                            <br />
                            <a href="https://www.accessibilityguides.org/content/boness-kinneil-railway">Please see our accessibility guide, here.</a>
                            <br /><br />
                            <i>*not available for some special events. Please check Event page for details. </i>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-12 col-sm-6">
                <div class="card">
                    <h3 class="card-header">TIMETABLE</h3>
                    <div class="card-body">
                        <p>
                            Our main season runs from April until October with special events in December.
                            Steam and heritage diesel trains will run on weekends, Tuesdays and other days in
                            school holidays during this period. Although you can just turn up on your chosen day
                            (except special events), we highly recommend you pre-book to guarantee a place on your chosen train.
                        </p>

                        <p>
                            <router-link to="/fares">Check our opening days and train times</router-link>
                        </p>
                    </div>
                </div>
            </div>
            <FaresBlock></FaresBlock>
        </div>

         <div class="row mb-4">
            <div class="col-12 col-sm-6">
                <img class="image-fluid" src="@/assets/BKR-374.jpg" />
            </div>
            <div class="col-12 col-sm-6">
                <img class="image-fluid" src="@/assets/BKR-288.jpg" />
            </div>
         </div>

        <h2>More information</h2>


        <LoadingCMS v-if="loading"></LoadingCMS>
        <div class="accordion mb-4" id="accordionFAQ">
            <div v-for="item in items" :key="item.id" class="accordion-item">
                <h2 class="accordion-header" :id="'heading' + item.id">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + item.id" aria-expanded="false" :aria-controls="'collapse' + item.id">
                    {{ item.Question }}
                </button>
                </h2>
                <div :id="'collapse' + item.id" class="accordion-collapse collapse" :aria-labelledby="'heading' + item.id" data-bs-parent="#accordionFAQ">
                <div class="accordion-body">
                    <i><span v-html="item.Answer"></span></i>
                </div>
                </div>
            </div>
        </div>

        <h2>How to get here</h2>

        <div class="row mt-4">
            <div class="col-12 col-sm-6">
                <ul class="list-unstyled">
                    <li><b>The Bo'ness &amp; Kinneil Railway</b></li>
                    <li>Bo'ness Station</li>
                    <li>Union Street</li>
                    <li>Bo'ness</li>
                    <li>EH51 9AQ</li>
                </ul>
            </div>

            <div class="col-12 col-sm-6">
                <h5>By car</h5>
                <p>
                    Bo'ness Station is in the town centre and has lots of free parking.
                    M9 J5 or J3 then follow the brown tourist signs to Bo'ness and the railway.
                    Satnav, EH51 9AQ
                </p>
                <p>
                    If you are travelling by an electric vehicle, there are 5 electric car charging points
                    (connectors) available at <a href="https://www.zap-map.com/location/1pu6dal/">Union Street Car Park</a>,
                    less than 5 minutes walk from the station.
                </p>

                <h5>By bus from Edinburgh</h5>
                <p>
                    <a href="https://www.citylink.co.uk/">Scottish Citylink</a>
                </p>

                <h5>By train and bus</h5>
                <p>
                    Linlithgow is the nearest mainline station. Visitors should alight here and make their
                    way to Linlithgow Cross and the bus stop outside The Four Marys pub. Please see
                    <a href="https://travelinescotland.com">www.travellinescotland.com</a> or call 0871 200 2233
                    for information about bus services.
                </p>
            </div>
        </div>
    </div>

    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import FaresBlock from '@/components/FaresBlock.vue';
    import LoadingCMS from '@/components/LoadingCMS.vue';
    import axios from 'axios';
    import { useToast } from "vue-toastification";

    const items = ref([]);
    const loading = ref(true);
    const toast = useToast();

    onMounted(() => {
        const url = process.env.VUE_APP_ENDPOINT;
        axios.get(url + '/faq_plan')
        .then(response => {
            items.value = response.data.data;
            loading.value = false;
        })
        .catch(err => {
            toast.error("Failed to communicate with server - see console");
            window.console.error(err);
        });
    });
</script>

<style>
    .page img {
        display: inline-block;
        border-radius: 5px;
        max-width: 100%;
        height: auto;
        padding-right: 5px;
    }

    .map-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
    }

    .map-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
    }

</style>
