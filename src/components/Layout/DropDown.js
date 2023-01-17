import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import './DropDown.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../reducers/login-signup';



function DropdownItemTagsExample() {
  const currentUser= useSelector(arg => arg.login.currentUser)
  console.log('currentUser',currentUser)
  const dispatch= useDispatch()
  
  // const nav=useNavigate()


  const myStyle=
  {
      backgroundColor: 'whitesmoke',
      borderRadius: '25px',
      border: '2px solid rgba(13, 12, 12, .090)'
};
const handleLogout=()=>{
dispatch(loginAction.addCurrentUser({name: 'Login or signup'}))
}


const current_User= currentUser.name
const show= current_User === 'Login or signup';

  return (

    <DropdownButton id="dropdown-item-button" title={current_User}  variant='Secondary' style={myStyle} className='back-color'>
     
      <Dropdown.Item as="button">  <Link to='/cart'>  Cart  </Link> </Dropdown.Item>
      <Dropdown.Item as="button">  <Link to='/wishlist'>  Wishlist  </Link> </Dropdown.Item>
      {/* {console.log('currentdata',currentdata)} */}
      {show   && <Dropdown.Item as="button"> <Link to='/login'>  Login </Link></Dropdown.Item>   }  
     {show && <Dropdown.Item as="button"> <Link to='/signup'>  Sign up </Link> </Dropdown.Item> } 
      {!show && <Dropdown.Item as="button" onClick={handleLogout} >   Logout  </Dropdown.Item> } 
      
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;