import React from 'react'

const WishlistHeart = (props) => {


const submitHandleAdd=()=>{
    props.onAddToWishlist()
}

const submitHandleRemove=()=>{
    props.onRemoveToWishlist()

}

const blackSvg= <svg style={{ color:'black',  cursor: 'pointer', width: '25px'}}   onClick={submitHandleAdd} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                </svg>



const redSvg= <svg style={{color:'red',  cursor: 'pointer',width: '25px'}} onClick={submitHandleRemove}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                </svg>



return (
    <div>
         {  !props.quantitywishlist ?    blackSvg : redSvg  }    

     </div>
  )
}

export default WishlistHeart
