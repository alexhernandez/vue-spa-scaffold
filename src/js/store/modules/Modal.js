// MODAL MODULE
import * as modal from './../types/ModalTypes';

const state = {
  key: null,
  loading: false,
  visible: false,
};

const getters = {};

const actions = {
  toggleModal ({ commit }, payload) {
    commit(modal.TOGGLE_VISIBILITY, payload);
  }
}

const mutations = {
  [modal.TOGGLE_LOADING] (state){
    state.loading = !state.loading;
  },
  [modal.TOGGLE_VISIBILITY] (state, key = null){
    state.key = key;
    state.visible = !state.visible;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
