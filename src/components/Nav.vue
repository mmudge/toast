<template>
  <div>
    <template v-if="smAndDown">
      <v-btn
        color="white2"
        x-large
        class="mobile-hamburger"
        @click.stop="showDrawer = !showDrawer"
      >
        <v-icon color="darkText" @click="drawer = !drawer">fas fa-bars</v-icon>
      </v-btn>

      <v-navigation-drawer
        v-model="drawer"
        class="backgroundGray mobile-hamburger"
        temporary
        fixed
        style="left: 0;"
      >
        <v-layout column class="text-center pt-16">
          <Logo
            size="lg"
            @clicked="$router.push({ name: 'landingPage' })"
            class="hover-cursor-pointer pb-10"
          />
          <template v-for="(item, index) in navDropItems">
            <v-btn
              x-large
              :key="index"
              @click.stop="routeTo(item.route)"
              text
              class="font-weight-bold mb-3"
              >{{ item.title }}</v-btn
            >
          </template>

          <Social class="pt-16" />
        </v-layout>
      </v-navigation-drawer>
    </template>
    <v-app-bar v-if="mdAndUp" app color="backgroundGray" height="92">
      <v-layout align-center class="medium-container">
        <v-flex shrink>
          <Logo
            size="md"
            @clicked="$router.push({ name: 'landingPage' })"
            class="hover-cursor-pointer"
          />
        </v-flex>

        <v-flex grow>
          <v-layout justify-center>
            <v-btn
              @click.stop="routeTo('menu')"
              color="darkText"
              text
              tile
              class="mr-1 font-weight-bold"
              >Menu</v-btn
            >
            <v-btn
              @click.stop="routeTo('about')"
              color="darkText"
              text
              tile
              class="mr-1 font-weight-bold"
              >About</v-btn
            >
            <v-btn
              @click.stop="routeTo('contact')"
              color="darkText"
              text
              tile
              class="font-weight-bold"
              >Contact</v-btn
            >
          </v-layout>
        </v-flex>

        <v-flex shrink>
          <v-layout justify-end align-center>
            <v-btn icon class="mr-5" color="darkText" dark>
              <v-icon>fas fa-shopping-cart</v-icon>
            </v-btn>
            <v-btn
              @click.stop="routeTo('landingPage')"
              color="darkText"
              tile
              class="font-weight-bold"
              dark
              >Order now</v-btn
            >
          </v-layout>
        </v-flex>
      </v-layout>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Logo from '@/components/Logo.vue'
import Social from '@/components/Social.vue'

@Component({
  components: {
    Logo,
    Social
  }
})
export default class Nav extends AppComponent {
  drawer = false
  navDropItems: { title: string; route: string }[] = [
    { title: 'Menu', route: 'menu' },
    { title: 'About us', route: 'about' },
    { title: 'Contact', route: 'contact' },
    { title: 'Location', route: 'contact' }
  ]

  get appName() {
    return 'toast'
  }
}
</script>

<style scoped>
.hover-cursor-pointer:hover {
  cursor: pointer;
}

.mobile-hamburger {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1;
}
</style>
