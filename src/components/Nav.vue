<template>
  <div>
    <template v-if="smAndDown">
      <v-layout justify-space-between align-center class="px-5 pt-5">
        <v-btn
          color="accent"
          dark
          x-large
          class="mobile-hamburger"
          @click.stop="showNavDrawer = !showNavDrawer"
        >
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        <Logo :size="'md'" />
      </v-layout>

      <v-navigation-drawer
        v-model="showNavDrawer"
        class="backgroundGray"
        temporary
        fixed
      >
        <div class="py-16 text-center nav-drawer-inner">
          <Logo
            size="md"
            @clicked="$router.push({ name: 'landingPage' })"
            class="hover-cursor-pointer"
          />

          <div class="my-16" style="margin: auto 0;">
            <div v-for="item in navDropItems" :key="item.title" class="mb-3">
              <v-btn
                x-large
                @click.stop="routeTo(item.route)"
                text
                class="font-weight-bold"
                >{{ item.title }}</v-btn
              >
            </div>
          </div>

          <Social />
        </div>
      </v-navigation-drawer>
    </template>
    <v-app-bar
      v-if="mdAndUp"
      app
      color="backgroundGray"
      height="92"
      elevate-on-scroll
    >
      <v-layout align-center class="medium-container">
        <v-flex shrink>
          <Logo
            size="md"
            @clicked="$router.push({ name: 'landingPage' })"
            class="hover-cursor-pointer"
          />
        </v-flex>

        <v-flex grow>
          <v-layout justify-center class="nudge-right">
            <v-btn
              @click.stop="routeTo('menu')"
              color="darkText"
              text
              tile
              large
              class="font-weight-bold"
              >Menu</v-btn
            >
            <v-btn
              @click.stop="routeTo('landingPage')"
              color="darkText"
              text
              tile
              large
              class="mx-1 font-weight-bold"
              >About</v-btn
            >
            <v-btn
              @click.stop="routeTo('landingPage')"
              color="darkText"
              text
              tile
              large
              class="font-weight-bold"
              >Contact</v-btn
            >
          </v-layout>
        </v-flex>

        <v-flex shrink>
          <v-layout justify-end align-center>
            <v-btn icon class="mr-3" color="darkText">
              <v-icon small>fas fa-shopping-cart</v-icon>
            </v-btn>
            <v-btn
              @click.stop="routeTo('menu')"
              color="darkText"
              tile
              large
              class="font-weight-bold"
              dark
              >Order now
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
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
  navDropItems: { title: string; route: string }[] = [
    { title: 'Menu', route: 'menu' },
    { title: 'About us', route: 'landingPage' },
    { title: 'Contact', route: 'landingPage' },
    { title: 'Order', route: 'menu' }
  ]

  get showNavDrawer() {
    return this.$store.getters.showNavDrawer
  }

  set showNavDrawer(value: boolean) {
    this.$store.commit('setShowNavDrawer', value)
  }
}
</script>

<style lang="css" scoped>
/* .mobile-hamburger {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.mobile-logo {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1;
} */

.nav-drawer-inner {
  min-height: 100%;
}

.nudge-right {
  position: relative;
  left: 30px;
}
</style>
