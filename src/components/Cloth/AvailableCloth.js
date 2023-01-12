import React from 'react'
import classes from './AvailableCloth.module.css'
import Card from '../UI/Card'
import ClothItem from './ClothItem'




const AvailableCloth = (props) => {


  

  // const quantityItem= Item.find(item => item.id === props.data.id)
  // console.log('quantityItem',quantityItem)


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
