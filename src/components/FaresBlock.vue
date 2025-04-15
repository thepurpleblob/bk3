<template>
    <div class="col-12 col-sm-6">
        <div class="card">
            <h3 class="card-header">FARES</h3>
            <div class="card-body">
                <p><b>Your ticket is valid for the train journey you select on our orange, yellow, green and lilac timetable days. </b></p>

                <ul>
                    <li>Private Compartment for up to 6 people - <strong>£75.00</strong></li>
                </ul>

                <p>
                    For a seat in a shared carriage -
                </p>

                <ul>
                    <li>Adult (16+) - <strong>£17.00</strong></li>
                    <li>Child (2-15) - <strong>£10.00</strong></li>
                    <li>Family (2 adults and up to 3 children) - <strong>£48.00</strong></li>
                    <li>Infants (under age 2)  - <strong>Free</strong> (but do not get a seat)</li>
                    <li>Carer - <strong>Free</strong> <small>1 CARER PER 1 PAYING CUSTOMER. MUST SHOW RELEVANT IDENTIFICATION OR WILL BE CHARGED FULL FARE.</small></li>
                </ul>

                <p>
                    <font-awesome-icon class="fa-fw pe-1" size="2x" icon="dog"/> Doggy tickets
                </p>

                <ul>
                    <li>Dogs, return services to Manuel - <strong>£3.00</strong></li>
                    <li>Dogs, return services to Birkhill - <strong>£2.00</strong></li>
                </ul>

                <!--
                <ul>
                    <li>Adult - <strong><i>2024 Fares TBC</i></strong></li>
                    <li>Senior (60+) - <strong><i>2024 Fares TBC</i></strong></li>
                    <li>Child (5-15) - <strong><i>2024 Fares TBC</i></strong></li>
                    <li>Family (2 adults and up to 3 children) - <strong><i>2024 Fares TBC</i></strong></li>
                    <li>Infants (under age 5)  - <strong>Free</strong> (but do not get a seat)</li>
                </ul>
                -->

                <p class="text-center">
                    <a href="https://bkrailway.digitickets.co.uk" title="Book your tickets">
                    <img width="150px" src="@/assets/Click-for-tickets.png" alt="Book your Tickets" /></a>
                </p>
                <p>
                    Add a visit to the <router-link to="page/museum">Museum of Scottish Railways</router-link> when you buy your
                    train ticket and get a great discount -
                </p>

                <div class="alert alert-warning">MUSEUM OPENS FROM SATURDAY 19th APRIL 2005</div>
                <!--
                <ul>
                    <li>Adult - £3 (normal price £7)</li>
                    <li>Child - 50p (normal price £2)</li>
                </ul>
                <ul>
                    <li>Adult - <i>2024 Prices TBC</i></li>
                    <li>Child - <i>2024 Prices TBC</i></li>
                </ul>
                -->
                <p class="mt-3">
                    <i>Special event fares apply -
                        <router-link to="events">Please see our Events page for further information</router-link></i>
                </p>
                <hr />
                <h4>SEASON TICKETS</h4>
                    <p>
                        Valid for one year from date of purchase giving unlimited train journeys and museum admission
                        (<i>except some special events</i>).
                        <br />
                        Only available to purchase at the Booking Office at Bo'ness Station on days when trains are
                        running.
                    </p>
                    <ul>
                        <li>Adult - <strong>£77.00</strong></li>
                        <li>Child (5-15) - <strong>£45.00</strong></li>
                        <li>Family (2 adults and up to 3 children) - <strong>£220.00</strong></li>
                    </ul>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>