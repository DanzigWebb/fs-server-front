<template>
  <div class="chunks">
    <template v-for="(chunk, i) in chunks">
      <v-btn
          class="chunks__item"
          v-if="chunk"
          text x-small
          :key="chunk"
          :disabled="i === chunks.length - 1"
          @click="openDir(i + 1)"
      >
        <v-icon x-small color="primary">mdi-folder</v-icon>
        <span>{{ sliceName(chunk) }}</span>
      </v-btn>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import path from 'path'

export default {

  computed: {
    ...mapGetters({
      dirPath: 'files/dirPath'
    }),
    chunks: {
      get() {
        return this.dirPath && this.dirPath.split(path.sep)
      }
    }
  },
  methods:  {
    openDir(index) {
      const dirPath = this.chunks.slice(0, index).join(path.sep)
      this.$store.dispatch('files/openDir', {dirPath})
    },
    sliceName(name) {
      const maxLength = 12
      if (name.length > maxLength) {
        return name.slice(0, maxLength - 2) + '...'
      } else {
        return name
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chunks {
  padding: 0 1rem;

  &__item {
    text-transform: lowercase;
    letter-spacing: 0;
    font-size: 12px;
    padding: 0 4px !important;

    &:not(:last-child) {
      &:after {
        content: '/';
        padding-left: 4px;
      }
    }
  }
}
</style>
