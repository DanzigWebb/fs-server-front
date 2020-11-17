<template>
  <v-app>
    <APPHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import Home from '@/views/Home'
import APPHeader from '@/components/template/APP-header'

export default {
  name: 'App',

  components: {
    APPHeader,
    Home
  },

  data: () => ({
    //
  }),
}
</script>

<style>
html {
  background-color: #121212;
}
</style>
