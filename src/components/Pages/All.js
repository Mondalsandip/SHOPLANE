import React, { useEffect, useState } from 'react'
import AvailableCloth from '../Cloth/AvailableCloth'

const All = () => {
  const [data, setData] =useState()
          useEffect(()=>{
                const getData= async ()=>{
                  const fetchData= await fetch('https://fakestoreapi.com/products')
                  const recvData=await fetchData.json()
                  setData(recvData)
                  }
                getData()

          },[])








  return (
    <>
    { data  && <AvailableCloth  data={data}    />   }  
    </>
  )
}

export default All
