<template>
  <div class="medium-container py-16">
    <v-layout>
      <v-flex class="pr-16">
        <h1 class="text-h3 font-weight-regular">Drinks</h1>
        <h2 class="pt-16 accent--text text-h4">Hot</h2>
        <template v-for="item in hotDrinkItems.items">
          <v-layout justify-space-between pt-5 :key="item.name">
            <h3 class="text-h5">{{ item.name }}</h3>
            <h3 class="text-h5">{{ item.price }}</h3>
          </v-layout>
        </template>
        <h2 class="pt-16 accent--text text-h4">Cold</h2>
        <template v-for="item in coldDrinkItems.items">
          <v-layout justify-space-between pt-5 :key="item.name">
            <h3 class="text-h5">{{ item.name }}</h3>
            <h3 class="text-h5">{{ item.price }}</h3>
          </v-layout>
        </template>
      </v-flex>
      <v-flex class="pl-16">
        <h1 class="text-h3 font-weight-regular">Food</h1>
        <h2 class="pt-16 accent--text text-h4">Breakfast</h2>
        <template v-for="item in breakfastItems.items">
          <v-layout justify-space-between pt-5 :key="item.name">
            <h3 class="text-h5">{{ item.name }}</h3>
            <h3 class="text-h5">{{ item.price }}</h3>
          </v-layout>
        </template>

        <h2 class="pt-16 accent--text text-h4">Lunch</h2>
        <template v-for="item in lunchItems.items">
          <v-layout justify-space-between pt-5 :key="item.name">
            <h3 class="text-h5">{{ item.name }}</h3>
            <h3 class="text-h5">{{ item.price }}</h3>
          </v-layout>
        </template>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
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

<style scoped></style>
