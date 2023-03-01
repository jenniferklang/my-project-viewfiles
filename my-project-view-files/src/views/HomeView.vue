<script>
  import MyComponent from '../components/MyComponent.vue'

  export default {
    components: {
      MyComponent
    }
  }
</script>

<template>
  <div class="call-to-action">
    <input
      class="btn btn-light"
      @click="onClick"
      type="button"
      value="It's time to do your makeup!"
    />
  </div>
  <h1><MyComponent msg="Welcome to the makeupjungle" /></h1>
  <div class="brushes"><img alt="" src="/assets/bild-labb2.jpeg" /></div>
</template>

<!--picture from https://www.pexels.com/-->
