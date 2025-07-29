import style from './Albom.module.css'

const Albom = ({userId, id, title}) => {
  return (
    <div className={style.container}>
        <h2>{title}</h2>
        <p>ID: {id}</p>
        <p>UserID: {userId}</p>
    </div>
  )
}

export { Albom }