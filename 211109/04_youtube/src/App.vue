<template>
  <div id="app">
    <div class="container">
      <search-bar class="text-center" v-on:input-change="inputChange"></search-bar>
      <div class="row">
        <video-detail class="col-9" :video="this.selectedVideo"></video-detail>
        <video-list class="col-3" :videos="videos" @select-video="onSelectVideo"></video-list>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'
import axios from 'axios'

const API_URL = "https://www.googleapis.com/youtube/v3/search"
const API_KEY = process.env.VUE_APP_API_KEY

export default {
  name: 'App',
  data: function () {
    return {
      userInput: null,
      selectedVideo: null,
      videos: null,
    }
  },
  components: {
    SearchBar,
    VideoDetail,
    VideoList,
  },
  methods: {
    inputChange: function (userInput) {
      this.userInput = userInput
      axios({
        method: 'get',
        url: API_URL,
        params: {
          key: API_KEY,
          q: this.userInput,
          part: 'snippet',
          type: 'video',
        }
      })
        .then(res => {
          this.videos = res.data.items
        })
    },
    onSelectVideo: function (video){
      this.selectedVideo = video
      console.log(video)
    }
  }
}
</script>

<style>
</style>
