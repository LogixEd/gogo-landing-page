<template>
    <div class="bg-gradient">
        <section class="section mt-0">
            <div class="container">
                    <div class="gogo-about">
                <div class="card card-body mt-5">
                    <!-- ===================== About Modal ===================== -->
                        <br>
                        <h1 class="text-center __web-inspector-hide-shortcut__">Frequently Asked Questions</h1>
                        <br>
                        <h3><strong> Where can i purchase the GoGo Board? </strong></h3>
                        <p>At Lazada or Shopee</p>
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