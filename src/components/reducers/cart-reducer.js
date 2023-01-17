import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name:'cart',
    initialState: 
        {
            value :[] ,
            totalQuantity: 0,
            totalAmount: 0,
            changed:false
        },
    reducers:{
        replacecart(state,action){
            // console.log(action.payload.value)
            state.totalQuantity=action.payload.totalQuantity
            state.value=action.payload.value
            state.totalAmount=action.payload.totalAmount

        },
        addItem(state,action){
            // console.log('action is being performed')
            // state.value.push(action.payload)
            // const newItem = action.payload
            // const existingItem = state.items.find(item => item.id === newItem.id)

            const newItem =action.payload


            const existingItem=state.value.find(item => item.id  === newItem.id)
            state.totalQuantity ++;
            state.changed=true

            if(!existingItem){
                state.totalAmount = state.totalAmount + newItem.price
                state.value.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price , title: newItem.title, image: newItem.image,rating: newItem.rate}) 

            }else{
                existingItem.quantity ++;
                existingItem.totalPrice += existingItem.price
                state.totalAmount = state.totalAmount + existingItem.price

            }


        },
        removeItem(state,action){
            const id=action.payload
            state.totalQuantity --
            const existingItem =state.value.find( item => item.id === id)
            state.totalAmount = state.totalAmount - existingItem.price
            state.changed=true

            if(existingItem.quantity === 1){
                state.value = state.value.filter(item => item.id !== id   )

            }else{
                existingItem.quantity --;
                existingItem.totalPrice -=existingItem.price
            }


        }
        
    }
})



export default cartSlice.reducer

export const cartAction=cartSlice.actions