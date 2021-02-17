<template>
  <div
    class="medium-container py-16"
    :class="`${mdAndUp ? 'medium-container py-16' : 'pt-8 pb-16'}`"
  >
    <h1
      :class="
        `${
          mdAndUp ? 'text-h2' : 'text-h4'
        } text-center font-weight-regular serif-font`
      "
    >
      Menu
    </h1>
    <p class="text-center text-h6 pt-2 mediumGray--text">
      Organic - Fresh - Local Sourced
    </p>
    <v-layout :class="`${mdAndUp ? 'pt-12' : 'pt-8'}`" wrap>
      <v-flex :class="`${mdAndUp ? 'pr-16' : 'px-5'}`">
        <h2 class="text-h6 font-weight-bold accent--text">Drinks</h2>

        <h3 class="pt-4 pb-1 text-h4 bottom-border serif-font">Hot</h3>
        <MenuItem
          class="pt-4"
          v-for="item in hotDrinkItems.items"
          :item="item"
          :key="item.name"
        />

        <h3 class="pt-16 pb-1 text-h4 bottom-border serif-font">Cold</h3>

        <MenuItem
          class="pt-4"
          v-for="item in coldDrinkItems.items"
          :item="item"
          :key="item.name"
        />
      </v-flex>
      <v-flex :class="`${mdAndUp ? 'pl-16' : 'px-5 pt-16'}`">
        <h2 class="text-h6 font-weight-bold accent--text">Food</h2>
        <v-layout
          class="pt-4 pb-1 bottom-border"
          justify-space-between
          align-baseline
        >
          <h3 class="text-h4 serif-font">Breakfast</h3>
          <h3 class="text-subtitle-2 mediumGray--text serif-font">
            6:00 - 11:00
          </h3>
        </v-layout>

        <MenuItem
          class="pt-4"
          v-for="item in breakfastItems.items"
          :item="item"
          :key="item.name"
        />

        <v-layout
          class="pt-16 pb-1 bottom-border"
          justify-space-between
          align-baseline
        >
          <h3 class="text-h4 serif-font">Lunch</h3>
          <h3 class="text-subtitle-2 mediumGray--text serif-font">
            11:00 - 3:00
          </h3>
        </v-layout>

        <MenuItem
          class="pt-4"
          v-for="item in lunchItems.items"
          :item="item"
          :key="item.name"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import MenuItem from '@/components/MenuItem.vue'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    MenuItem,
    Logo
  }
})
export default class Menu extends AppComponent {
  get hotDrinkItems() {
    return this.$store.getters.menuItems.find(
      (item: any) => item.type.toLowerCase() === 'hot drinks'
    )
  }

  get coldDrinkItems() {
    return this.$store.getters.menuItems.find(
      (item: any) => item.type.toLowerCase() === 'cold drinks'
    )
  }

  get breakfastItems() {
    return this.$store.getters.menuItems.find(
      (item: any) => item.type.toLowerCase() === 'breakfast'
    )
  }

  get lunchItems() {
    return this.$store.getters.menuItems.find(
      (item: any) => item.type.toLowerCase() === 'lunch'
    )
  }
}
</script>

<style lang="css" scoped>
.bottom-border {
  border-bottom: 2px solid #f6ae2d;
}

.serif-font {
  /* font-family: 'Merriweather', serif !important; */
  font-family: 'Bebas Neue', cursive !important;
}
</style>
