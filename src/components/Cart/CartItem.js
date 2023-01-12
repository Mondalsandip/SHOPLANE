import React from 'react'
import { useDispatch } from 'react-redux'
import  classes from  './CartItem.module.css'
import { cartAction } from '../reducers/cart-reducer'

const CartItem = (props) => {
    const {id,title,price, image,totalPrice,quantity }=props.item
    const dispatch= useDispatch()

    const handleIncrease =()=>{
      dispatch(cartAction.addItem(props.item))


    }
    const handleDecrease =()=>{
      dispatch(cartAction.removeItem(id))
    }




  return (
<div className={classes.cartItem}>
      <img src={image}></img>
      <p>{title}</p>
      <div className={classes['item-price']}>
      <p>Price: {totalPrice.toFixed(2)}$   ({price.toFixed(2)}$ /item)</p>
      <p>Quantity:{quantity} </p>

      <div className={classes['add-btn']}>
        <button type='button' className={classes['btn-in']} onClick={handleDecrease} > - </button>
        <button type='button' className={classes['btn-de']} onClick={handleIncrease} > + </button>
      </div>




      </div>
    </div>
  )
}

export default CartItem
