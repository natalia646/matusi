import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import style from './Header.module.scss'
import Download from '../ButtonDownload/Download';


const Header = () => {

  return (
    <div className={style.header_container}>
      <Link ><img src={logo} alt ='logo'></img></Link>
      <div className={style.links}>
          <Link className={style.link} to = "/">Про додаток</Link>
          <Link className={style.link} to = "/">Відгуки</Link>
          <Link className={style.link} to = "/">Умови користування</Link>
          <Link className={style.link} to = "/">Контакти</Link>
          <Download className={style.button_download}/>
      
      </div>
    </div>
  )
}

export default Header
