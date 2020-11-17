<template>
  <v-container>
    <FSContent
        max-width="1100"
        accent-color="primary"

        v-if="files$"
        :files="files$.list"
        @onOpenDir="openFolder($event)"
        @onDeleteFile="deleteFile($event)"
    />
  </v-container>
</template>

<script>

// Components
import FSContent from '@/components/fs/FS-content'

import { mapState } from 'vuex'
import path from 'path'

export default {
  name: 'Home',

  components: {
    FSContent
  },

  computed: mapState({
    files$: state => state.files.view,
  }),

  created() {
    this.$store.dispatch('files/getHomeFiles')
  },

  methods: {
    openFolder(dirName) {
      const dirPath = path.resolve(this.files$.path, dirName)
      this.$store.dispatch('files/openDir', {dirPath})
    },
    deleteFile(fileName) {
      alert(`Удалить файл: ${fileName}?`)
    }
  }
}
</script>
