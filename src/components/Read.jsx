import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, showUser } from '../features/userDetailSlice'
import CustomModal from './CustomModal'

export default function Read() {

    const dispatch = useDispatch()
    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)

    const {users, loading} = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showUser())
    }, [dispatch])

    if( loading )
    {
        return (<h2>Loading...</h2>)
    }

    return (
        <div>
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
            <h2>All data</h2>
            {users && users.map((user) => (<div className="card" key={user.id} style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.age}</p>
                    <p className="card-text">{user.gender}</p>
                    <button className="btn btn-primary" onClick={() => [setId(user.id), setShowPopup(true)]}>View</button>
                    <button className="btn btn-primary">Edit</button>
                    <Link onClick={() => dispatch(deleteUser(user.id))} className="btn btn-primary">Delete</Link>
                </div>
            </div>))}
        </div>
    )
}
