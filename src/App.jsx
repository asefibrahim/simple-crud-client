
import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }
    console.log(user);

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(fetchData => {
        setData(fetchData)
        console.log(fetchData);
        form.reset()
      })


  }

  return (
    <>

      <h1>simple Crud</h1>

      <form onSubmit={handleSubmit} >

        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />

      </form>





    </>
  )
}

export default App
