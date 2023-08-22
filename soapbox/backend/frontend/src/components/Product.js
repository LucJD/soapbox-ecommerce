import React, { useEffect } from 'react';
import {Card} from 'react-bootstrap';
import Rating from './Rating';
import {Link} from 'react-router-dom';
import $ from 'jquery'

function Product({product}) {


  return (

    <Card className='my-6 p-2 h-100 rounded mb-5'>
        <Link to={`/product/${product._id}`}>
            <Card.Img className='h-100'src={`http://127.0.0.1:8000${product.image}`}/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className={'my-3'}>
                    {/* <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/> */}
                </div>
            </Card.Text>
            <Card.Text as='h3'>
                    ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
export default Product
