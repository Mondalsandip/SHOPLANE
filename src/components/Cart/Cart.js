import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


const Cart = () => {
    // const [items,setItems]= useState([])
    // useEffect(()=>{
    //     let items= localStorage.getItem('cartItems')
    //     if(items){
    //         items=JSON.parse(items)
    //         setItems(items)
    //     }

    // },[])

    const cartItem= useSelector(arg => arg.cart.value)
    const totalAmount= useSelector(arg => arg.cart.totalAmount)
    const dispatch= useDispatch()



  return (
    <div>
        {  cartItem.length >0 ? <h2>Total Price: {totalAmount.toFixed(2)}$</h2> : <div><h2>No Item In Cart</h2> <Link to='/all'>Continue Shopping</Link> </div>  }
        <div>
            {cartItem .map((item,i)=>(
                <CartItem key={i} item={item}    />
            ))}


        </div>

      
    </div>
  )
}

export default Cart
