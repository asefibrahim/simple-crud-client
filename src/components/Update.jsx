import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const UpdatedUser = {
            name, email
        }

        fetch(`http://localhost:5000/user/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    return
                }

            })
    }

    return (
        <div>
            <h1>{data.name}</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={data?.name} id="" />
                <br />
                <input type="email" defaultValue={data?.email} name="email" id="" /> <br />
                <input type="submit" value="Submit" />

            </form>

        </div>
    );
};

export default Update;