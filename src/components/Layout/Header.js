import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <>
    <header className={classes.header}> 
        <p> <span className={classes['first-section']}>shop</span>lane</p> 

        <HeaderCartButton/>
       
    
     </header>
     <div className={classes.line}>
        
    </div>
     

    <nav className={classes.navbar}>   
         <NavLink to='/all' className={({ isActive })=> isActive ? classes.active : undefined }   > all  </NavLink> 
        <NavLink to='/eletronics'  className={({ isActive })=> isActive ? classes.active : undefined }> eletronics  </NavLink>
        <NavLink to='/jewelery'  className={({ isActive })=> isActive ? classes.active : undefined }> jewelery  </NavLink>
        <NavLink to='/mencloth'  className={({ isActive })=> isActive ? classes.active : undefined }> men's clothing  </NavLink>
        <NavLink to='/womencloth'  className={({ isActive })=> isActive ? classes.active : undefined }> women's clothing  </NavLink>
    </nav>
    <div className={classes.secondline}>
        
    </div>
    
    
    </>
    
  )
}

export default Header
