import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useSelector } from 'react-redux'
import DropdownItemTagsExample from './DropDown'
import { useNavigate } from 'react-router-dom'


const HeaderCartButton = () => {
 const nav= useNavigate()
  const itemCount= useSelector(arg => arg.cart.totalQuantity)

  const handleSubmit=()=>{
    nav('/cart')
  }

  return (
    <div className={classes.cartItem}>
            
        <DropdownItemTagsExample/>

    <button type="button" className="btn btn-light position-relative"   onClick={handleSubmit}  >
 <span className={classes.icon}><CartIcon/>   </span>  
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {itemCount}
  </span>
</button>


     

    </div>
  )
}

export default HeaderCartButton
