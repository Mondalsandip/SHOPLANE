import React, { useState } from "react";
import classes from './Login.module.css'
import {useNavigate } from "react-router-dom";
import {Formik,Form} from 'formik'
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import Generallogin from "./Generallogin";
// import useHttp from "../hooks/use-http";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/login-signup";

import * as Yup from'yup'
import { useSelector } from "react-redux";

const SignupSchema=Yup.object().shape({
    name: Yup.string('Please enter character!').required('Name is required').min(3,'Name can\'t be less than 3 character').max(30,'Name is too long!'),
  
    email:Yup.string().email('Enter a email type').required('Email is required'),
    password:Yup.string().required('Please enter password').min(6,'Password can\'t be less than 6 character')
  })

  




const Login = (props) => {
   const value= useSelector(arg => arg.login.value)
   const currentUser= useSelector(arg => arg.login.currentUser)
   console.log('all user',value )
   console.log('current user',currentUser)
   const [show,setShow]= useState()
   const [showcredential,setShowCredential]= useState()
    // const [recvdataserver, setRecvDataServer]= useState()
  //  const {getData}= useHttp()
   const dispatch=useDispatch()

//    console.log('value', value)
  // const [emailValue, setEmailValue] = useState("");
  // const [passValue, setPassvalue] = useState("");
  const [initialValue]=useState({
    name:'',
    email:'',
    password:''

    })

  let navigate=useNavigate()
  

  // const emailChangeHandle = e =>  setEmailValue(e.target.value)
  // const passwordChangeHandle = e =>  setPassvalue(e.target.value);
  

  const handleFormSubmit = e =>{
  
    // setEmailValue("");
    // setPassvalue("");
    if(value.length === 0 ){
    //    navigate('/signup')
    setShow(true)
    e.email=''
    e.password=''
    e.name=''
       return
    }

   

    // console.log('value',value)
    // console.log('value',value)
    // console.log('e.email',e.email)


    // console.log('recvdataserver',recvdataserver)
    // console.log('recvdataserver',e.email)
    const existingItem=  value.find(item => e.email === item.email) || {email: 'a'  ,password: 'b'}
    // console.log('existingItem',existingItem)

    if (e.email === existingItem.email && e.password === existingItem.password ) {
        
        setShowCredential(false)
        // console.log('existingItem',existingItem)
        dispatch(loginAction.addCurrentUser(existingItem))
        // getData({
        //   url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/currentuser.json',
        //   method: 'PUT',
        //   body: existingItem
        // }, transformData)
        
      navigate('/all',true)

    }else{
        setShowCredential(true)
        e.email=''
        e.password=''
        e.name=''
      }

  };

  // const transformData=(data)=>{
  //   console.log('data',data)
  //   console.log('got data')
  //   setRecvDataServer(data)
  //   // dispatch(cartAction.replace(data))
    
  
  // }

// const sendDataLoading=(data)=>{
//       dispatch(loginAction.replace(data))

// }
//   useEffect(()=>{
//     console.log('calling first login')
//     getData({ url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/login.json'},sendDataLoading)
//     console.log('value',value)
//   },[])

  // useEffect(()=>{
  //   console.log('calling login')
  //   getData({
  //     url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/login.json',
  //     method: 'PUT',
  //     body: value
  //   }, transformData)
  //   console.log('value',value)
  // },[value])

  

  return (
    <div className={classes.login_details}>
      
      <h2 className={classes['heading-text']}>Login</h2>
      {show  &&  <p>Please Signup first</p> }
      {showcredential  &&  <p>Credentials doesn't match </p>  }

      <Formik validationSchema={SignupSchema} initialValues={initialValue} onSubmit={handleFormSubmit}>

    { (props)  =>{
      
      return (
      <Form>
        <div className={classes.all_fields}>

          <Generallogin error={props.errors.name} item={{
            type: 'text' ,
            name:'name',
            placeholder:'Enter name...',
           }}  />

         <Generallogin error={props.errors.email} item={{
            type: 'email' ,
            name:'email',
            placeholder:'Enter email...',
           }}  />

         <Generallogin error={props.errors.password} item={{
            type: 'password' ,
            name:'password',
            placeholder:'Enter password...',
           }}  />

         <h6>Don't have an account? Sign up <Link to='/signup'> <span className={classes.here}>here</span>  </Link> </h6> 
            <div className={classes.btn_cls}>
              <Button  type='submit' className='general'>Login</Button>
            </div>
          </div>


    </Form>


    )}}

      


     </Formik>



    </div>
  );
};

export default Login
