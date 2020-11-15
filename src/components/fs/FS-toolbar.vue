<template>
  <v-toolbar>
    <v-btn icon @click="goBack()">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <span>Файлы</span>

    <v-spacer />

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
    }
  }
}
</script>
