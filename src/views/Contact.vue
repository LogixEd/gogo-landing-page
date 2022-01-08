<template>
  <div class="bg-gradient">
    <section class="section mt-0">
      <div class="container">
        <div class="gogo-about">
          <div class="card card-body mt-5">
            <!-- ===================== About Modal ===================== -->
            <br />
            <h1 class="text-center __web-inspector-hide-shortcut__">
              {{$t('Contact.ContactTitle')}}
            </h1>
            <br />
            <div>
              <b-container class="p-4" fluid>
                <b-row >
                  <b-col>
                    <a
                      href="https://shopee.co.th/itim.shop?categoryId=100632&itemId=13027667638"
                      target="_blank"
                      rel="noopener"
                    >
                      <b-img
                      class="contact-icon"
                      center
                        fluid
                        rounded="circle"
                        :src="require('@/img/facebook1.png')"
                        alt="Image 1"
                      ></b-img>
                    </a>
                  </b-col>
                  <b-col>
                    <a
                      href="https://shopee.co.th/itim.shop?categoryId=100632&itemId=13027667638"
                      target="_blank"
                      rel="noopener"
                    >
                      <b-img
                      class="contact-icon"
                      center
                        fluid
                        rounded="circle"
                        :src="require('@/img/line1.png')"
                        alt="Image 2"
                      ></b-img>
                    </a>
                  </b-col>
                  <b-col>
                    <a
                      href="https://shopee.co.th/itim.shop?categoryId=100632&itemId=13027667638"
                      target="_blank"
                      rel="noopener"
                    >
                      <b-img
                      class="contact-icon"
                      center
                        fluid
                        rounded="circle"
                        :src="require('@/img/instagram1.png')"
                        alt="Image 3"
                      ></b-img>
                    </a>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <div class="col-lg-12">
              <card gradient="secondary" shadow body-classes="p-lg-5">
                <h4 class="mb-1">{{$t('Contact.EmailTitle')}}</h4>
                <p class="mt-0"></p>
                <base-input
                  class="mt-5"
                  alternative
                  v-bind:placeholder= "$t('Contact.YourEmail')"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>
                <base-input
                  class="mt-0"
                  alternative
                  v-bind:placeholder= "$t('Contact.Title')"
                  addon-left-icon="ni ni-caps-small"
                >
                </base-input>
                <base-input class="mb-4">
                  <textarea
                    class="form-control form-control-alternative"
                    name="name"
                    rows="4"
                    cols="80"
                    v-bind:placeholder= "$t('Contact.Message')"
                  ></textarea>
                </base-input>
                <base-button type="default" round block size="lg">
                  {{$t('Contact.SendEmailButton')}}
                </base-button>
              </card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>
<style scoped>
/* .gogo-about{
        margin-top: 7.5%;
    } */
.bg-gradient {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgb(163, 37, 125) 0%,
    rgb(218, 79, 106) 35%,
    rgb(222, 80, 59) 100%
  );
}

.contact-icon {
    height: 70%;
}
</style>