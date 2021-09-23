<template>
    <div class="bg-gradient">
        <section class="section mt-0">
            <div class="container">
                    <div class="gogo-about">
                <div class="card card-body mt-5">
                    <!-- ===================== About Modal ===================== -->
                        <div class="d-flex flex-row justify-content-around align-items-end text-center">
                            <div class="p-2">
                                <img src="../img/logo-gogo.png" alt="GoGo Board">
                                <p><a href="http://www.gogoboard.org" target="_blank"></a></p>
                            </div>
                            <div class="p-2">
                                <img src="../img/logo-lil.png" alt="Learning Inventions Laboratory">
                                <p><a href="https://learninginventions.org" target="_blank"></a></p>
                            </div>
                        </div>
                        <br>
                        <h4 class="text-center __web-inspector-hide-shortcut__">About the GoGo Board Project</h4>
                        <p><strong>The GoGo Board</strong> 
                        versions 1 through 3 was developed at the 
                        <strong>MIT Media Laboratory</strong>
                        , USA. Versions 4 and 5 were developed at Chiang Mai University, 
                        Thailand in collaboration with Stanford University, USA. 
                        Version 6 was developed at Chiang Mai University in collaboration with Columbia University, USA.</p>
                        <dl class="row">
                            <dt class="col-sm-4">Project and Design Leads</dt>
                            <dd class="col-sm-8">Arnan Sipitakiat and Paulo Blikstein</dd>
                            <dt class="col-sm-4">Hardware developers</dt>
                            <dd class="col-sm-8">Attapan Chan-in, Peeranut Pongpakatien and Arnan Sipitakiat</dd>
                            <dt class="col-sm-4">Firmware developers</dt>
                            <dd class="col-sm-8">Peeranut Pongpakatien and Arnan Sipitakiat</dd>
                            <dt class="col-sm-4">Software developers</dt>
                            <dd class="col-sm-8">Marutpong Chailangka, Peeranut Pongpakatien and Arnan Sipitakiat</dd>
                            <dt class="col-sm-4">Web Application developers</dt>
                            <dd class="col-sm-8">Marutpong Chailangka</dd>
                            <dt class="col-sm-4">Manufacturing and distribution</dt>
                            <dd class="col-sm-8">Attapan Chan-in and Arnan Sipitakiat</dd>
                        </dl>
                        <p>
                            <strong>Our current and past sponsors</strong> 
                            include Suksaphattana Foundation, Stanford University, 
                            Thailand National Science and Technology Development Agency (NSTDA), 
                            Schlumberger Excellence in Educational Development (SEED) and Chiang Mai University.
                        </p>
                        <p>
                            Thanks to all academic teams from Chiang Mai University, Stanford University and other institutions who have contributed to this project.
                        </p>
                        <p>
                            Most importantly, thanks to all the GoGo Board users in Thailand, USA, Brazil and elsewhere who have kept this project alive since 2001.
                        </p>
                        <p class="text-muted text-center pt-3">Version v21014</p>
                        <p class="text-center"><a href="javascript:;"><b>Release Notes</b></a></p>

                </div>
                    </div>
            </div>
        </section>
    </div>
</template>
<script>
import Card from '../components/Card.vue'
export default {
    components:{
        Card
        
    }
}
</script>
<style scoped>
    /* .gogo-about{
        margin-top: 7.5%;
    } */
.bg-gradient{
    background: rgb(2,0,36);
    background: linear-gradient(180deg,rgb(163, 37, 125) 0%, rgb(218, 79, 106) 35%, rgb(222, 80, 59) 100%);
}
</style>