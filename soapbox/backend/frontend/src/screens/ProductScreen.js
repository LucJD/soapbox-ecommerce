import React from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, Form, Container} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Messages from '../components/Messages';

//TODO PLEASE DO NOT STYLE THIS
//STILL WORKING ON PAGE
function ProductScreen() {
    
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails




    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, id])

    const addToCartHandler = () => {
        navigate(`/cart/?qty=${qty}&productId=${id}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(createProductReview(
        //     match.params.id, {
        //     rating,
        //     comment
        // }))
        
    }

    

    return(

        <Container>
            <Link to={'/'} className='btn btn-light my-3'>Go Back</Link>
            {
                loading ? <Loader/>
                : error ?
                <Messages variant={'danger'} children={error}></Messages>
                :(
                    <div>
                        <Row>
                            <Col md={6}>
                                <Image src={`http://127.0.0.1:8000${product.image}`} alt={product.name} fluid/>
                            </Col>
                            <Col md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} ratings`} color={'#f8e825'}/>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Price: ${product.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Price:
                                                </Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Qty</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}>
                                                                {
                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                        </ListGroup.Item>
                                            )}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Button
                                                onClick={addToCartHandler}
                                                className='btn-block w-100'
                                                disabled={product.countInStock === 0}
                                                type='button'>
                                                    Add to Cart
                                                </Button>
                                    </ListGroup.Item>
                    </ListGroup>

                </Card>   
            </Col>
        </Row> 
                    </div>
                    
                )

            }
        
       
    </Container> 
    )
   

}

export default ProductScreen
