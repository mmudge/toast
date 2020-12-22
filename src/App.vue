<template>
  <v-app id="app-main-content">
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
#app-main-content {
  background-color: #fafafa;
  font-family: 'Oxygen', sans-serif;
  color: #011627;
}
</style>
