<template>
  <v-app>
    <APPHeader />
    <v-main>
      <router-view />
    </v-main>

    <APPSettings />
  </v-app>
</template>

<script>

import Home from '@/views/Home'
import APPHeader from '@/components/template/app-header'
import APPSettings from '@/components/template/settings/app-settings'

export default {
  name: 'App',

  components: {
    APPSettings,
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
