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

    <FSPath />

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
import FSSearch from '@/components/fs/toolbar/FS-search'
import FSPath from '@/components/fs/toolbar/FS-path'

export default {
  components: {FSPath, FSSearch},

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
