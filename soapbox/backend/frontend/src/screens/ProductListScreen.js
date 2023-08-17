import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
import { useNavigate } from 'react-router-dom'
import { listProducts } from '../actions/productActions'
import { useSearchParams } from 'react-router-dom'
import { createProduct } from '../actions/productActions'
import Loader from '../components/Loader'
import Messages from '../components/Messages'
import { Table, Col, Row, Button } from 'react-bootstrap'
import { deleteProduct } from '../actions/productActions'
import { LinkContainer } from 'react-router-bootstrap'
function ProductListScreen() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const key = searchParams.get('')
    
    const productList = useSelector(state => state.productList)
    const {loading, error, products, pages, page} = productList

    const productDelete = useSelector(state => state.productDelete)
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const {loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct} = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    useEffect(() => {
        dispatch({type: PRODUCT_CREATE_RESET})

        if(!userInfo.isAdmin) {
            navigate("/login")
        }
        if(successCreate) {
            navigate(`/admin/product/${createdProduct._id}/edit`)
        }
        else{
            dispatch(listProducts())
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate, createdProduct])


    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")){
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = (id) => {
        dispatch(createProduct())
    }



  return (
    <div>
      <Row>
        <Col>
        <h1>Products</h1>
        </Col>
        <Col className='txt-right'>
            <Button  className={'my-3'}onClick={createProductHandler}>
                <i className='fas fa-plus'></i>Create Product</Button>
        </Col>
      </Row>

      {loadingDelete && <Loader/>}
      {errorDelete && <Messages variant='danger'>{errorDelete}</Messages>}

      {loadingCreate && <Loader/>}
      {errorCreate && <Messages variant='danger'>{errorCreate}</Messages>}

      {loading ?
      <Loader/> :
      error ? <Messages variant='danger'>{error}</Messages>
    :
        <div>
            <Table striped hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    { products.map(product => (
                        <tr key={product._id}>
                            <td>product._id</td>
                            <td>product.name</td>
                            <td>product.price</td>
                            <td>product.category</td>
                            <td>
                            <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                                <i className='fas fa-trash'></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
            
        </div>}
      
    </div>
  )
}

export default ProductListScreen
