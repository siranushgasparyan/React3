import style from './User.module.css'

const User = ({name, email ,id, address}) => {
  return (
    <div className={style.container}>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Address: {address.street} / {address.suite}</p>
        <p>ID: {id}</p>
    </div>
  )
}

export { User }