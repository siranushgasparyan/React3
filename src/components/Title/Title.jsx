import style from './Title.module.css'

import React from 'react'

const Title = ({children}) => {
  return (
    <h1 className={style.title}>{children}</h1>
  )
}

export {Title}