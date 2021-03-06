import { getFiles } from '@/service/files/getFiles'
import path from 'path'
import { setDefaultDir } from '@/store/shared/default-path'

const state = () => ({
  all:         [],
  view:        [],
  searchValue: '',
})

// getters
const getters = {
  searchField: state => state.searchValue,
  dirPath:     state => state.all?.path,
  currentDir:  state => state.all?.path?.split(path.sep).slice(-1)[0]
}
// actions
const updateFiles = (commit, files) => {
  commit('setFiles', files)
  commit('reset')
}

const actions = {
  // Получение файлов
  async getHomeFiles({commit}) {
    const files = await getFiles(setDefaultDir())
    updateFiles(commit, files)
  },

  async openDir({commit}, {dirPath}) {
    const files = await getFiles(dirPath)
    updateFiles(commit, files)
  },

  async goBack({commit, state}) {
    const dirPath = path.dirname(state.all.path)
    const files = await getFiles(dirPath)
    updateFiles(commit, files)
  },
  // Удаление файла
  async update({dispatch, state}) {
    const dirPath = state.all.path
    return dispatch('openDir', {dirPath})
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
