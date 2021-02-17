<template>
  <v-app id="app-main">
    <Nav />
    <v-main>
      <router-view> </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Nav,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app-main {
  background-color: #fafafa;
}

.serif-font {
  font-family: 'Bebas Neue', cursive;
}

html {
  scroll-behavior: smooth;
  font-family: 'PT Sans Narrow', sans-serif;
  color: #011627;
}

.v-application {
  font-family: 'PT Sans Narrow', sans-serif !important;

  .text-subtitle-1,
  .text-h6,
  .text-h5,
  .text-h4,
  .text-body-2,
  .text-body-1 {
    font-family: 'PT Sans Narrow', sans-serif !important;
  }
}

.medium-container {
  max-width: 1124px;
  margin: 0 auto;
}

.hover-cursor-pointer:hover {
  cursor: pointer;
}
</style>
