<template>
  <div>
    <v-layout>
      <v-flex grow class="left-content">
        <v-layout justify-center align-center style="min-height: 100%;">
          <div>
            <h1 :class="`${smAndDown ? 'mt-16' : ''} landing-page-title`">
              Coffee & toast.
            </h1>
            <p class="mb-0 text-h6 font-weight-bold lightGrayText--text">
              Organic fair trade coffee
            </p>
            <p>All natural whole foods</p>
            <v-layout class="mt-10" wrap>
              <v-btn
                color="darkText"
                dark
                tile
                x-large
                :class="`${mdAndUp ? 'mr-5' : 'mb-3'}`"
                :block="smAndDown"
                >Order now</v-btn
              >
              <v-btn color="darkText" outlined tile x-large :block="smAndDown"
                >Learn more</v-btn
              >
            </v-layout>
          </div>
        </v-layout>
      </v-flex>
      <v-flex grow class="right-content hidden-sm-and-down">
        <div id="landing-image"></div>
      </v-flex>
    </v-layout>

    <v-container>
      <v-layout justify-center wrap>
        <v-flex sm12><v-card>card</v-card></v-flex>
        <v-flex sm12><v-card>card</v-card></v-flex>
        <v-flex sm12><v-card>card</v-card></v-flex>
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

.landing-page-title {
  font-family: 'DM Serif Display', serif;
  font-size: 48px;
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
