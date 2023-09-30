<template>
    <div class="col-12 col-sm-6">
        <div class="card">
            <h3 class="card-header">FARES</h3>
            <div class="card-body">
                <p><b>Your ticket is valid for the train journey you select on our orange timetable days. </b></p>

                <ul>
                    <li>First Class Private Compartment for up to 6 people - <strong>£60.00</strong></li>
                </ul>

                <p>
                    For a seat in a shared carriage -
                </p>

                <ul>
                    <li>Adult - <strong>£13.00</strong></li>
                    <li>Senior (60+) - <strong>£12.00</strong></li>
                    <li>Child (5-15) - <strong>£7.00</strong></li>
                    <li>Family (2 adults and up to 3 children) - <strong>£36.00</strong></li>
                    <li>Infants (under age 5)  - <strong>Free</strong> (but do not get a seat)</li>
                </ul>
                <p class="text-center">
                    <a href="https://bkrailway.digitickets.co.uk" title="Book your tickets">
                    <img width="150px" src="@/assets/Click-for-tickets.png" alt="Book your Tickets" /></a>
                </p>
                <p>
                    Add a visit to the <router-link to="page/museum">Museum of Scottish Railways</router-link> when you buy your
                    train ticket and get a great discount -
                </p>
                <ul>
                    <li>Adult - £3 (normal price £7)</li>
                    <li>Child - 50p (normal price £2)</li>
                </ul>
                <p class="mt-3">
                    <i>Special event fares apply -
                        <router-link to="events">Please see our Events page for further information</router-link></i>
                </p>
                <hr />
                <h4>SEASON TICKETS</h4>
                <p>
                    2023 Season Pass information is coming soon. 
                </p>
                <!--
                    <p>
                        Valid for one year from date of purchase giving unlimited train journeys and museum admission
                        (<i>except some special events</i>).
                        <br />
                        Only available to purchase at the Booking Office at Bo'ness Station on days when trains are 
                        running.
                    </p>
                    <ul>
                        <li>Adult - <strong>£46.00</strong></li>
                        <li>Senior (60+) - <strong>£42.00</strong></li>
                        <li>Child (5-15) - <strong>£25.00</strong></li>
                        <li>Family (2 adults and up to 3 children) - <strong>£110.00</strong></li>
                    </ul>
                    <p>
                        <a href="./staticassets/SeasonTicket22.pdf" download>Download Season Ticket leaflet</a>
                    </p>
                -->
            </div>
        </div>
    </div>   
</template>

<script>
export default {
    name: 'FaresBlock',
}
</script>