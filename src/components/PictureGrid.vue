<template>
  <div class="pic-grid-wrapper">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class PictureGrid extends Vue {}
</script>

<style lang="scss" scoped>
.pic-grid-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.one {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image: url('../assets/hand-pour.jpg');
}

.two {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  background-image: url('../assets/coffee-mess.jpg');
}

.three {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image: url('../assets/pour-overs.jpg');
}

.four {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image: url('../assets/eggs.jpg');
}

.pic-grid-wrapper > * {
  background-color: gray;
  margin: 3px;
  border-radius: 1px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
