import React, { useState } from "react";
import classes from './Signup.module.css'
import {useNavigate } from "react-router-dom";
import {Formik,Form} from 'formik'
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { loginAction } from "../reducers/login-signup";
import Generallogin from "../Login/Generallogin";
import Alert from 'react-bootstrap/Alert';
// import { useSelector } from "react-redux";
// import useHttp from "../hooks/use-http";

import * as Yup from'yup'
import { useDispatch } from "react-redux";

const SignupSchema=Yup.object().shape({
    fname: Yup.string('Please enter character!').required('First name is required').min(3,'First name can\'t be less than 3 character').max(30,'Name is too long!'),
    lname: Yup.string('Please enter character!').required('Last name is required').min(3,'Last name can\'t be less than 3 character').max(30,'Name is too long!'),
    email:Yup.string().email('Enter a email type').required('Email is required'),
    firstPassword:Yup.string().required('Please enter password').min(6,'Password can\'t be less than 6 character')
  })

  
const Signup = (props) => {
  // const value= useSelector(arg => arg.login.value)
  // console.log('valuepage',value)
  //  const {getData}= useHttp()
  const dispatch= useDispatch()
  const [showalert, setShowAlert] =useState(false)
  const [initialValue]=useState({
    fname:'',
    lname:'',
    email:'',
    firstPassword:'',
    secondPassword:''
    })

  let navigate=useNavigate()
  
  const handleFormSubmit = e =>{
    if(e.firstPassword !==  e.secondPassword){
      setShowAlert(true)
      e.firstPassword=''
      e.secondPassword=''
      navigate('/Signup')
      return

    }

    // console.log('before push', value)
    dispatch(loginAction.addUser({
        name: e.fname,
        email: e.email,
        password : e.firstPassword
  }) )
    navigate('/login',true)
  };

// console.log('signup re render')

  // const sendDataLoading=(data)=>{
  //   dispatch(loginAction.replace(data))

  // }
  //   useEffect(()=>{
  //     console.log('calling first login')
  //     getData({ url: 'https://react-http-6ee55-default-rtdb.asia-southeast1.firebasedatabase.app/login.json'},sendDataLoading)
  //     console.log('value',value)
  //   },[])




return (
    <div className={classes.login_details}>
       <h2 className={classes['heading-text']}>Signup</h2>
      <Formik validationSchema={SignupSchema} initialValues={initialValue} onSubmit={handleFormSubmit}>
  { (props)  =>{
          return (
      <Form>
        <div className={classes.all_fields}>

          <Generallogin error={props.errors.fname} item={{
            type: 'text' ,
            name:'fname',
            placeholder:'Enter first name...',
           }}  />

          <Generallogin error={props.errors.lname} item={{
          type: 'text' ,
          name:'lname',
          placeholder:'Enter last name...',
          }}  />

         <Generallogin error={props.errors.email} item={{
          type: 'email' ,
          name:'email',
          placeholder:'Enter email...',
           }}  />

          <Generallogin error={props.errors.firstPassword} item={{
          type: 'password' ,
          name:'firstPassword',
          placeholder:'Enter password...',
           }}  />

          <Generallogin item={{
           type: 'password' ,
           name:'secondPassword',
           placeholder:'Enter password again...',
           }}  />
          {   showalert && <Alert style={{ padding:' 3px 1px' }} variant='danger'>Password doesn't match</Alert>    }

        {/* <div className={classes.single_field}>
            <Field type= 'password' 
           name='secondPassword'
           placeholder='Enter password again...'    className={classes['text-input']} validate={validateSecondPassword} /> 
            { props.errors.secondPassword &&  <p>{props.errors.secondPassword}</p>}
          </div> */}

          <h6>Already have an account? Login <Link to='/login'> <span className={classes.here}>here</span>  </Link> </h6> 

          <div className={classes.btn_cls}>
             <Button  type='submit' className='general'>Signup</Button>
          </div>
        </div>
    </Form>

    )}}
  </Formik>
</div>
  );
};

export default Signup
