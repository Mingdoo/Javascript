<template>
  <div>
    <h1>articles</h1>
    {{$route.params.pk}} 번 게시글입니다.
    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>

  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
export default {
  name: "Articles",
  data: function() {
    return {
      articlePk : this.$route.params.pk,
      article: null,
    }
  },
  created: function () {
    axios.get(`${API_URL}/${this.articlePk}`)
      .then(res => {
        this.article = res.data
      })
  }
}
</script>

<style>

</style>