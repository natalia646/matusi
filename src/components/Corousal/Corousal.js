import React from 'react';
import first from '../assets/corousal/first.png'
import style from './Corousal.module.scss'

const Corousal = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={first}></img>
    </div>
  )
}

export default Corousal
