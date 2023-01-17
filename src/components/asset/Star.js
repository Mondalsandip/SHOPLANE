import React from 'react'
import './Star.css'
import FilledStar from './FilledStar'
import BlankStart from './BlankStart'

const Star = (props) => {
  // console.log('hds',props)
   const {star,count}= props

  const ratingStar= Array.from({length:5}, (e,i)=>{
    

    return  <span key={i}>
        {
           star >= i +1 ? <FilledStar />   : <BlankStart />   

        }

    
    </span>

   })
  return (
    <section className='star-section'>

            {ratingStar}
            <div className='count'>

            ({count})
            </div>
         
    </section>
   
  )
}

export default Star
