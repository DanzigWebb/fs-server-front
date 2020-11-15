<template>

  <v-list-item-avatar>
    <v-icon :color="color" dark>
      {{file.icon}}
    </v-icon>
  </v-list-item-avatar>

</template>

<script>
export default {
  props: {
    file: Object,
    color: String
  }
}
</script>
