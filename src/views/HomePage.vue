<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <div class="d-flex">
                <section class="section section-shaped  section-shaped-gogo my-0">
                    <div class="shape shape-style-1 shape-gogo shape-skew">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="animation-container">
                        <div class="container-gogo">
                            <div class="img-container slide-to-left">
                                <transition name="fadeForGoGo">
                                    <img src="../img/gogopic.png" class="img-fluid floating img-gogo-logo " v-on:load="onLoaded" v-show="loaded"/>
                                </transition>
                            </div>
                            <div class="card-container ">
                                <!-- class="border-0 h-100" hover shadow body-classes="py-5" -->
                                <card gradient="secondary" shadow body-classes="py-5" class="appear-when-last">
                                        <h2 class="display-1 text-black text-center">GoGo Board</h2>
                                        <h2 class="display-2 text-muted text-center"><span>Turn imagination to practice.</span></h2>
                                        <p class="lead text-muted">The GoGo Board is a low-cost open-source hardware device for educational robotics, 
                                                    scientific experiments, 
                                                    and environmental sensing. 
                                                    Children can use the board to construct robots, 
                                                    measure and log environmental data, 
                                                    conduct scientific investigations, 
                                                    create game controllers, 
                                                    build interactive art installations, 
                                                    and much more.</p>
                                </card>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section class="section section-shaped  section-shaped-gogo my-0">
                <div class="shape shape-style-1 shape-gogo1 shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container">
                    <div class="row row-grid justify-content-center my-0">
                      <div class="text-center">
                          <h2 class="display-1 text-dark">GoGo Code
                          </h2>
                          <p class="lead text-secondary">This is the tool for operating the board.</p>
                      </div>
                        <div class="gogo-code-container">
                            <!-- <div class="card shadow bg-gradient-secondary"> -->
                                <div class="card-body p-lg-5 gogo-code-display">
                                    <web class="gogo-code-display-height" :src="'https://code.gogoboard.org/#/'"/>
                                </div>
                            <!-- </div> -->
                        </div>
                      <!-- <div class="gogo-code-container">
                          <div class="card gogo-code-display">
                            <web :src="'https://code.gogoboard.org/#/'"/>
                          </div>
                      </div> -->
                    </div>
                </div>
            </section>
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2 class="display-1  text-white">TRY THIS</h2>
                                <h2 class="display-3 text-white">
                                    <span>beep example</span>
                                </h2>
                                <p class="lead  text-white">This is an example for making GoGo Board to beep with 10 times.</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                 class="mb-3 mb-sm-0"
                                                 type="warning"
                                                 icon="fa fa-shopping-bag">
                                        Buy
                                    </base-button>
                                    <base-button tag="a"
                                                 href="https://code.gogoboard.org/#/program/"
                                                 class="mb-3 mb-sm-0 btn-yellow"
                                                 type="default"
                                                 icon="fa fa-code">
                                        code.gogo Website
                                    </base-button>
                                </div>
                            </div>
                            <div class="card-body p-lg-12">
                                <web :src="'https://code.gogoboard.org/#/view/17799706-2dbe-4614-b7a1-3dc94d0e545f?lang=en'"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br><br>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 ">
            <div class="container">
                <div class="row justify-content-center">
                    <h2 class="display-1 mt--100">Supported Platform</h2>
                    <div class="col-lg-13 ">
                        <div class="row row-grid ">
                            <div class="col-lg-4">
                                <card class="border-0 h-100" hover shadow body-classes="py-5">
                                    <div class="col-lg-12">
                                        <div class="d-flex justify-content-center">
                                            <div class="p-2 bd-highlight img-max-aspect">
                                                <img src="../img/arduino-logo.png" class="img-fluid">
                                            </div>
                                        </div>
                                        <div class="row top-buffer">
                                            <h6 class="text-primary text-uppercase" >Arduino</h6>
                                            <p class="description mt-3">Arduino is a world wide open-source electronics platform based on easy-to-use hardware and software.</p>
                                            <div>
                                                <badge type="primary" rounded>hardware</badge>
                                                <badge type="primary" rounded>software</badge>
                                                
                                            </div>
                                        </div>
                                        <base-button tag="a" href="https://www.arduino.cc/" type="primary" class="mt-4">
                                            Learn more
                                        </base-button>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0 h-100" hover shadow body-classes="py-5">
                                    <div class="col-lg-12">
                                        <div class="d-flex justify-content-center">
                                            <div class="p-2 bd-highlight img-max-aspect">
                                                <img src="../img/seeed-logo.png" class="img-fluid">
                                            </div>
                                        </div>
                                        <div class="row top-buffer">
                                            <h6 class="text-success text-uppercase">Grove Sensor</h6>
                                            <p class="description mt-3">Grove is an open modular system designed for easy connection of any input or output model to a microprocessor. </p>
                                            <div>
                                                <badge type="success" rounded>hardware</badge>
                                                
                                            </div>
                                        </div>
                                        <base-button tag="a" href="https://www.seeedstudio.com/category/Sensor-for-Grove-c-24.html" type="success" class="mt-4">
                                            Learn more
                                        </base-button>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0 h-100" hover shadow body-classes="py-5">
                                    <div class="col-lg-12">
                                        <div class="d-flex justify-content-center">
                                            <div class="p-2 bd-highlight img-max-aspect">
                                                <img src="../img/scratch-with-cat.jpeg" class="img-fluid">
                                            </div>                            
                                        </div>
                                        <div class="row top-buffer">
                                            <h6 class="text-warning text-uppercase">Scratch</h6>
                                            <p class="description mt-3">Scratch is a free programming language and online community where you can freely create your imagination with coding.</p>
                                            <div>
                                                <badge type="warning" rounded>software</badge>

                                            </div>
                                        </div>
                                        <base-button tag="a" href="https://scratch.mit.edu/" type="warning" class="mt-4">
                                            Learn more
                                        </base-button>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="display-3">Interested in GoGo Board?
                            <span class="text-success">Want to see more about GoGo Board? </span>
                        </h2>
                        <p class="lead">You can see the product information at this link down below. Thanks for your interest in our product
                            we hope you enjoy our product.
                        </p>
                        <div class="btn-wrapper">
                            <a href="https://www.creative-tim.com/product/vue-argon-design-system"
                               class="btn btn-primary mb-3 mb-sm-0">Let's Start</a>
                        </div>
            
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <h4 class="display-4 mb-5 mt-5 text-center">FAQ</h4>
                <div>
                  <b-card no-body>
                    <b-tabs card vertical>
                      <b-tab title="How to power gogoboard."><b-card-text>Tab contents 1</b-card-text></b-tab>
                      <b-tab title="where is the settings menu"><b-card-text>Tab contents 2</b-card-text></b-tab>
                      <b-tab title="How to reset the board"><b-card-text>Tab contents 3</b-card-text></b-tab>
                    </b-tabs>
                  </b-card>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import web from "../modifiedComponents/ImportWeb.vue";
