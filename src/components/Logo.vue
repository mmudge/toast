<template>
  <p id="logo" class="mb-0 darkText--text" :style="style" @click="onClicked">
    toast.
  </p>
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

  onClicked() {
    this.$emit('clicked')
  }
}
</script>

<style>
#logo {
  font-family: 'DM Serif Display', serif;
}
</style>
