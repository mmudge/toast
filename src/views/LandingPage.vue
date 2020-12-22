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
              <v-btn
                color="darkText"
                href="#learn-more"
                outlined
                tile
                x-large
                :block="smAndDown"
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

    <div id="learn-more" :class="`${smAndDown ? 'px-5' : ''} text-center`">
      <p>
        We believe in food and coffee of the highest standards, organically
        grown and ethically sourced.
      </p>

      <p>
        We source our beans from both local farmers and free trade partners
        abroad.
      </p>

      <p>
        <i>"Eat better, not less. Drink coffee, dont stress." -m_mudge</i>
      </p>
    </div>

    <v-container class="mt-16">
      <h3 class="dish-header pl-1 mt-16 pb-3">Favorites</h3>
      <v-layout justify-center wrap>
        <v-flex sm12 md4 pa-1
          ><v-card tile>
            <v-img height="500" src="@/assets/eggs.jpg"> </v-img> </v-card
        ></v-flex>
        <v-flex sm12 md4 pa-1
          ><v-card tile>
            <v-img height="500" src="@/assets/french-toast.jpg">
            </v-img> </v-card
        ></v-flex>
        <v-flex sm12 md4 pa-1
          ><v-card tile>
            <v-img height="500" src="@/assets/grilled-cheese.jpg">
            </v-img> </v-card
        ></v-flex>
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

#learn-more {
  margin-top: 150px;
}

#learn-more p {
  /* font-family: 'DM Serif Display', serif; */
  font-size: 22px;
  font-weight: lighter;
}

.dish-header {
  /* font-family: 'DM Serif Display', serif; */
  font-size: 22px;
}
</style>
