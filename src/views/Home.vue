<template>
  <v-container>

    <!-- Todo перенести в отдельный компнент <FileCard> -->
    <v-card
        class="mx-auto"
        max-width="600"
        tile
    >
      <!-- Todo перенести в отдельный компнент <FileItem> -->
      <v-list dense>
        <v-subheader>
          <v-btn icon @click="back()">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <span>Файлы</span>
        </v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(file, i) in files" :key="i" @click="openFolder(file.name)">

            <!-- Todo перенести в отдельный компнент <FileIcon> -->
            <v-list-item-avatar>
              <v-icon class="grey lighten-1" dark>
                mdi-folder
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ file.name }} {{file.size / 1000}}kb</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <!-- Todo добавить метод удаления onDelete(file.name)-->
              <v-btn icon>
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

import { getFiles } from '@/service/getFiles'
import path from 'path'
import server from '@/service/server'

export default {
  name: 'Home',

  data: () => ({
    files: [],
    currentPath: ''
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
    async back() {
      const backPath = path.dirname(this.currentPath)
      await this.getFiles(backPath)
    }
  }
}
</script>
