import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart-reducer'
import  wishlistReducer  from './reducers/wishlist-reducer'
import loginReducer from './reducers/login-signup'
 
const store= configureStore({
    reducer:{ cart:  cartReducer , wishlist: wishlistReducer, login: loginReducer}
})

export default store