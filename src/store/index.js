import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

import files from '@/store/modules/files'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    files
  },
  strict: debug,
})
