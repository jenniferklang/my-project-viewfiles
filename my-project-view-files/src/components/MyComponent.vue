<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: large;
    position: absolute;
    padding-top: 400px;
    padding-left: 150px;
  }
</style>

<template>
  <p>{{ msg }}</p>
</template>
