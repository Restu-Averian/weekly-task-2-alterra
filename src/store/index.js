import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import summary from './summary'

Vue.use(Vuex)
const persistedstate = createPersistedState({
  key:'summary'
})
export default new Vuex.Store({
 plugins:[persistedstate],
  modules: {
    summary:{
      namespaced:true,
      ...summary
    },
   
  }
})
