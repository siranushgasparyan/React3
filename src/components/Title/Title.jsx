import style from './Title.module.css'

const Title = ({children}) => {
  return (
    <h1 className={style.title}>{children}</h1>
  )
}

export {Title}
