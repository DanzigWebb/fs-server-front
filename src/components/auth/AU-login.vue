<template>
  <v-card
      class="mx-auto pa-3"
      max-width="400"
  >
    <v-toolbar-title class="title white--text text-center">
      Авторизация
    </v-toolbar-title>

    <v-card-text>
      <v-text-field
          v-model="login"
          prepend-icon="mdi-account-box"
          label="Введите имя">
      </v-text-field>
      <v-text-field
          v-model="password"
          prepend-icon="mdi-lock"
          label="Введите пароль">
      </v-text-field>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="primary" @click="$emit('onSubmit', {login, password})">Отправить</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  data: () => ({
    login: '',
    password: ''
  })
}
</script>
