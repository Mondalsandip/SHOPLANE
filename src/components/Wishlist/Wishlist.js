import React from 'react'
import { useSelector } from 'react-redux';
import AvailableCloth from "../Cloth/AvailableCloth";


const Wishlist = () => {
  const data=  useSelector(arg => arg.wishlist.valuAarr)
  return (
    <div>
          { <AvailableCloth  data={data}    />   }  

    </div>
  )
}

export default Wishlist
