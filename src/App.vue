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

<style>
#app-main {
  background-color: #fafafa;
  font-family: 'Oxygen', sans-serif;
  color: #011627;
}

html {
  scroll-behavior: smooth;
}

.medium-container {
  max-width: 1124px;
  margin: 0 auto;
}
</style>
