import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {

    const allUsers = useSelector((state) => state.app.users)
    const cartProducts = useSelector(state => state.cart)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">RTK</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/read" className="nav-link">All ({allUsers.length})</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        <li className="justify-content-end">
                            <Link to="/cart" className="nav-link">My Bag ({cartProducts.length})</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar