<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="require('../img/project1.gif')"
            alt="image slot"
          />
        </template>
      </b-carousel-slide> -->

      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../img/project1.gif')"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('../img/project2.gif')"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('../img/project3.gif')"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('../img/project5.gif')"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('../img/project6.gif')"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('../img/project7.gif')"
      ></b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Project: {{ description.name[slide] }}<br />
      <!-- Sliding: {{ sliding }} -->
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      description: {
        name: ["Automate Book", "WebUI Controller", "Rube GoldBerg Machine", "Automate Farming", "Mini Car Controll", "Shirt Folder Machine"]
      }
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>