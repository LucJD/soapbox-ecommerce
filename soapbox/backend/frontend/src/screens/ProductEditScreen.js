import React from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import { listProductDetails } from '../actions/productActions'
import { useEffect } from 'react'
import { updateProduct } from '../actions/productActions'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {Button} from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Loader from '../components/Loader'
import Messages from '../components/Messages'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import Select from 'react-select'

function ProductEditScreen() {

    //select options
    const options = [
        { value: 'soap', label: 'Bar Soaps' },
        { value: 'bathbombs', label: 'Bath Bombs' },
        { value: 'beardoils', label: 'Beard Oils' },
        { value: 'bodybutters', label: 'Body Butters' },
        { value: 'sugarscrubs', label: 'Sugar Scrubs' },
        { value: 'waxmelts', label: 'Wax Melts' },
      ]

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            navigate('/admin/productlist')
        } else {
            if (!product.name || product._id !== Number(id)) {
                dispatch(listProductDetails(id))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)

            }
        }



    }, [dispatch, product,id, navigate, successUpdate])


    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(updateProduct({
            _id: id,
            name,
            price,
            image,
            category,
            countInStock,
            description
        }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        console.log("on form data")
        console.log(formData)

        formData.append('image', file)
        formData.append('product_id', id)

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/products/upload/', formData, config)

            setImage(data)
            console.log(data)
            setUploading(false)
        }catch(error){
            setUploading(false)
        }
    }


  return (
   
    <div>

        <Link to='/admin/productlist'>Go Back</Link>

        <FormContainer>
            <h1>Edit Product</h1>
            {loadingUpdate && <Loader/>}
            {errorUpdate && <Messages variant='danger'>{errorUpdate}</Messages>}
            
            {loading ? <Loader/> : error ? <Messages variant='danger'>{error}</Messages>
            
            :
            
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter Name'
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            
                            <Form.Group controlId='image'>
                                <Form.Label>Image</Form.Label>
                            
                                <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>

                                <Form.Control
                                    type='file'
                                    controlId='image-file'
                                    label='Choose File'
                                    custom
                                    onChange={uploadFileHandler}
                                >

                                </Form.Control>
                                {uploading && <Loader />}

                            </Form.Group>

                            <Form.Group controlId='countinstock'>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter stock'
                                    value={countInStock}
                                    onChange={(e) => setCountInStock(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            
                            <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                value={category}
                                onChange={e => {
                                console.log("e.target.value", e.target.value);
                                setCategory(e.target.value);
                                    }}
                                >
                                <option value="soap">Bar Soaps</option>
                                <option value="beardoils">Beard Oils</option>
                                <option value="waxmelts">Wax Melts</option>
                                <option value="bathbombs">Bath Bombs</option>
                                <option value="bodybutters">Body Butters</option>
                                <option value="sugarscrubs">Sugar Scrubs</option>
                                </Form.Control>
                                </Form.Group>


                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Button type='submit' variant='primary'>
                                Update
                        </Button>

            </Form>
            }
        </FormContainer>
    </div>
  )
}

export default ProductEditScreen
