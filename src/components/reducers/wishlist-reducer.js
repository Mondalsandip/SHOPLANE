import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice=createSlice({
    name:'wishlist',
    initialState: 
        {
            valuAarr :[] ,
        },
    reducers:{
        addItem(state,action){
            // console.log('action is being performed')
            // state.value.push(action.payload)
            // const newItem = action.payload
            // const existingItem = state.items.find(item => item.id === newItem.id)


            const newItem =action.payload

            // state.value.push([...state.value, newItem])
            state.valuAarr.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price , title: newItem.title, image: newItem.image,rating: newItem.rate}) 




            // const existingItem=state.value.find(item => item.id  === newItem.id)
            // state.totalQuantity ++;


            // if(!existingItem){
            //     state.totalAmount = state.totalAmount + newItem.price
            //     state.value.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price , title: newItem.title, image: newItem.image}) 

            // }else{
            //     existingItem.quantity ++;
            //     existingItem.totalPrice += existingItem.price
            //     state.totalAmount = state.totalAmount + existingItem.price

            // }


        },
        removeItem(state,action){
            const id=action.payload
            // state.totalQuantity --
            // const existingItem =state.value.find( item => item.id === id)
            // state.totalAmount = state.totalAmount - existingItem.price

            state.valuAarr = state.valuAarr.filter(item => item.id !== id   )


            // if(existingItem.quantity === 1){
            //     state.value = state.value.filter(item => item.id !== id   )

            // }{
            //     existingItem.quantity --;
            //     existingItem.totalPrice -=existingItem.price
            // }


        }
        
    }
})

export default wishlistSlice.reducer

export const wishlistAction=wishlistSlice.actions