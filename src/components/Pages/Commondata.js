import React from 'react'
import AvailableCloth from '../Cloth/AvailableCloth'
import Spinnercomp from '../asset/Spinner'
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react'
import useHttp from '../hooks/use-http'


const Commondata = (props) => {

const url= props.url


const [data,setData]=useState()
const {isLoading,error,getData }=useHttp()

const transformdata=(data)=> setData(data)

useEffect(() => {
getData({url: url}, transformdata)
}, [getData,url])

  return (
    <>
        {isLoading  && <div style={{margin: '200px   800px'}}> <Spinnercomp/>   </div>   }  
        { error && <div style={{margin: '200px   800px'}}><Alert variant='danger'> {error} </Alert>  </div>    }
        { !error && data  && <AvailableCloth  data={data}    />   }  
    </>
  )
}

export default Commondata
