import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const User = () => {
    const users = useLoaderData()
    const [LoadUser, setUser] = useState(users)

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/user/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Delete successfully')
                    const loadedUser = LoadUser.filter(u => u._id !== _id)
                    setUser(loadedUser)

                }
            })
    }

    return (
        <div>
            {LoadUser.length}

            {
                LoadUser.map(user => <p> {user.name} :  {user.email}  {user._id}
                    <Link to={`/update/${user._id}`}>

                        <button>
                            update
                        </button>
                    </Link>

                    <button onClick={() => handleDelete(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default User;