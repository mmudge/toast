<template>
  <div>
    <v-layout
      :class="
        `${
          mdAndUp ? 'medium-container' : 'text-center px-5 pt-8 pb-16'
        } landing-content align-center`
      "
    >
      <v-flex v-if="mdAndUp" class="left-content">
        <PictureGrid style="height: 550px; width: 550px;" />
      </v-flex>
      <v-flex :class="`${smAndDown ? '' : 'pl-16'}`">
        <div>
          <h1 :class="`${smAndDown ? 'mt-16' : ''} text-h3 font-weight-medium`">
            Need coffee? We've got your back!
          </h1>

          <p class="text-subtitle-1 mediumGray--text pt-10 pb-14">
            We believe in coffee and food of the highest standards, organically
            grown and ethically sourced. We source our beans from both local
            farmers and free trade partners abroad.
          </p>

          <v-layout wrap>
            <v-btn
              color="accent"
              dark
              tile
              large
              :class="`${mdAndUp ? 'mr-5' : 'mb-3'} font-weight-bold`"
              :block="smAndDown"
              @click.stop="routeTo('menu')"
              style="display: block;"
            >
              <v-icon class="mr-3">fas fa-long-arrow-alt-right</v-icon>
              Explore menu</v-btn
            >
            <v-btn
              color="darkText"
              outlined
              tile
              large
              class="font-weight-bold"
              :block="smAndDown"
              @click.stop="routeTo('about')"
              style="display: block;"
              >Learn more</v-btn
            >
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import PictureGrid from '@/components/PictureGrid.vue'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    PictureGrid,
    Logo
  }
})
export default class LandingPage extends AppComponent {}
</script>

<style lang="css" scoped>
.landing-content {
  min-height: calc(100vh - (92px + 64px));
}

.left-content {
  height: 100%;
}
</style>
