<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: null,
        image_link: true,
        letters: '',
        s: ''
      }
    },
    watch: {
      letters(BrandName) {
        this.letters
        console.log(`${BrandName}`)
      }
    },

    methods: {
      getProducts() {
        axios
          .get(
            'https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique'
          )
          .then((response) => {
            console.log(response.image_link)
            this.products = response.data
          })
      }
    }
  }
</script>

<style lang="scss">
  @mixin flexCenter {
    display: flex;
    justify-content: center;
    justify-content: space-around;
  }
  $textColor: rgba(0, 0, 0, 0.8);
  $buttonColor: rgb(255, 199, 208);

  nav {
    @include flexCenter();
  }

  .navbar-titles a {
    color: $textColor;
  }

  .btn {
    background-color: $buttonColor;
    color: $textColor;
  }
</style>
<template>
  <div class="searchbox">
    <input v-model="letters" />
  </div>
  <p>You have written {{ letters }}</p>

  <div class="button1">
    <input
      class="btn btn-light"
      @click="getProducts"
      type="button"
      value="Search for your brand"
    />
  </div>
  <div class="button2">
    <input
      class="btn btn-light"
      @click="getProducts"
      type="button"
      value="Search for your product"
    />
  </div>
  <div class="counter-button">
    <input
      class="btn btn-light"
      type="button"
      :value="$store.state.something"
      @click="$store.commit('item')"
    />
  </div>
  <div class="productlist">
    <dl v-if="products !== null">
      <li :key="product.id" v-for="product in products">
        <div v-if="image_link !== ''">
          <img :src="product.image_link" />
          <h3>{{ product.name }}</h3>
        </div>
      </li>
    </dl>
  </div>
</template>
