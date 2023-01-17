import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import Button from '../UI/Button'
import useHttp from '../hooks/use-http'
import Spinnercomp from '../asset/Spinner'


const Cart = () => {
    // const [items,setItems]= useState([])
    // useEffect(()=>{
    //     let items= localStorage.getItem('cartItems')
    //     if(items){
    //         items=JSON.parse(items)
    //         setItems(items)
    //     }

    // },[])
    const {isLoadingStated,isLoading,error,getData}= useHttp()
    // const [recvdata,setRecvData]= useState()
    const [rerender,setrerender]= useState()

  const itemCart= useSelector(arg => arg.cart.value)
  const totalAmount= useSelector(arg => arg.cart.totalAmount)
  const totalQuantity= useSelector(arg => arg.cart.totalQuantity)
  
    // const totalQuantity= useSelector(arg => arg.cart.totalQuantity)
    // const itemCart= useSelector(arg => arg.cart.value)

    
    
    // const transformData=(data)=>{
    //   console.log('data',data)
    //   console.log('got data')
    //   setRecvData(data)
      

    // }
    const fetchData=(data)=>{
  //     console.log('clicked')
  //     const fetchServer= async ()=>{
  //       getData({
  //         url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json',
  //         method: 'PUT',
  //         body: {itemCart, totalAmount}
  //       })
  //       console.log(itemCart,totalAmount)

  //     }
  //     fetchServer()
     
  //     console.log(itemCart,totalAmount)
  }
 
  // useEffect(()=>{
  //   getData({url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json' },transformData )
  
  // },[])

// useEffect(()=>{
//   console.log('sending request',itemCart,totalAmount)

//   getData({
//             url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json',
//             method: 'PUT',
//             body: {itemCart, totalAmount}
//           },transformData)
//           console.log('updated data',itemCart,totalAmount)

// },[itemCart])





  return (
    <>       
         {/* {isLoading  && <div style={{margin: '200px   800px'}}> <Spinnercomp/>   </div>   }   */}
         {/* {console.log('itemCart',itemCart)} */}

       { itemCart.length >0 ?  <div className={classes['total-price']}> <h2>Total Price: {totalAmount.toFixed(2)}$</h2> </div> : <div className={classes['total-price']}><h2>No Item In Cart</h2> <Button className='general'><Link to='/all'>Continue Shopping</Link> </Button> </div>  } 
       <div>
            { itemCart.map((item,i)=>(
                <CartItem key={i} item={item} onRecvData={fetchData}   />
            ))}


        </div> 

      
    </>
  )
}

export default Cart


