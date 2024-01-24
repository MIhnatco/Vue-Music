<script>
import AppHeader from './components/AppHeader.vue'
import Auth from './components/Auth.vue'
import Player from './components/Player.vue'

import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'

import { auth } from './includes/firebase'

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    Player
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


  <router-view></router-view>

  <!-- Player -->
  <Player />
 
  <!-- Auth Modal -->
  <Auth />
</template>
