<template>
  <v-layout justify-center align-center>
    <template v-for="social in socialLinks">
      <v-btn small color="darkText" class="mr-1" :key="social.icon" text>
        <v-icon class="mr-1">{{ social.icon }}</v-icon>
      </v-btn>
    </template>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Social extends Vue {
  @Prop() color!: string

  socialLinks: any[] = [
    {
      text: 'Instgram',
      icon: 'fab fa-instagram'
    },
    {
      text: 'Facebook',
      icon: 'fab fa-facebook-f'
    },
    {
      text: 'Yelp',
      icon: 'fab fa-yelp'
    }
  ]
}
</script>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
}
</style>
