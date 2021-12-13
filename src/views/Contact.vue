<template>
  <div class="bg-gradient">
    <section class="section mt-0">
      <div class="container">
        <div class="gogo-about">
          <div class="card card-body mt-5">
            <!-- ===================== About Modal ===================== -->
            <br />
            <h1 class="text-center __web-inspector-hide-shortcut__">
              Contact us
            </h1>
            <br />
            <div>
              <b-container fluid class="p-4 bg-light">
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      :src="require('@/img/facebook.png')"
                      alt="Image 1"
                    ></b-img>
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      :src="require('@/img/line.png')"
                      alt="Image 2"
                    ></b-img>
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      :src="require('@/img/instagram.png')"
                      alt="Image 3"
                    ></b-img>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <div class="col-lg-12">
              <card gradient="secondary" shadow body-classes="p-lg-5">
                <h4 class="mb-1">Send us and email</h4>
                <p class="mt-0"></p>
                <base-input
                  class="mt-5"
                  alternative
                  placeholder="Title"
                  addon-left-icon="ni ni-user-run"
                >
                </base-input>
                <base-input class="mb-4">
                  <textarea
                    class="form-control form-control-alternative"
                    name="name"
                    rows="4"
                    cols="80"
                    placeholder="Type a message..."
                  ></textarea>
                </base-input>
                <base-button type="default" round block size="lg">
                  Send Email
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
</style>