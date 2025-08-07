import { Albom } from '../../components/Albom/Albom'
import { useEffect, useState } from 'react'
import { baseURL } from '../../db/db'

import style from './AlbomsPage.module.css'

const AlbomsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${baseURL}/albums`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className={style.container}>
        {data.map(({userId, id, title}) => (
            <Albom key={id} id={id} title={title} userId={userId} />
        ))}
    </div>
  )
}

export default AlbomsPage