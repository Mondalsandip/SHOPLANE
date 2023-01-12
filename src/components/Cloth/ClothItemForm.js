import React, { useEffect, useRef } from 'react'
import classes from './ClothItemForm.module.css'
import Input from '../UI/Input'

const ClothItemForm = (props) => {
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
       

         <button className={classes.add} onClick={submitHandleAdd}>+</button>
        <div className={classes.input_number}>

        <Input ref={refQuantity} input={{
            id: props.id ,
            type:'number',
            step:'1'
            
               }} />


        </div>
         



         


          { props.quantity    && <button className={classes.remove} onClick={submitHandleRemove}>-</button>  }  

      
    </form>
  )
}

export default ClothItemForm
