import React from 'react'
import AvailableCloth from '../Cloth/AvailableCloth'
import { useState,useEffect } from 'react'


const Jewelery = () => {


  const [data, setData] =useState()
          useEffect(()=>{
                const getData= async ()=>{
                  const fetchData= await fetch('https://fakestoreapi.com/products/category/jewelery')
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



export default Jewelery
