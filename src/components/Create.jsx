import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../features/userDetailSlice'

function Create() {

    const [users, setUsers] = useState({})

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const getUserData = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // to send data to slice then we can use dispatch
        dispatch(createUser(users));

        navigate("/read")
    }

    return (
        <div>
            <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" name="name" onChange={getUserData} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="name" className="form-control" name="email" onChange={getUserData} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" id="age" className="form-control" name="age" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <input id="male" className="form-check-input" type="radio" name="gender" value="Male" onChange={getUserData} />
                    <label className="form-check-label" htmlFor="male">
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input id="female" className="form-check-input" type="radio" name="gender" value="Female" onChange={getUserData} />
                    <label htmlFor="female" className="form-check-label">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create