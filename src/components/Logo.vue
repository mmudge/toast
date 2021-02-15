<template>
  <div style="text-align: center;">
    <v-layout class="logo-main" align-baseline>
      <v-icon color="darkText" class="mr-3">fas fa-coffee</v-icon>
      <p
        id="logo"
        class="mb-0 darkText--text font-weight-bold"
        :style="style"
        @click="onClicked"
      >
        Toast
      </p>
    </v-layout>
    <p class="mb-0 logo-secondary mediumGray--text font-weight-medium">
      Fresh Brewed Coffee
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class Logo extends AppComponent {
  @Prop() size!: string

  get style() {
    if (this.size === 'md') {
      return `font-size: 28px;`
    } else if (this.size === 'lg') {
      return `font-size: 40px;`
    } else {
      return `font-size: 28px;`
    }
  }

  onClicked() {
    this.$emit('clicked')
  }
}
</script>

<style>
#logo {
  /* font-family: 'DM Serif Display', serif; */
}

.logo-main {
  line-height: 0.8;
}

.logo-secondary {
  font-size: 10px;
}
</style>
