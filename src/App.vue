<script>
import AppHeader from './components/AppHeader.vue'
import Auth from './components/Auth.vue'
import AppPlayer from './components/Player.vue'

import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'

import { auth } from './includes/firebase'

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    //keeps infor about current user logged in
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<template>
  <!-- Header -->
  <AppHeader />

  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>

  <!-- Player -->
  <AppPlayer />

  <!-- Auth Modal -->
  <Auth />
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
