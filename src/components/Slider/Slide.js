import React from 'react';
import style from '../../scss/Slider.module.scss'

const Slide = ({image, i}) => {
  return (
      <img src={image} alt="image" className={style.image} ></img>
  )
}

export default Slide
