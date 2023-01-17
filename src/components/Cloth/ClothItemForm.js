import React, { useEffect, useRef } from 'react'
import classes from './ClothItemForm.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'

const ClothItemForm = (props) => {
  // console.log('quantity',props.quantity)
  const refQuantity= useRef()
    
    const submitHandler=(e)=>{
        e.preventDefault()
        

    }

    useEffect(()=>{
      refQuantity.current.value =props.quantity 



    },[props.quantity])

    const submitHandleAdd=()=>{
      props.onAddToCart()


    }

    const submitHandleRemove=()=>{
      props.onRemoveToCart()


    }


  return (
    <form className={classes.form}  onSubmit={submitHandler}  >
       

         {/* <button className={classes.add} onClick={submitHandleAdd}>+</button> */}
         <Button className='all_item' onClick={submitHandleAdd}>+</Button>

        <div className={classes.input_number}>

        <Input ref={refQuantity} input={{
            id: props.id ,
            type:'number',
            step:'1'
            
               }} />


        </div>
         
   { props.quantity    &&    <Button className='all_item' onClick={submitHandleRemove}>-</Button> }

   {/* <button className={classes.remove} onClick={submitHandleRemove}>-</button>   */}

      
    </form>
  )
}

export default ClothItemForm
