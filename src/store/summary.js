import axios from "axios"

const state = ()=>({
    summary:[],
    idSection:1
})

const mutations={
    fetchSummary(state,params){
        state.summary = params
    },
    fetchSection(state,params){
        state.idSection = params
    }
}

const actions = {
    fetchSummary(store){
        axios.get(`https://fake-summary-api.herokuapp.com/summary/${store.state.idSection}`)
        .then(
            (response)=>{
                console.log(response)
                store.commit('fetchSummary',response)
            }
        ).catch(
            (error)=>{
                console.log('Error : '+error)
            }
        )
    },
    updateSummary(store,params){
        store.commit('fetchSection',params),
        store.dispatch('fetchSummary')
    }
}


export default {
    state,mutations,actions
}