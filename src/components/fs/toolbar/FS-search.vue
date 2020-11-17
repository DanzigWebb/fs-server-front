<template>
  <div class="search">
    <v-text-field
        label="Поиск..."
        :value="search"
        @input="setNewValue"
        hide-details="auto">
      <v-icon slot="prepend">mdi-folder-search-outline</v-icon>
    </v-text-field>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      nameFromStore: 'files/searchField'
    }),
    search: {
      get() {
        return this.nameFromStore
      },
      set(val) {
        return val
      }
    }
  },

  methods: {
    setNewValue(val) {
      this.$store.dispatch('files/searchByName', val)
    }
  }
}
</script>
