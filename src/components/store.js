import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart-reducer'
import  wishlistReducer  from './reducers/wishlist-reducer'
 
const store= configureStore({
    reducer:{ cart:  cartReducer , wishlist: wishlistReducer}
})

export default store