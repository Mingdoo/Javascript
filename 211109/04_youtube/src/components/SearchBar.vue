<template>
  <div>
    <input type="text" v-on:keyup.enter="onInputChange" class="my-4 w-50">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function() {
    return {
      userInput: null,
    }
  },
  methods: {
    onInputChange: function (event) {
      this.userInput = event.target.value
      this.$emit('input-change', this.userInput)
      event.target.value = ''
    }
  }
}
</script>

<style>

</style>