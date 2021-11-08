<template>
  <div>
    <input type="text" name="" id="" @keyup.enter="onInputKeyWord">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInputKeyWord: function(event) {
      this.$emit('input-change', event.target.value)
      console.log(event.target.value)
      event.target.value = ''
    }
  }
}
</script>

<style>

</style>
