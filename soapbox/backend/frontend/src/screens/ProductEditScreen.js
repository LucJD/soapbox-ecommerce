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

export default function ProductEditScreen() {

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
        const formData = new formData()

        formData.append('image', file)
        formData.append('product_id', id)

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const {data} = await axios.post('api/products/upload', formData, config)

            setImage(data)
            setUploading(false)
        }catch(error){
            setUploading(false)
        }
    }


  return (
    <div>
      Product Edit Screen
    </div>
  )
}
