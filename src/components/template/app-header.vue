<template>
  <v-app-bar app color="primary" dark>
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

    <h2>{{ capitalize(currentDir) }}</h2>

    <v-spacer />
    <v-btn icon @click="openSettings()">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentDir: 'files/currentDir'
    })
  },

  methods: {
    openSettings() {
      this.$store.commit('settings/open')
    },
    capitalize(str) {
      return str ? str[0].toUpperCase() + str.slice(1) : ''
    }
  }
}
</script>
