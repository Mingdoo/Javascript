<template>
  <div>
    <h1>Lotto</h1>
    <p>{{ picked }}</p>
    <button @click="pickNumbers">Pick</button>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: "Lotto",
  data: function () {
    return {
      numbers: _.range(1,46),
      picked: null
    }
  },
  methods: {
    pickNumbers: function () {
      this.picked = _.sortBy(_.sampleSize(this.numbers, 6))
    }
  }
}
</script>

<style>

</style>