import React from 'react'
import { Field } from 'formik'
import    classes from  './Generallogin.module.css'

const Generallogin = (props) => {
const {error,item } =props

  return (

         <div className={classes.single_field}>
            <Field {...item}  className={classes['text-input']} /> 
            { error &&  <p>{error}</p>}
          </div>
    
  )
}

export default Generallogin
