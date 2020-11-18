<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>Домашняя папка</v-list-item-title>
      <v-list-item-subtitle>Переход на домашнюю папку при нажатии на иконку</v-list-item-subtitle>
      <v-text-field
          :value="homeDir"
          @input="updateHomeDir"
          label="Домашняя папка"
      ></v-text-field>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      homeDir: state => state.settings.homeDir
    })
  },
  methods: {
    updateHomeDir(value) {
      console.log(value)
      this.$store.commit('settings/updateHomeDir', value)
    }
  }
}
</script>
