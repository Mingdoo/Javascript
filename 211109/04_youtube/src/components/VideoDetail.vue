<template>
  <div>
    <h1>video detail</h1>
    <div v-if="video" class="h-75">
      <iframe :src="videoIframeURL" title="YouTube video" allowfullscreen class="w-100 h-75"></iframe>
      <h2>{{ video.snippet.title }}</h2>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: Object,
  },
  computed: {
    videoIframeURL : function () {
      return `http://www.youtube.com/embed/${this.video.id.videoId}/`
    }
  }
}
</script>

<style>
.iframe75 {
  display: block;
  border: none; 
  height: 75vh; 
  width: 75vw;
}
</style>