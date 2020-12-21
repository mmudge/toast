<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="backgroundGray"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in navDropItems">
          <v-list-item :key="index">
            <v-list-item-content class="darkText--text">{{
              item.title
            }}</v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="backgroundGray" dark>
      <v-icon
        class="hidden-md-and-up"
        color="darkText"
        @click="drawer = !drawer"
        >fas fa-bars</v-icon
      >
      <v-spacer class="hidden-md-and-up"></v-spacer>

      <Logo size="md" />

      <v-spacer></v-spacer>

      <v-btn
        @click.stop="routeTo('menu')"
        color="darkText"
        text
        tile
        class="hidden-sm-and-down mr-1"
        >Menu</v-btn
      >
      <v-btn
        @click.stop="routeTo('about')"
        color="darkText"
        text
        tile
        class="hidden-sm-and-down mr-1"
        >About us</v-btn
      >
      <v-btn
        @click.stop="routeTo('landingPage')"
        color="darkText"
        text
        tile
        class="hidden-sm-and-down mr-1"
        >Contact</v-btn
      >
      <v-btn
        @click.stop="routeTo('landingPage')"
        color="darkText"
        tile
        class="hidden-sm-and-down"
        >Order now</v-btn
      >
    </v-app-bar>
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class Nav extends AppComponent {
  drawer = false
  navDropItems: { title: string }[] = [
    { title: 'Menu' },
    { title: 'About us' },
    { title: 'Contact us' },
    { title: 'Location' }
  ]

  get appName() {
    return 'toast'
  }
}
</script>

<style scoped></style>
