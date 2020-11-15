<template>
  <v-container>
    <FSContent
        max-width="900"
        accent-color="primary"

        :files="files"
        @onBack="back()"
        @onOpenDir="openFolder($event)"
        @onDeleteFile="deleteFile($event)"
    />
  </v-container>
</template>

<script>

import FSContent from '@/components/fs/FS-content'
import { getFiles } from '@/service/files/getFiles'
import path from 'path'
import server from '@/service/server'

export default {
  name:       'Home',
  components: {FSContent},

  data: () => ({
    files: []
  }),

  created() {
    this.getFiles(server.defaultPath)
  },

  methods: {
    async getFiles(dirPath) {
      const files = await getFiles(dirPath)
      this.files = files.list
      this.currentPath = files.path
    },
    async openFolder(dirName) {
      const newPath = this.currentPath + path.sep + dirName
      await this.getFiles(newPath)
    },
    async deleteFile(fileName) {
      alert(`Удалить файл: ${fileName}?`)
    },

    async back() {
      const backPath = path.dirname(this.currentPath)
      await this.getFiles(backPath)
    }
  }
}
</script>
