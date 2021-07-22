<template>
  <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="src" width="100%" height="400"></iframe>
  </div>
</template>

<script>
export default {
  name: 'web',
  data: () => ({
    myIframe: null,
  }),
  methods: {
    onLoad(frame) {
      this.myIframe = frame.contentWindow
    }
  },
  props: {
    src: ''
  }
}
</script>