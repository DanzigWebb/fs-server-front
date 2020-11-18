<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        fullscreen
        persistent
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="hideSettings()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="hideSettings()">
              Закрыть
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Настройки</v-subheader>

          <AppSettingsHome />

        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Другие</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Доп папки</v-list-item-title>
              <v-list-item-subtitle>Быстрый переход по сохраненным папкам</v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import AppSettingsHome from '@/components/template/settings/app-settings-home'

export default {
  components: {AppSettingsHome},
  computed: {
    ...mapState({
      dialog: state => state.settings.isShow,
    })
  },
  methods: {
    hideSettings() {
      this.$store.commit('settings/close')
    },
  }
}
</script>
