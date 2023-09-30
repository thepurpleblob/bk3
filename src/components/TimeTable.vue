<template>
    <div id="timetable" class="container-fluid py-1 px-0 px-sm-2"> 
        <p class="mt-2 text-center text-uppercase"><b>{{ title }} TIMETABLE</b></p>
        <table v-if="services" class="table table-striped table-sm table-responsive border border-4 rounded-2" :style="modalColor">
            <tbody>
                <tr>
                    <td />
                    <td />
                    <td v-for="service in services" :key="service.upBoness">
                        <b>{{ service.Traction }}</b>
                    </td>
                </tr>
                <tr>
                    <th>
                        Bo'ness
                    </th>
                    <td class="d-sm-table-cell d-none"><small>depart</small></td>
                    <td class="d-sm-none"><small>d.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpBoness }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Kinneil
                    </th>
                    <td class="d-sm-table-cell d-none"><small>depart</small></td>
                    <td class="d-sm-none"><small>d.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpKinneil }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Birkhill
                    </th>
                    <td class="d-sm-table-cell d-none"><small>depart</small></td>
                    <td class="d-sm-none"><small>d.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpBirkhill }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Manuel
                    </th>
                    <td class="d-sm-table-cell d-none"><small>arrive</small></td>
                    <td class="d-sm-none"><small>a.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.UpManuel }}
                    </td>
                </tr>
                <tr><td :colspan="servicecount+2">&nbsp;</td></tr>
                <tr>
                    <th>
                        Manuel
                    </th>
                    <td class="d-sm-table-cell d-none"><small>depart</small></td>
                    <td class="d-sm-none"><small>d.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownManuel }}
                    </td>
                </tr>  
                <tr>
                    <th>
                        Birkhill
                    </th>
                    <td class="d-sm-table-cell d-none"><small>depart</small></td>
                    <td class="d-sm-none"><small>d.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownBirkhill }}
                    </td>
                </tr>
                <tr>
                    <th>
                        Kinneil
                    </th>
                    <td class="d-sm-table-cell d-none"><small>depart</small></td>
                    <td class="d-sm-none"><small>d.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownKinneil }}
                    </td>
                </tr>    
                <tr>
                    <th>
                        Bo'ness
                    </th>
                    <td class="d-sm-table-cell d-none"><small>arrive</small></td>
                    <td class="d-sm-none"><small>a.</small></td>
                    <td v-for="service in services" :key="service.upBoness">
                        {{ service.DownBoness }}
                    </td>
                </tr>        
            </tbody>
        </table>

        <div v-if="info" v-html="info" class="alert alert-info text-center"></div>

        <div v-if="link" class="mt-4">
            <router-link class="btn btn-outline-dark" :to="link" @click="$emit('close')">Find out more...</router-link>
        </div>

        <div class="text-end">
            <button type="button" class="btn btn-primary" @click="$emit('close')">Close</button>
        </div>

    </div> 
</template>

<script>
    export default {
        name: 'TimeTable',
        props: {
            services: {
                type: Array,
                required: false,
            },
            title: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            info: {
                type: String,
                required: false,
            },
            servicecount: {
                type: Number,
                required: true,
            },
            link: {
                type: String,
                required: false,
            }
        },
        computed: {
            modalColor() {
                let css = '';
                switch (this.color) {
                    case 'grey':
                        css = '#718096';
                        break;
                    case 'yellow':
                        css = '#d69e2e';
                        break;
                    case 'green':
                        css = '#198754';
                        break;
                    case 'orange':
                        css = '#fd7e14';
                        break;
                    case 'blue':
                        css = '#0d6efd';
                        break;
                }
                return {
                    'border-color': css + ' !important',
                }
            }
        },
        methods: {

        },
        mounted: function() {
            //this.display();
        }
    }
</script>

<style>
    .grey_border {
        background-color: #718096;
    }

    .yellow_border {
        border-color: #d69e2e !important;
    }

    .dot-green {
        background-color: #198754;
    }

    .dot-orange {
        background-color: #fd7e14;
    }
</style>