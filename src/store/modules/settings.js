import { homeDirTrigger, setDefaultDir } from '@/store/shared/default-path'

const state = () => ({
  isShow:  false,
  homeDir: setDefaultDir()
})

// getters
const getters = {}
// actions
const actions = {
  open({commit}) {
    commit('open')
  },
  close({commit}) {
    commit('close')
  }
}

// mutations
const mutations = {
  open(state) {
    state.isShow = true
  },
  close(state) {
    state.isShow = false
  },
  toggle(state) {
    state.isShow = !state.isShow
  },
  // folders settings
  updateHomeDir(state, dirPath) {
    localStorage.setItem(homeDirTrigger, dirPath)
    state.homeDir = dirPath
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
