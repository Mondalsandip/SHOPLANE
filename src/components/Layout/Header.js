import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
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
        <Link to='/all'> all  </Link>
        <Link to='/eletronics'> eletronics  </Link>
        <Link to='/jewelery'> jewelery  </Link>
        <Link to='/mencloth'> men's clothing  </Link>
        <Link to='/womencloth'> women's clothing  </Link>

       

        
        
    </nav>
    <div className={classes.secondline}>
        
    </div>
    
    
    </>
    
  )
}

export default Header
