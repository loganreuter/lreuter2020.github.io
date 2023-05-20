import { createStore } from 'vuex'
import info from "../data/info.json"

export default createStore({
  state: {
    projectOpen: false,
    currentSection: "home",
    info: {}
  },
  getters: {
    projectStatus: state => state.projectOpen,
    info: state => state.info,
    section: state => state.currentSection
  },
  mutations: {
    updateProjectOpen(state, status){
      state.projectOpen = status;
    },
    setInfo(state, info){
      state.info = info
    },
    updateSection(state, section){
      state.currentSection = section
    }
  },
  actions: {
    loadInfo({ commit }){
      commit("setInfo", info);
    }
  },
  modules: {
  }
})
