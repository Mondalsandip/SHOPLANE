import React from 'react'
import classes from './ProductDetailsItem.module.css'

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Star from '../asset/Star';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';


const ProductDetailsItem = (props) => {

  const { title, price, image, rating: { count, rate }, description } = props.data




  const renderTooltip = props => (
    <Tooltip {...props}>{title}</Tooltip>
  );


  return (
    <div className={classes.cloth} >
      <div className={classes['cart-content']} >
        <div className={classes['img-cart']}>
          <OverlayTrigger placement="right-start" overlay={renderTooltip} >
            <img src={image} alt="sndjks" />
          </OverlayTrigger>
        </div>
        <div className={classes['title-box']}>
          <h3> <span className={classes.brand}>brand </span>{title}</h3>
        </div>
        <div className={classes.desc}>
                <p> {description}</p>

          </div>

        {rate && count && <Star star={Math.round(rate)} count={count} />}
        <div className={classes.price}><span className={classes.dollar}>$</span>{price}</div>
        <div className={classes['btn-cart']}>
        <Button className='general'><Link to='/all' >Go to Home</Link></Button>



        </div>
      </div>
    </div>
  )
}

export default ProductDetailsItem
