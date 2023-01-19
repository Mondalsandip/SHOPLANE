import React, { useEffect, useState } from 'react'
import classes from './ClothItem.module.css'
import { cartAction } from '../reducers/cart-reducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ClothItemForm from './ClothItemForm'
import { wishlistAction } from '../reducers/wishlist-reducer'
import WishlistHeart from '../Wishlist/WishlistHeart'
import Star from '../asset/Star'
// import useHttp from '../hooks/use-http'
// import ProductDetails from '../Pages/ProductDetails'
// import { Route, } from 'react-router-dom'

// import Tooltip from "@material-ui/core/Tooltip";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link,useLocation } from 'react-router-dom'




const ClothItem = (props) => {
  // console.log('props', props)
  const [quantity, setQuantity]=useState()
  const [quantitywishlist, setQuantityWishlist]=useState()
  const dispatch= useDispatch()
  const itemCart= useSelector(arg => arg.cart.value)
  //  const match=useMatch()
  //  console.log('match', match)
   const location= useLocation()
  //  console.log('location',location)
   const path=location.pathname
  //  console.log('path',path)
  // const totalAmount= useSelector(arg => arg.cart.totalAmount)
  // const totalQuantity= useSelector(arg => arg.cart.totalQuantity)
// console.log('match',match)
  const wishlistItem= useSelector(arg => arg.wishlist.valuAarr)
  // const {getData }=useHttp()
  // const sel=useSelector(arg => arg.wishlist.valuAarr)


    const  {id, title, price,image, rate:{ rate, count }}= props
    // const Item= useSelector(arg => arg.cart.value)

    // console.log('Item',Item)


    // const quantityItem= itemCart.find(item => item.id === id)
    // console.log('quantityItem',quantityItem)
// const redirectToDetailsPageHandler=()=>{
//      <Link to={`/all/${id}`}></Link>
  
// }

const addToCartHandler=()=>{
  dispatch(cartAction.addItem(props))


  
}
// const transformData=(data)=>{
//   console.log('data',data)
//   console.log('got data')
//   dispatch(cartAction.replace(data))
  

// }


// useEffect(()=>{
//   console.log('calling cloth')
//   getData({url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json'},transformData)
//   console.log('cloth')
// },[])

  // useEffect(()=>{
  //   console.log('calling cloth')
  //   getData({
  //     url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json',
  //     method: 'PUT',
  //     body: {itemCart,totalAmount,totalQuantity}
  //   })
  //   console.log('cloth')
  // },[itemCart,totalAmount,totalQuantity,getData])



  
  

const removeToCartHandler=()=>{
  dispatch(cartAction.removeItem(id))

}
const addToWishlistHandler=()=>{

  dispatch(wishlistAction.addItem(props))

}

const removeToWishlistHandler=()=>{
  dispatch(wishlistAction.removeItem(id))

}

useEffect(()=>{

  const getQuantityCart=()=>{
    const quantityItem= itemCart.find(item => item.id === id) || 1
    setQuantity(quantityItem && quantityItem.quantity)

  }
  getQuantityCart()

  const getQuantityWishlist=()=>{
    const quantityItem= wishlistItem.find(item => item.id === id) || 1
    setQuantityWishlist(quantityItem && quantityItem.quantity)

  }
  getQuantityWishlist()




},[itemCart,wishlistItem,id])

// const handlerSubmitDecrease =()=>{
//   dispatch(cartAction.removeItem(id))
//   // const quantityItem= itemCart.find(item => item.id === id)
//   // setQuantity(quantityItem &&  quantityItem.quantity)


// }
const renderTooltip = props => (
  <Tooltip {...props}>{title}</Tooltip>
);



  return (
    <div className={classes.cloth} >
      {/* <Tooltip title={title} placement='top'> */}

      <div className={classes['cart-content']} >
        
        <div className={classes['btn-wishlist']}> 

        <WishlistHeart onRemoveToWishlist={removeToWishlistHandler} onAddToWishlist={addToWishlistHandler}  id={id} quantitywishlist={quantitywishlist}   />

        </div>
        <Link to={`${path}/${id}`}>

        <div className={classes['img-cart']}>
        <OverlayTrigger placement="right-start" overlay={renderTooltip} >

          <img src={image} alt="sndjks" />
          </OverlayTrigger>

          </div>
          <div className={classes['title-box']}>
          <h3> <span className={classes.brand}>brand </span>{title}</h3>
          </div>
          <Star star={Math.round(rate)} count={count} /> 
           
            <div className={classes.price}><span className={classes.dollar}>$</span>{price}</div>
                        </Link>


            <ClothItemForm onRemoveToCart={removeToCartHandler} onAddToCart={addToCartHandler}  id={id} quantity={quantity}  />
           
            
            {/* <Link to={`${path}/${id}`}>details    </Link> */}

           

        
      
            </div>
            {/* </Tooltip> */}


    </div>
  )
}

export default ClothItem
