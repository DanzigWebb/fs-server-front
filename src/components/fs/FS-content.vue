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
            @onDeleteFile="$emit('onDeleteFile', $event)"
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
}
</script>
