import { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { baseURL } from '../../db/db'

import style from './AlbomDetailsPage.module.css'

const AlbomDetailsPage = () => {
    const {id} = useParams()
    const [album, setAlbum] = useState([])

    useEffect(() => {
      fetch(`${baseURL}/albums/${id}`)
        .then((res) => res.json())
        .then((album) => setAlbum(album))
        .catch((err) => console.log(err))
    }, [id])

  return (
    <div className={style.container}>
        <h2>{album.title}</h2>
        <p>ID: {album.id}</p>
        <p>UserID: {album.userId}</p>
    </div>
  )
}

export default AlbomDetailsPage