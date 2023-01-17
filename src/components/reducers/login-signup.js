import { createSlice } from "@reduxjs/toolkit";


const loginSlice= createSlice({
    name:'login',
    initialState:{
        value:[],
        currentUser:{name:'Login or signup'},
        changedUser:false,
        changedCurrentUser:false


    },
    reducers:{
        addCurrentUser(state,action){
            state.currentUser=action.payload
            state.changedCurrentUser=true

        },
        replaceCurrentUser(state,action){
            // console.log('indide reducer', action.payload.currentUser)
            state.currentUser=action.payload

        },

        replaceUser(state,action){
            state.value=action.payload

        },
        addUser(state,action){
            //hjfsjr
            // console.log('value',  action.payload)
            state.value.push(action.payload)
            state.changedUser=true


        }
    }
})

export default loginSlice.reducer
export const loginAction=loginSlice.actions


