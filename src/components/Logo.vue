<template>
  <p id="logo" class="mb-0 darkText--text" :style="style">toast.</p>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class Logo extends AppComponent {
  @Prop() size!: string

  get style() {
    if (this.size === 'md') {
      return `font-size: 36px;`
    } else {
      return `font-size: 36px;`
    }
  }
}
</script>

<style>
#logo {
  font-family: 'DM Serif Display', serif;
}
</style>
