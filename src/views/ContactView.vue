<script>
  export default {
    data() {
      return {
        s: '',
        counter: 0
      }
    },
    computed: {
      n() {
        return this.s.length
      }
    },
    methods: {
      onClick() {
        this.counter = this.counter + 1
      }
    }
  }
</script>

<template>
  <div class="contact-us">
    <input v-model="s" />
  </div>
  <p>Du har skrivit in {{ n }} tecken.</p>

  <div class="contact-button">
    <input class="btn btn-info" type="button" value="Contact us!" />
  </div>
  <div class="counter-button">
    <input
      class="btn btn-info"
      :value="counter"
      @click="onClick"
      type="button"
    />
  </div>
</template>
