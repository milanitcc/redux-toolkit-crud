import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cartSlice';
import { getProducts } from '../features/productSlice';
import StatusCode from '../utils/StatusCode';

const Product = () => {
    const dispatch = useDispatch()

    const {data: products, status} = useSelector(state => state.products)

    useEffect(() => {
        // dispatch a get action
        dispatch(getProducts())
    }, [dispatch])

    const addToCart = (product) => {
        // dispatch an add action
        dispatch(add(product))
    }

    if( status === StatusCode.LOADING ) {
        return (<h2>Loading...</h2>)
    }

    if( status === StatusCode.ERROR )
    {
        return <h2>Something went wrong. Try again later</h2>
    }

    return (
        <>
            <h1>Product Dashboard</h1>
            <div className='row'>
                    {products && products.map((product) => (
                        <div className='col-md-3 mb-2' key={product.id}>
                            <div className="card h-100">
                                <div className='text-center'>
                                    <img className="card-img-top" src={product.image} alt="Card product cap" style={{ width: "100px", height: "130px"}} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">INR: {product.price}</p>
                                </div>
                                <div className="card-footer text-muted" style={{ backgroundColor: 'white'}}>
                                    <button className='btn btn-primary' onClick={() => addToCart(product)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Product