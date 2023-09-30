<template>
    <div id="footer" class="container-fluid text-white py-4 mt-3"> 
        <div id="socialicons">
            <ul class="list-inline">
                <li class="list-inline-item"><a class="link-light pe-2" target="_blank" href="https://www.facebook.com/BonessKinneilRailway/"><font-awesome-icon size="3x" :icon="['fab', 'facebook-square']" /></a></li>
                <li class="list-inline-item"><a class="link-light pe-2" target="_blank" href="https://www.instagram.com/bonesskinneilrailway/"><font-awesome-icon size="3x" :icon="['fab', 'instagram-square']" /></a></li>
                <li class="list-inline-item"><a class="link-light" target="_blank" href="https://twitter.com/bonessrailway"><font-awesome-icon size="3x" :icon="['fab', 'twitter-square']" /></a></li>
            </ul>
        </div>

        <div class="row">
            <div class="col-12 col-sm-6 pb-3">
                <div>
                    <b>The Scottish Railway Preservation Society,</b><br />
                    operators of Bo'ness &amp; Kinneil Railway and Museum of Scottish Railways, <br />
                    is a Scottish Charity, SC002375, regulated by the Scottish Charity Regulator (OSCR)
                </div>


            
                <div class="mt-3">
                    <ul class="list-unstyled">
                        <li><font-awesome-icon class="fa-fw pe-1" size="2x" icon="phone-square-alt"/> <a class="link-light text-decoration-none" href="tel:01506 825855">01506 825855</a></li>
                        <li><font-awesome-icon class="fa-fw pe-1" size="2x" icon="envelope"/> <a class="link-light text-decoration-none" href="mailto:enquiries@srps.org.uk">enquiries.railway@srps.org.uk</a></li>
                    </ul>
                </div>

                <div>
                    <a class="link-light" href="https://bkrailway.us3.list-manage.com/subscribe?u=39208c212e4ffc9b9f7acd39a&id=5eaf26d110">
                        To hear about our events and other news join our mailing list.
                    </a>
                </div>

                <div id="footerlogos" class="text-begin">
                    <img class="image-fluid pt-4" id="tblogo" src="@/assets/TouristBoard.png" alt="Scottish Tourist Board Attraction"/>
                </div>
            </div>

            <div class="col-12 col-sm-6">
                <h5>OTHER SRPS WEB SITES</h5>
                 <ul class="mt-3 list-unstyled">
                    <li><a class="link-light text-warning text-decoration-none" href="https://www.srps.org.uk/">Scottish Railway Preservation Society</a></li>
                    <li><a class="link-light text-warning text-decoration-none" href="https://www.srps.org.uk/railtours/">SRPS Railtours</a></li>
                    <li><a class="link-light text-warning text-decoration-none" href="https://shop.srps.org.uk/">SRPS online shop</a></li>
                    <li><a class="link-light text-warning text-decoration-none" href="http://www.srpsdiesel.co.uk/">SRPS Diesel Group</a></li>
                    <li><a class="link-light text-warning text-decoration-none" href="https://www.srpssteam.com/">SRPS Steam Group</a></li>
                    <li><a class="link-light text-warning text-decoration-none" href="https://www.gotopcs.net/">SRPS Carriage &amp; Wagon Dept.</a></li>
                    <li><a class="link-light text-warning text-decoration-none" href="https://www.srpsbirkhillgroup.org.uk/">SRPS Birkhill Station development.</a></li>
                </ul>


            </div>

        </div>

        <ul class="mt-3 list-inline">
            <li class="list-inline-item"><a class="link-light" href="https://bkrailway.digitickets.co.uk/pages/terms">Terms & conditions</a></li>
            <li class="list-inline-item"><router-link class="link-light" to="/page/dp">Data protection policy</router-link></li>
            <li class="list-inline-item"><router-link class="link-light" to="/page/company">Company details</router-link></li>
        </ul>
    </div> 
</template>

<script setup>

</script>

<style>
    #footer {
        background: rgb(68, 68, 68) !important;
        font-size: 90%;
    }

    #tblogo {
        height: 100px;
    }
</style>