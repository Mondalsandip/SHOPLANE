import { Routes,Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import All from './components/Pages/All';
import Eletronics from './components/Pages/Eletronics';
import Jewelery from './components/Pages/Jewelery';
import MenCloth from './components/Pages/MenCloth';
import WomenCloth from './components/Pages/WomenCloth';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import Login  from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './components/reducers/login-signup';
import { useEffect } from 'react';
import useHttp from './components/hooks/use-http';
import { cartAction } from './components/reducers/cart-reducer'
import ProductDetails from './components/Pages/ProductDetails';
import NotFound from './components/Pages/NotFound';


let firstTime=true

function App() {
const {getData} =useHttp()
const dispatch=useDispatch()
const cartItem= useSelector(arg => arg.cart)
const changedCartData=  useSelector(arg => arg.cart.changed)
const changedLoginData=  useSelector(arg => arg.login.changedUser)
const changedCurrentUser=  useSelector(arg => arg.login.changedCurrentUser)
const allUser= useSelector(arg => arg.login.value)
const currentUser= useSelector(arg => arg.login.currentUser)
// console.log('all user',allUser )
// console.log('current user',currentUser)



///This is for cart


useEffect(()=>{
  const transformTask=(data)=>{
    // console.log(data)
    dispatch(cartAction.replacecart({
      value : data.value ||  [] ,
      totalQuantity: data.totalQuantity ,
      totalAmount: data.totalAmount
    }))
  
  }

       getData({url: 'https://shoplane-3ed93-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json'}, transformTask)
  },[getData,dispatch])


  useEffect(()=>{
    if(firstTime){
      firstTime=false
      return
    }
    if(changedCartData){
      getData({
        url: 'https://shoplane-3ed93-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json',
        method: 'PUT',
        body: cartItem
      })
  }

},[cartItem,getData,changedCartData])


//This is for login, signup
useEffect(()=>{
  const transformTask=(data)=>{
    // console.log('data',data)
    dispatch(loginAction.replaceUser(data))
  
  }

       getData({url: 'https://shoplane-3ed93-default-rtdb.asia-southeast1.firebasedatabase.app/login.json'}, transformTask)
  },[getData,dispatch])


  useEffect(()=>{
    if(firstTime){
      firstTime=false
      return
    }
    if(changedLoginData){
      // console.log('data changed')
      getData({
        url: 'https://shoplane-3ed93-default-rtdb.asia-southeast1.firebasedatabase.app/login.json',
        method: 'PUT',
        body: allUser
      })
  }

},[allUser,getData,changedLoginData])


// ///This is for current user
useEffect(()=>{
  const transformTask=(data)=>{
    // console.log('data',data)
    dispatch(loginAction.replaceCurrentUser(data))
  
  }

       getData({url: 'https://shoplane-3ed93-default-rtdb.asia-southeast1.firebasedatabase.app/currentuser.json'}, transformTask)
  },[getData,dispatch])


  useEffect(()=>{
    if(firstTime){
      firstTime=false
      return
    }
    if(changedCurrentUser){
      getData({
        url: 'https://shoplane-3ed93-default-rtdb.asia-southeast1.firebasedatabase.app/currentuser.json',
        method: 'PUT',
        body: currentUser
      })
  }

},[currentUser,getData,changedCurrentUser])




  return (
    <>  
            {/* {isLoading  && <div style={{margin: '200px   800px'}}> <Spinnercomp/>   </div>   }   */}

     <Header/>

     <Routes>

    <Route path='/' element={<Navigate to='/all'/>} />
    <Route path='/all'  element={<All/>} />
    <Route path='/all/:productId' element={<ProductDetails/>} />
    <Route path='/eletronics'  element={<Eletronics/>} />
    <Route path='/eletronics/:productId'  element={<ProductDetails/>} />
    <Route path='/jewelery' element={<Jewelery/>} />
    <Route path='/jewelery/:productId' element={<ProductDetails/>} />
    <Route path='/mencloth' element={<MenCloth/>} /> 
    <Route path='/mencloth/:productId' element={<ProductDetails/>} /> 
    <Route path='/womencloth'  element={<WomenCloth/>} />
    <Route path='/womencloth/:productId'  element={<ProductDetails/>} />
    <Route path='/login'  element={<Login/>} />
    <Route path='/signup'  element={<Signup/>} />
    <Route path='/cart'  element={<Cart/>} />
    <Route path='/favourites'  element={<WomenCloth/>} />
    <Route path='/wishlist'  element={<Wishlist/>} />
    <Route path='*'  element={<NotFound/>} ></Route>
    </Routes>
    </>
  );
}

export default App;
