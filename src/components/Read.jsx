import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { showUser } from '../features/userDetailSlice'

export default function Read() {

    const dispatch = useDispatch()

    const {users, loading} = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showUser())
    }, [dispatch])

    console.log(loading);

    if( loading )
    {
        return (<h2>Loading...</h2>)
    }

    return (
        <div>
            {users && users.map((user) => (<div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.age}</p>
                    <p className="card-text">{user.gender}</p>
                    <Link className="btn btn-primary">Edit</Link>
                    <Link className="btn btn-primary">Edit</Link>
                </div>
            </div>))}
        </div>
    )
}
