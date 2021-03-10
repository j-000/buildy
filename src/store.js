import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    
  },
  state:{
    data: {
      navbar: {
        brandName: '',
        pages: [],
        maincolor: '',
        background: '',
        quickContact: ''
      },
      header: {
        topic: '',
        image: {
          src: '',
          alt: ''
        }
      },
      text:{
        msgH1: {
          text: '',
          fontSize: '',
          color: ''
        },
        msgP: {
          text: '',
          fontSize: '',
          color: ''
        },
        fontFamily: ''
      }
    }
  },
  mutations:{
    UPDATE_DATA(state, payload){
      state.data = {...state.data, ...payload};
      localStorage['store'] = JSON.stringify(state);
    },
    UPDATE_STATE_FROM_LOCALSTORAGE(state, newState){
      state.data = newState.data;
    }
  },
  actions:{
    update_data({commit}, payload){
      commit('UPDATE_DATA', payload);
    },
    update_state_from_localstorage({commit}, newState){
      commit('UPDATE_STATE_FROM_LOCALSTORAGE', newState);
    }
  },
  getters:{

  }
})


export default store;