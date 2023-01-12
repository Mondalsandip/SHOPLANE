import React, { useEffect, useState } from 'react'
import classes from './ClothItem.module.css'
import { cartAction } from '../reducers/cart-reducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ClothItemForm from './ClothItemForm'
import { wishlistAction } from '../reducers/wishlist-reducer'
import Button from '../Wishlist/Button'
import Star from '../asset/Star'
import  {Tooltip}   from '@material-ui/core'


const ClothItem = (props) => {
  const [quantity, setQuantity]=useState()
  const [quantitywishlist, setQuantityWishlist]=useState()
  const dispatch= useDispatch()
  const itemCart= useSelector(arg => arg.cart.value)
  const wishlistItem= useSelector(arg => arg.wishlist.valuAarr)
  // const sel=useSelector(arg => arg.wishlist.valuAarr)


    const  {id, title, price,image, rate:{ rate:rate, count: count }}= props
    // const Item= useSelector(arg => arg.cart.value)

    // console.log('Item',Item)


    // const quantityItem= itemCart.find(item => item.id === id)
    // console.log('quantityItem',quantityItem)


const addToCartHandler=()=>{
  dispatch(cartAction.addItem(props))

  
  
}
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




},[itemCart,wishlistItem])

// const handlerSubmitDecrease =()=>{
//   dispatch(cartAction.removeItem(id))
//   // const quantityItem= itemCart.find(item => item.id === id)
//   // setQuantity(quantityItem &&  quantityItem.quantity)


// }



  return (
    <div className={classes.cloth}>
      <Tooltip title={title} placement='top'>
      <div className={classes['cart-content']} >
        
        <div className={classes['btn-wishlist']}> 

        <Button onRemoveToWishlist={removeToWishlistHandler} onAddToWishlist={addToWishlistHandler}  id={id} quantitywishlist={quantitywishlist}   />

        </div>
        <div className={classes['img-cart']}>
          <img src={image} alt="sndjks" />
          </div>
          <div className={classes['title-box']}>
          <h3> <span className={classes.brand}>brand</span>{title}</h3>
          </div>
          <Star star={Math.round(rate)} count={count} /> 
           
            <div className={classes.price}><span className={classes.dollar}>$</span>{price}</div>
            

            <ClothItemForm onRemoveToCart={removeToCartHandler} onAddToCart={addToCartHandler}  id={id} quantity={quantity}  />

          
           

        
      
            </div>
            </Tooltip>

    </div>
  )
}

export default ClothItem
