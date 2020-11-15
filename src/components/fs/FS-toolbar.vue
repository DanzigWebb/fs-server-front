<template>
  <v-toolbar>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click="goBack()" v-bind="attrs" v-on="on">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>
      <span>Назад</span>
    </v-tooltip>

    <span>Файлы</span>

    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon @click="goHome()" v-bind="attrs" v-on="on">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </template>
      <span>Начальная папка</span>
    </v-tooltip>

    <FSSearch />

  </v-toolbar>
</template>

<script>
import FSSearch from '@/components/fs/FS-search'

export default {
  components: {FSSearch},

  methods: {
    goBack() {
      this.$store.dispatch('files/goBack')
    },
    goHome() {
      this.$store.dispatch('files/getHomeFiles')
    }
  }
}
</script>
