<template>
    <div id="ThomasPage" class="home container">
        <h1>Day Out With Thomas - Dates, Prices and Tickets</h1>

        <div class="row mb-2">
            <div class="col-12 col-sm-6">
                <img class="img-fluid" src="~@/assets/DOWT1_scaled.jpg" alt="DOWT Family" />
            </div>
            <div class="col-12 col-sm-6">
                <small><i>Image by Paul Michael Hughes Photography<br />
                    <ul class="list-unstyled">
                        <li><font-awesome-icon  icon="phone-square-alt"/> <a href="tel:07790819111"> 07790819111 UK</a></li>
                        <li><font-awesome-icon icon="envelope"/> <a href="mailto:pmh@paulmichaelhughes.com">pmh@paulmichaelhughes.com</a></li>
                        <li><font-awesome-icon icon="globe"/> <a href="https://www.paulmichaelhughes.com">www.paulmichaelhughes.com</a></li>
                    </ul>
                </i></small>
            </div>
        </div>

        <h2 class="text-center my-4">
            We are delighted to welcome visitors to a Day Out With Thomas™ in 2023. 
        </h2>

        <div class="row mb-4">
            <div class="col-12 col-sm-6">
                <div class="card">
                    <h3 class="card-header">Prices</h3>
                    <div class="card-body">
                        <div class="text-center my-3">
                            <a href="https://www.quaytickets.com/dayoutwiththomas/en-GB/shows/day%20out%20with%20thomas%20at%20bo%E2%80%99ness%20-%20kinneil%20railway/events"
                                class="btn btn-outline-primary btn-lg">Purchase tickets</a>
                        </div>
                        <p><b>The fare for anyone age 2 or over is £18* and must be pre-booked.</b></p>
 
                        <p>
                            Under 2s are free but will not be entitled to a seat, 
                            please be aware that every seat in your carriage could be sold out 
                            so we appreciate your co-operation with this.
                        </p>
                        <p>
                            All entertainment and rides are covered by your ticket! See programme when available.
                        </p>
                        <p>
                            This is a Premium Fare event which means discount vouchers including  
                            complimentary tickets, Annual membership cards &amp; vouchers and other discount passes are not valid.
                        </p>
                        <p>
                            *All transactions are subject to a non-refundable 75p transaction charge and non-refundable 10% booking fee.
                        </p>

                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6">
                <div class="card">
                    <h3 class="card-header">WHAT'S INCLUDED IN THE TICKET PRICE?</h3>
                    <div class="card-body">
                        <p><b>Look what’s included in your ticket!</b></p>
                        <ul>
                            <li>A ride behind Thomas, a REAL steam engine!</li>
                            <li>Take a photo with Percy</li>
                            <li>Sing-a-longs and performances from Rusty &amp; Dusty and Sir Tophan Hatt</li>
                            <li>Play Pod with with Thomas &amp; Friends activities</li>
                            <li>Thomas &amp; Friends Themed Scavenger Hunt</li>
                            <li>Thomas &amp; Friends Garden Games</li>
                            <li>Face painting</li>
                            <li>Rides on the Miniature Railway</li>
                            <li>Visit the Engineering Workshop Viewing Gallery</li>
                            <li>Visit the Museum of Scottish Railways</li>
                            <li>Visit the Model Railway</li>
                            <li>Thomas &amp; Friends giveaways for every child</li>
                            <li>Thomas &amp; Friends Gift Shop</li>
                        </ul>
                        <p>
                            If you have booked tickets for the afternoon it is advisable to enjoy
                            all there is to do at Bo’ness before you take your train ride to Birkhill
                            as some things may be unavailable when you get back to Bo’ness following
                            your return train journey from Birkhill.
                        </p>
                        <p>
                            <a href="https://cms.srps.org.uk/assets/40321730-1810-4c4b-88f9-a4ab4946728f.pdf" download="DOWT July Event Prog 2023.pdf">Download event programme.</a>
                            <!-- Downloadable event programme coming soon. -->
                        </p>
                        <p>
                            <i>*Exact details of entertainment subject to availability and change.</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-12 col-sm-6">
                <img class="img-fluid" src="~@/assets/DOWT2-scaled.jpg" alt="DOWT Family" />
            </div>
            <div class="col-12 col-sm-6">
                <small><i>Image by Paul Michael Hughes Photography<br />
                    <ul class="list-unstyled">
                        <li><font-awesome-icon  icon="phone-square-alt"/> <a href="tel:07790819111"> 07790819111 UK</a></li>
                        <li><font-awesome-icon icon="envelope"/> <a href="mailto:pmh@paulmichaelhughes.com">pmh@paulmichaelhughes.com</a></li>
                        <li><font-awesome-icon icon="globe"/> <a href="https://www.paulmichaelhughes.com">www.paulmichaelhughes.com</a></li>
                    </ul>
                </i></small>
            </div>
        </div>

        <h2>Other Useful Information</h2>

        <div class="accordion mb-4" id="accordionFAQ">
            <div v-for="item in items" :key="item.n" class="accordion-item">
                <h2 class="accordion-header" :id="'heading' + item.n">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + item.n" aria-expanded="false" :aria-controls="'collapse' + item.n">
                    {{ item.q }}
                </button>
                </h2>
                <div :id="'collapse' + item.n" class="accordion-collapse collapse" :aria-labelledby="'heading' + item.n" data-bs-parent="#accordionFAQ">
                <div class="accordion-body">
                    <i><span v-html="item.a"></span></i>
                </div>
                </div>
            </div>
        </div>

        <div id="trademark">
            <p><small>Day Out With Thomas ™ © 2023 Gullane (Thomas) Limited. Thomas &amp; Friends™ 
            Based on The Railway Series by The Reverend W.Awdry. © 2023 Gullane (Thomas) Limited.</small></p> 
            <p><small>Thomas the Tank Engine, Thomas &amp; Friends and Day Out With Thomas are trademarks of Gullane (Thomas) Limited. 
                ©2023 Mattel. All rights reserved. ® and ™ designate U.S. trademarks of Mattel, except as noted.</small></p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const items = ref([
        {
            n: "One",
            q: "Will Thomas be there?",
            a: "Yes, Thomas will pull your train to Birkhill and back.",
        },
        {
            n: "Two",
            q: "Are the Thomas Rides unlimited?",
            a: "No, you must have a ticket for a pre-booked time slot.",
        },
        {
            n: "Three",
            q: "How long is the Thomas train ride?",
            a: `The journey from Bo’ness to Birkhill is approximately 20 minutes. 
                The train will stop at Birkhill for visitors to have a short comfort break before travelling back to Bo’ness. 
                The total return journey time including the short break is approximately 50 minutes.`,
        },
        {
            n: "Four",
            q: "What does my Day Out With Thomas ticket include?",
            a: `Your ticket includes all the activities included in the What’s Included section above.
                *Exact details of entertainment subject to availability and change.`
        },
        {
            n: "Five",
            q: "What time should I plan to arrive?",
            a: `Activities are available to visitors from 09:30 until 16:30.
                Please arrive at least 30 minutes before your pre-booked time slot. (this is printed on your e-ticket).`
        },
        {
            n: "FiveA",
            q: "Do you have parking?",
            a: `There is a large, free car park at Bo'ness Station with dedicated accessible spaces in front of the station.
                It does get busy quickly, though, and alternative free parking can be found in Union Street (EH51 9AA),
                Seaview Place (EH51 0AJ) and Register Street (EH51 9AA). All car parks are around a 5-10 minute walk to
                Bo'ness Station so please allow plenty of time for parking and getting to the event`,
        },                
        {
            n: "Six",
            q: "Can I bring my dog?",
            a: "We regret that dogs (except assistance dogs) are not allowed at this event.",
        },
        {
            n: "Seven",
            q: "Do I have to book in advance?",
            a: `Yes, <a href="https://www.quaytickets.com/dayoutwiththomas/en-GB/shows/day%20out%20with%20thomas%20at%20bo%27ness%20and%20kinneil%20railway/events">
                you should book your tickets online</a>. Under 2s are free but will not be entitled to a seat,
                please be aware that every seat in your coach could be sold out so we appreciate your co-operation with this.`
        },
        {
            n: "Eight",
            q: "How will I receive my tickets?",
            a: `All Day Out With Thomas tickets are issued as e-tickets.
                Your confirmation email will include a PDF attachment – these are your e-tickets.
                Please either print at home or have the PDF ready to show on your mobile device at the entrance.`
        },
        {
            n: "Nine",
            q: "Is there somewhere to get something to eat?",
            a: `Treat yourself to a meal in the Station Buffet or enjoy a picnic at one of our dedicated picnic areas.`
        },
        {
            n: "Ten",
            q: "Do you have a gift shop?",
            a: "Yes at Bo’ness Station."
        },
        {
            n: "Eleven",
            q: "How do we get to you?",
            a: `We are under an hour’s drive from Edinburgh and Glasgow. The postcode to locate us is EH51 9AQ.`
        },
        {
            n: "Twelve",
            q: "Can I visit without buying a ticket?",
            a: `No, you must have a valid ticket to gain access to the railway site.`
        },
        {
            n: "Thirteen",
            q: "Where do the main event activities take place?",
            a: `The event is based at Bo’ness at the Station and the Museum Of Scottish Railways.
                Your Thomas train goes to Birkhill Station where there will be a short break before the train takes you back to Bo’ness.
                There will be no entertainment at Birkhill Station this year as we are delighted to be able to use our Visitor Trails,
                Museum of Scottish Railways and brand-new Engineering Workshop Viewing Gallery to expand the visitor experience.`
        },
        {
            n: "Fourteen",
            q: "What’s the difference between Standard Seats and Private Compartments?",
            a: `Standard Seats are arranged in 4s, usually with a table in the middle.
                They are in carriages that you will share with other visitors.
                Private Compartments are separate areas of the train which can seat up to 6 people.
                These are sold as one ticket and are ideal for large groups.`
        },
        {
            n: "Fifteen",
            q: "Are there toilets on the train?",
            a: `Yes, along with toilet facilities at our Museum and each station,
                including baby changing and disabled facilities at Bo’ness.`
        },
        {
            n: "Sixteen",
            q: "Is there room for pushchairs, prams and buggies?",
            a: `Space on our trains is very limited so we offer a free buggy park* at Bo’ness Station
                where you can leave your pushchair, pram or buggy while you travel to Birkhill and back.
                Alternatively, access to and from the event site is permitted throughout the day
                (please ensure you carry your Day Out With Thomas event ticket with you at all times) should you prefer to leave your pushchair,
                pram or buggy in your car.<br />
                <i>* PLEASE NOTE: The Buggy Park is unsupervised and items are left at owner’s risk.
                SRPS accepts no liability for any loss of items on the day</i>.`
        },
        {
            n: "Seventeen",
            q: "Do you have facilities for disabled visitors?",
            a: `There is good disabled access to the station, the Station Buffet, the entertainment, the trains,
                the Museum of Scottish Railways and Engineering Workshop Viewing Gallery.
                There is also plenty of dedicated disabled parking at Bo’ness. A disabled toilet is also available at Bo’ness station.
                All trains are equipped with ramps for easy wheelchair access.
                Wheelchair users should call Quaytickets on <a href="tel:08432080500">0843 208 0500</a> to book their tickets.
                Our accessible carriage is Carriage B. If you have any further questions or would like to see the accessibility document,
                contact Bo’ness & Kinneil directly on <a href="tel:01506825855">01506 825855</a> to discuss suitability.`
        },
        {
            n: "Nineteen",
            q: "Is Thomas at your railway all the time?",
            a: `We are open for much of the year (see our Prices & Timetables) and run a steam and diesel service.
                However we are pleased to say that 2023 dates for Day Out With Thomas are Saturday 13 & Sunday 14 May,
                Saturday 15 & Sunday 26 July and Saturday 9 & Sunday 10 September. At other times Thomas can be found being a really useful engine at other railways.
                You can find out where by visiting <a href="https://www.dayoutwiththomas.co.uk">www.dayoutwiththomas.co.uk</a>.`
        }       
    ]);

    onMounted(() => {
        router.push('/page/thomas');
    })
</script>

<style>

</style>
