import React from 'react'
import classes from './AvailableCloth.module.css'
import Card from '../UI/Card'
import ClothItem from './ClothItem'
import { useSelector } from 'react-redux'
import useHttp from '../hooks/use-http'
import { useEffect } from 'react'



const AvailableCloth = (props) => {

  const itemCart= useSelector(arg => arg.cart.value)
  const totalAmount= useSelector(arg => arg.cart.totalAmount)
  const totalQuantity= useSelector(arg => arg.cart.totalQuantity)
  const {isLoading,error,getData}= useHttp()
  

  // useEffect(()=>{
  //     console.log('calling cloth')
  //     getData({
  //       url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/cloth.json',
  //       method: 'PUT',
  //       body: {itemCart,totalAmount,totalQuantity}
  //     }, )
  //     console.log('cloth')
  //   },[itemCart,totalAmount,totalQuantity,getData])
  




    const clothList=props.data.map( item => <ClothItem  key={item.id} id={item.id} title={item.title} price={item.price} image={item.image}  rate={item.rating} />)



  return (
    <section className={classes.design}> 
      <div className='row'>
      {clothList}




      </div>


        
      
    </section>
  )
}

export default AvailableCloth
