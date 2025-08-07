import { useParams } from 'react-router-dom'
import style from './UserDetailsPage.module.css'
import { baseURL } from '../../db/db'

import { useEffect, useState } from 'react'

const UserDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
      fetch(`${baseURL}/users/${id}`)
        .then((res) => res.json())
        .then((user) => setUser(user))
    }, [id])

  return (
    <div className={style.container}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>ID: {user.id}</p>
        {/* <p>Address: {user.address.street}</p> */}
    </div>
  )
}

export default UserDetailsPage
