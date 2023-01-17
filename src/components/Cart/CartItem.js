import React from 'react'
import { useDispatch } from 'react-redux'
import classes from './CartItem.module.css'
import { cartAction } from '../reducers/cart-reducer'
import Button from '../UI/Button'
import useHttp from '../hooks/use-http'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const CartItem = (props) => {
  const { id, title, price, image, totalPrice, quantity } = props.item
  const dispatch = useDispatch()
  const {isLoading,error,getData}= useHttp()

  const itemCart= useSelector(arg => arg.cart.value)
  const totalAmount= useSelector(arg => arg.cart.totalAmount)
  const totalQuantity= useSelector(arg => arg.cart.totalQuantity)


  const handleIncrease = () => {
    dispatch(cartAction.addItem(props.item))
    props.onRecvData(props.item)

    }

    // useEffect(()=>{
    //   getData({
    //     url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json',
    //     method: 'PUT',
    //     body: {itemCart, totalAmount,totalQuantity}
    //   })
    // },[getData,itemCart, totalAmount,totalQuantity])



  const handleDecrease = () => {
    dispatch(cartAction.removeItem(id))
    props.onRecvData(id)

    
  }




  return (
    <div className={classes.cartItem}>
      <div className={classes['left-section']}>
      <img src={image} alt='loading...'/>
      <p>{title}</p>
      </div>
      <div className={classes['right-section']}>
      <div className={classes['item-price']}>
        <p>Price: {totalPrice.toFixed(2)}$   ({price.toFixed(2)}$ /item)</p>
        <p>Quantity:{quantity} </p>

        <div className={classes['cart-btn']}>
          <Button className='general' onClick={handleIncrease} >+</Button>
          <Button className='general' onClick={handleDecrease} >-</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CartItem
