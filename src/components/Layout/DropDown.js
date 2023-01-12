import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';


function DropdownItemTagsExample() {

  const myStyle=
  {
      backgroundColor: 'whitesmoke',
      borderRadius: '25px',
      border: '2px solid rgba(13, 12, 12, .090)'
}




  return (

    




    <DropdownButton id="dropdown-item-button" title="Login or Sign up" variant='Secondary' style={myStyle}>
      <Dropdown.Item as="button"> <Link to='/login'>  Login </Link></Dropdown.Item>
      <Dropdown.Item as="button"> <Link to='/signup'>  Sign up </Link> </Dropdown.Item>
      <Dropdown.Item as="button">  <Link to='/cart'>  Cart  </Link> </Dropdown.Item>
      <Dropdown.Item as="button">  <Link to='/wishlist'>  Wishlist  </Link> </Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;