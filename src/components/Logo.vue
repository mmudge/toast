<template>
  <p id="logo" class="mb-0 darkText--text">toast.</p>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class Logo extends AppComponent {}
</script>

<style>
#logo {
  font-family: 'Noto Serif', serif;
}
</style>
