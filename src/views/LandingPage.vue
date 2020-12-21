<template>
  <div>
    <v-layout justify-even>
      <v-flex grow>
        <div>left content</div>
      </v-flex>
      <v-flex grow class="right-content">
        <div id="landing-image"></div>
      </v-flex>
    </v-layout>

    <v-container>
      <v-layout justify-center wrap>
        <v-flex md3 sm12 grow><v-card>card</v-card></v-flex>
        <v-flex md3 sm12 grow><v-card>card</v-card></v-flex>
        <v-flex md3 sm12 grow><v-card>card</v-card></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class Home extends AppComponent {}
</script>

<style scoped>
.right-content > div {
  min-height: calc(100vh - 64px);
  max-height: calc(100vh - 64px);
}

#landing-image {
  background-image: url('../assets/coffee-unsplash.jpg');
  background-repeat: no-repeat;
  /* border-radius: 50%; */
  background-size: contain;
  background-position: right;
  /* background-position: -50px; */
}
</style>
