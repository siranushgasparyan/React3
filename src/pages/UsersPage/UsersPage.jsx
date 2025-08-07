import { User } from '../../components/User/User'
import { useEffect, useState } from "react";
import { baseURL } from '../../db/db';

import style from './UsersPage.module.css'

const UsersPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/users`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={style.container}>
        {data.map(({name, id, email, address}) => (
            <User key={id} id={id} name={name} email={email} address={address} />
        ))}
    </div>
  )
}

export default UsersPage
