<template>
  <v-list-item @click.prevent="onOpenDir()">

    <slot></slot>

    <v-list-item-content>

      <v-list-item-title>
        {{ file.name }}
      </v-list-item-title>

      <v-list-item-subtitle v-if="file.type !== 'folder'">
        {{ file.size / 1000 }}kb
      </v-list-item-subtitle>

    </v-list-item-content>

    <v-list-item-action>
      <v-btn v-if="!isFolder" icon @click.prevent="onDeleteFile()">
        <FSDialogDelete :file="file"></FSDialogDelete>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import FSIcon from '@/components/fs/FS-icon'
import FSDialogDelete from '@/components/fs/FS-dialog-delete'

export default {
  components: {
    FSDialogDelete,
    FSIcon
  },

  props: {
    file:  Object,
    color: String
  },

  data: () => ({
    isFolder: false
  }),

  created() {
    this.isFolder = this.file.type === 'folder'
  },

  methods: {
    onOpenDir() {
      if (this.isFolder) {
        this.$emit('onOpenDir', this.file.name)
      }
    },
    onDeleteFile() {
      this.$emit('onDeleteFile', this.file.name)
    },
  }
}
</script>
