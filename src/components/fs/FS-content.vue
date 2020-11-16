<template>
  <v-card
      class="mx-auto"
      :max-width="maxWidth"
      tile
  >
    <!-- Toolbar -->
    <FSToolbar />

    <!-- Files list -->
    <v-list dense v-if="files">
      <v-list-item-group v-if="files.length">
        <FSItem
            v-for="file in files"
            :color="accentColor"
            :file="file"
            :key="file.name + file.lastModified"

            @onOpenDir="$emit('onOpenDir', $event)"
            @onDeleteFile="snackbar = true"
        >
          <FSIcon :file="file" :color="accentColor" />
        </FSItem>
      </v-list-item-group>

      <v-list-item v-else>
        <v-list-item-title>
          Файлов не найдено...
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-snackbar v-model="snackbar" timeout="3000">
      <span>Файл удален!</span>

      <template v-slot:action="{ attrs }">
        <v-btn :color="accentColor" icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

    </v-snackbar>

  </v-card>
</template>

<script>

import FSItem from '@/components/fs/FS-item'
import FSIcon from '@/components/fs/FS-icon'
import FSSearch from '@/components/fs/FS-search'
import FSToolbar from '@/components/fs/FS-toolbar'

export default {
  components: {
    FSToolbar,
    FSSearch,
    FSIcon,
    FSItem
  },

  props: {
    files:       Array,
    maxWidth:    String,
    accentColor: String
  },

  data: () => ({
    snackbar: false,
  })
}
</script>
