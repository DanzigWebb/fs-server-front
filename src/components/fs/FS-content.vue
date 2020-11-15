<template>
  <v-card
      class="mx-auto"
      :max-width="maxWidth"
      tile
  >

    <v-list dense>

      <v-subheader>
        <v-btn icon @click="$emit('onBack')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span>Файлы</span>
      </v-subheader>

      <v-list-item-group>
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
    </v-list>

  </v-card>
</template>

<script>

import FSItem from '@/components/fs/FS-item'
import FSIcon from '@/components/fs/FS-icon'

export default {
  components: {
    FSIcon,
    FSItem
  },

  props: {
    files:       Array,
    maxWidth:    String,
    accentColor: String
  },

  data: () => ({
    currentPath: ''
  }),
}
</script>
