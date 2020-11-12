<template>
  <v-app>
    <!--  Todo вынести в компонент <Header>  -->
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />
      </div>
    </v-app-bar>

    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>

import Home from '@/views/Home'

export default {
  name: 'App',

  components: {
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
