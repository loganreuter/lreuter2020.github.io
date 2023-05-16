import { createStore } from 'vuex'

export default createStore({
  state: {
    projectOpen: false,
  },
  getters: {
    projectStatus: state => state.projectOpen,
  },
  mutations: {
    updateProjectOpen(state, status){
      state.projectOpen = status;
    },
  },
  actions: {
  },
  modules: {
  }
})
