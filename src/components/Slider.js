import React from 'react';
import style from '../scss/Slider.module.scss';
import back from './assets/corousal/back.svg'
import next from './assets/corousal/next.svg';



const Slider = () => {
  return (
    <div className={`${style.slide} ${style.hi_slide}`}>
      <img src={back} alt='arrow' className={style.arrow}></img>
      <img src={next} alt='arrow' className={style.arrow}></img>
      <ul>

      </ul>

    </div>
  )
}

export default Slider
