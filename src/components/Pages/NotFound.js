import React from 'react'
import classes from './NotFound.module.css'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={classes['not-found']}>
        <div>Not Found</div>
        <Button className='general'><Link to='/all'> Go to Home  </Link>   </Button>

    </div>
  )
}

export default NotFound
