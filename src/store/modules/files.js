import { getFiles } from '@/service/files/getFiles'
import server from '@/service/server'

const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  async getDefaultFiles({commit}) {
    const files = await getFiles(server.defaultPath)
    commit('setFiles', files)
  },
  async openDir({commit}, arg) {
    const files = await getFiles(arg.dirPath)
    commit('setFiles', files)
  }
}

// mutations
const mutations = {
  setFiles(state, files) {
    state.all = files
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
