<template>
  <div>
    <h1>Lunch</h1>
    <div>{{ lunch }}</div>
    <button @click="selectLunch">Pick</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "Lunch",
  data: function () {
    return {
      lunch: null,
    }
  },
  methods: {
    selectLunch: function () {
      const lunches = ['짜장', '짬뽕', '볶음밥']
      this.lunch = _.sample(lunches)
    }
  }
}
</script>

<style>

</style>