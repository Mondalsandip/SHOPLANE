import React from 'react'
import { useParams } from 'react-router-dom'
// import AvailableCloth from '../Cloth/AvailableCloth'
import Spinnercomp from '../asset/Spinner'
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react'
import useHttp from '../hooks/use-http'
import ProductDetailsItem from './ProductDetailsItem';
// import classes from './ProductDetails.module.css'


const ProductDetails = () => {
const [recvdata,setRecvData]=useState([])
// const [data,setRecvData]=useState([])
const {isLoading,error,getData }=useHttp()
const params= useParams()
const id=params.productId






const transformdata=(data)=>{
    // console.log('data',data)
    setRecvData(data)
} 
// console.log('recvdata',recvdata)
// console.log('id',id)
const data= recvdata.find(item => item.id === Number(id)) 

// || { rating:{} }

useEffect(() => {
getData({url:'https://fakestoreapi.com/products' }, transformdata)
}, [getData])



  
 
  

  return (
    <>

        {isLoading  && <div style={{margin: '200px   800px'}}> <Spinnercomp/>   </div>   }  
        { error && <div style={{margin: '200px   800px'}}><Alert variant='danger'> {error} </Alert>  </div>    }
        { !error && data  && <ProductDetailsItem data={data}  /> }  
    
    
    </>
  )
}

export default ProductDetails




// const Commondata = (props) => {

// const url= props.url


// const [data,setData]=useState()
// const {isLoading,error,getData }=useHttp()

// const transformdata=(data)=> setData(data)

// useEffect(() => {
// getData({url: url}, transformdata)
// }, [getData,url])

//   return (
//     <>
//         {isLoading  && <div style={{margin: '200px   800px'}}> <Spinnercomp/>   </div>   }  
//         { error && <div style={{margin: '200px   800px'}}><Alert variant='danger'> {error} </Alert>  </div>    }
//         { !error && data  && <AvailableCloth  data={data}    />   }  
//     </>
//   )
// }

// export default Commondata

