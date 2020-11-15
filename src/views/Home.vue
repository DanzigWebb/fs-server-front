<template>
  <v-container>
    <FSContent
        max-width="900"
        accent-color="primary"

        :files="files$.list"
        @onBack="back()"
        @onOpenDir="openFolder($event)"
        @onDeleteFile="deleteFile($event)"
    />
  </v-container>
</template>

<script>

// Components
import FSContent from '@/components/fs/FS-content'
import FSSearch from '@/components/fs/FS-search'

import path from 'path'
import { mapState } from 'vuex'

export default {
  name: 'Home',

  components: {
    FSSearch,
    FSContent
  },

  computed: mapState({
    files$: state => state.files.view,
  }),

  created() {
    this.$store.dispatch('files/getDefaultFiles')
  },

  methods: {
    openFolder(dirName) {
      const dirPath = path.resolve(this.files$.path, dirName)
      this.$store.dispatch('files/openDir', {dirPath})
    },
    back() {
      const dirPath = path.dirname(this.files$.path)
      this.$store.dispatch('files/openDir', {dirPath})
    },
    deleteFile(fileName) {
      alert(`Удалить файл: ${fileName}?`)
    }
  }
}
</script>
