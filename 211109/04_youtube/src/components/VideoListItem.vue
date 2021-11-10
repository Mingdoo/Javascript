<template>

  <li class="list-group-item text-center row" @click="selectVideo">
    <p><img :src="thumbnailURL" alt="" class="img-fluid img-thumbnail"></p>
    <p><b>{{ video.snippet.title | unescape }}</b></p>
  </li>
</template>

<script>
import _ from 'lodash'

export default {
  name: "VideoListItem",
  props: {
    video: Object,
  },
  computed: {
    thumbnailURL: function () {
      return this.video.snippet.thumbnails.default.url
    },
  },
  filters: {
    unescape: function (rawText) {
      return _.unescape(rawText)
    }
  },
  methods: {
    selectVideo: function () {
      this.$emit('select-video', this.video)
    }
  }
}
</script>

<style>

</style>