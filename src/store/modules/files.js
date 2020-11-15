import { getFiles } from '@/service/files/getFiles'
import server from '@/service/server'
import path from "path"

const state = () => ({
  all:         [],
  view:        [],
  searchValue: 'fdf',
})

// getters
const getters = {
  searchField: state => state.searchValue
}
// actions
const actions = {
  async getDefaultFiles({commit}) {
    const files = await getFiles(server.defaultPath)
    commit('setFiles', files)
    commit('reset')
  },

  async openDir({commit}, {dirPath}) {
    const files = await getFiles(dirPath)
    commit('setFiles', files)
    commit('reset')
  },

  async goBack({commit, state}) {
    const dirPath = path.dirname(state.all.path)
    const files = await getFiles(dirPath)
    commit('setFiles', files)
    commit('reset')
  },
  // Поиск файлов по названию
  searchByName({commit}, name) {
    commit('search', name)
  }
}

// mutations
const mutations = {
  setFiles(state, files) {
    state.all = files
  },

  search(state, name) {
    const list = state.all.list.filter(file => (
        file.name.toLowerCase().includes(name.toLowerCase())
    ))

    state.searchValue = name
    state.view = {...state.all, list}
  },

  reset(state) {
    state.searchValue = ''
    state.view = state.all
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
