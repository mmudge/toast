<template>
  <div class="medium-container py-16">
    <v-layout>
      <v-flex class="pr-16">
        <h1 class="text-h3 font-weight-regular">Drinks</h1>

        <h2 class="pt-16 pb-2 text-h4 bottom-border">Hot</h2>
        <MenuItem
          class="pt-5"
          v-for="item in hotDrinkItems.items"
          :item="item"
          :key="item.name"
        />

        <h2 class="pt-16 pb-2 text-h4 bottom-border">Cold</h2>

        <MenuItem
          class="pt-5"
          v-for="item in coldDrinkItems.items"
          :item="item"
          :key="item.name"
        />
      </v-flex>
      <v-flex class="pl-16">
        <h1 class="text-h3 font-weight-regular">Food</h1>
        <v-layout
          class="pt-16 pb-2 bottom-border"
          justify-space-between
          align-baseline
        >
          <h2 class="text-h4">Breakfast</h2>
          <h2 class="text-subtitle-2 mediumGray--text">6:00 - 11:00</h2>
        </v-layout>

        <MenuItem
          class="pt-5"
          v-for="item in breakfastItems.items"
          :item="item"
          :key="item.name"
        />

        <v-layout
          class="pt-16 pb-2 bottom-border"
          justify-space-between
          align-baseline
        >
          <h2 class="text-h4">Lunch</h2>
          <h2 class="text-subtitle-2 mediumGray--text font-weight-bold">
            11:00 - 3:00
          </h2>
        </v-layout>

        <MenuItem
          class="pt-5"
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

@Component({
  components: {
    MenuItem
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
</style>
