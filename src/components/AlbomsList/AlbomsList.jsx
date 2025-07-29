import style from './AlbomsList.module.css'

import { Albom } from '../Albom/Albom'

const AlbomsList = ({alboms}) => {
  return (
    <div className={style.container}>
        {alboms.map(({userId, id, title}) => (
            <Albom key={id} id={id} title={title} userId={userId} />
        ))}
    </div>
  )
}

export default AlbomsList