import { ModelCollada } from "vue-3d-model";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  data() {
    return {
      loaded: false,
      slideIsDone: false,
    };
  },
  mounted() {},
  methods: {
    onLoaded() {
      this.loaded = true;
      setTimeout(() => {
        this.slideIsDone = true;
      }, 5500);
    },
  },
  components: {
    web,
    ModelCollada,
    Tabs,
    TabPane,
  },
};
</script>
<style scoped lang="scss">
// @import "../assets/scss/bootstrap/_variables.scss";
// @import "../assets/scss/custom/_section.scss";

.gogo-code-container{
  height: 100%;
  width: 100%;
}

.gogo-code-display{
  height: 100%;
}

.container-gogo {
  // @extend .container;
  margin-top: 5vh;
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  //   overflow: hidden;
  word-wrap: break-word;
}
.image-container {
  justify-content: center;
  position: relative;
  top: 40vh;
  //   left: 50vw;

  transform: translate(-50vw, -50vh);
}
.image-container img {
  -webkit-filter: drop-shadow(-4px 5px 5px rgba(0, 0, 0, 0.6));
  filter: drop-shadow(-4px 5px 5px rgba(0, 0, 0, 0.6));
}
.card-container {
  position: relative;
  top: 25%;
  left: 53%;
  width: 70vh;
  height: 50vh;
  /* right: 0%; */
  transform: translate(-50%, -50%);
  margin-top: -70vh;
  margin-left: 20%;
}
.btn-yellow {
  color: #fff;
  background-color: #fb6340;
  border-color: #fb6340;
}

.fadeForGoGo-enter-active {
  transition: opacity 2s ease-in-out;
}

.fadeForGoGo-enter {
  opacity: 0;
}

.fadeForGoGo-enter-to {
  opacity: 1;
}

@keyframes text-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}

@keyframes go-left {
  0% {
    right: 0%;
  }
  100% {
    right: 22.5%;
  }
}
@media only screen and (max-width: 1320px) {

  .gogo-code-display-height{
    height: 100%;
  }

  .gogo-code-container{
    height: 100vh;
    width: 100%;
  }

  .gogo-code-display{
    height: 75vh;
  }

  .container-gogo {
    align-items: center;
    overflow-wrap: break-word;
    height: 100vh;
  }

  .animation-container{
    overflow: auto; 
  }

  .appear-when-last {
    opacity: 0;
    position: relative;
    animation-name: text-appear;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }

  .card-container {
    /* top: 60vh; */
    margin-top: 5vw;
    left: 30vw;
    width: 80vw;
  }
  .card-container p {
    font-size: 3vw;
  }
  .card-container h1 {
    font-size: 3vw;
  }
  .card-container h2 {
    font-size: 3vw;
  }
  h2{
    font-size: 10vw;
  }
  @keyframes go-left {
    0% {
      right: 0%;
    }
    100% {
      right: 0%;
    }
  }
  .slide-to-left {
    position: relative;
    animation-name: go-left;
    animation-duration: 0s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }
}
.slide-to-left {
  position: relative;
  animation-name: go-left;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}
.appear-when-last {
  opacity: 0;
  position: relative;
  animation-name: text-appear;
  animation-duration: 2s;
  animation-delay: 5s;
  animation-fill-mode: forwards;
}
.img-gogo-logo {
  width: 40%;
  height: 40%;
  margin-top: 4vh;
  margin-left: 30vw;
}
.product-logo {
  width: 5em;
  height: 5em;
  align-items: center;
}

.img-support-logo {
  width: 50em;
  height: 50em;
}

.top-buffer {
  margin-top: 30%;
}

.img-max-aspect {
  max-height: 150px;
}
</style>