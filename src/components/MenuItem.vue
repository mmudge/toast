<template>
  <div>
    <v-layout class="text-h5" justify-space-between>
      <h3 class="text-h5">{{ item.name }}</h3>
      <h3 class="text-h5 font-weight-bold">{{ item.price }}</h3>
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
