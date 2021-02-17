<template>
  <div>
    <v-layout class="text-h6" justify-space-between>
      <h3 class="font-weight-regular">{{ item.name }}</h3>
      <h3 class="font-weight-bold">{{ item.price }}</h3>
    </v-layout>
    <p class="text-body-1 mediumGray--text">{{ item.text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class MenuItem extends AppComponent {
  @Prop() item!: any
}
</script>

<style></style>
