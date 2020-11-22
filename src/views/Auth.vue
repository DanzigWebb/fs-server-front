<template>
  <v-container>
    <div class="auth__wrapper">
      <AULogin class="auth__card" @onSubmit="onLogin($event)" />
    </div>
  </v-container>
</template>

<style lang="scss">
.auth {
  &__wrapper {
    height: calc(100vh - (64px * 2));
    display: grid;
    align-items: center;
  }
  &__card {
    width: 100%;
  }
}
</style>

<script>
import { loginUser } from '@/service/auth/auth'

import AULogin from '@/components/auth/AU-login'

export default {
  components: {
    AULogin
  },

  methods: {
    async onLogin({login, password}) {
      const loginData = await loginUser(login, password)
      localStorage.setItem('userLogin', loginData.login)
      localStorage.setItem('userRole', loginData.role)
      localStorage.setItem('token', loginData.token)
    }
  }
}
</script>
