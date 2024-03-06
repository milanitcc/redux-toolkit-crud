import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const removeCart = (id) => {
        // dispatch a remove action

        dispatch(remove(id));
    }

    if( products.length === 0 )
    {
        return <h2>Your cart is empty</h2>
    }

    return (
        <div>
            <div className='row'>
                    {products && products.map((product) => (
                        <div className='col-md-12 mb-2' key={product.id}>
                            <div className="card h-100">
                                <div className='text-center'>
                                    <img className="card-img-top" src={product.image} alt="Card product cap" style={{ width: "100px", height: "130px"}} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">INR: {product.price}</p>
                                </div>
                                <div className="card-footer text-muted" style={{ backgroundColor: 'white'}}>
                                    <button className='btn btn-danger' onClick={() => removeCart(product.id)}>Remove Item</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Cart