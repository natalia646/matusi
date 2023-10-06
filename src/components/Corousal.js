import React from 'react';
import first from '../components/assets/corousal/first.png'
import style from '../scss/Corousal.module.scss'

const Corousal = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={first} alt='phone'></img>
    </div>
  )
}

export default Corousal
