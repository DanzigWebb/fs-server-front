<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">
        Подтверждение
      </v-card-title>
      <v-card-text>Удалить файл: <b>{{ file.name }}</b>?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">
          Отмена
        </v-btn>
        <v-btn color="primary" text @click="deleteFile()">
          Да
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import path from 'path'
import { deleteFile } from '@/service/files/deleteFile'

export default {

  data: () => ({
    dialog:   false,
    snackbar: true,
    timeout:  300000
  }),

  props: {
    file: Object
  },

  computed: mapState({
    filePath: state => state.files.all.path
  }),

  methods: {
    async deleteFile() {
      const pathToFile = path.resolve(this.filePath, this.file.name)
      await deleteFile(pathToFile)
      this.$store.dispatch('files/update')
      this.$emit('onDelete')
      this.dialog = false
    }
  }
}
</script>
