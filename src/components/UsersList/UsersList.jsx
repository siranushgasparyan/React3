import { User } from '../User/User'

import style from './UsersList.module.css'

const UsersList = ({users}) => {
  return (
    <div className={style.container}>
        {users.map(({name, id, email, address}) => (
            <User key={id} id={id} name={name} email={email} address={address} />
        ))}
    </div>
  )
}

export default UsersList