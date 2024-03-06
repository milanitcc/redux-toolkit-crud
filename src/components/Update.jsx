import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Update() {

    const {id} = useParams();
    const [updateData, setUpdateData] = useState();
    const {users, loading} = useSelector((state) => state.app);

    useEffect(() => {
        if( id ) {
            const singleUser = users.filter((user) => user.id === id);
            setUpdateData(singleUser[0]);
        }
    }, [id])

    return (
        <div>
            <form
                className='w-50 mx-auto my-5'
                // onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        value={updateData && updateData.name}
                        onChange={newData}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="name"
                        className="form-control"
                        name="email"
                        value={updateData && updateData.email}
                        onChange={newData}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                        type="number"
                        id="age"
                        className="form-control"
                        name="age"
                        value={updateData && updateData.age}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <input
                        id="male"
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={updateData && updateData.gender === 'Male'}
                        onChange={newData}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input
                        id="female"
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={updateData && updateData.gender === 'Female'}
                        onChange={newData}
                    />
                    <label htmlFor="female" className="form-check-label">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Update