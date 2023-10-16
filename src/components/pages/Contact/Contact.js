import React from "react";
import contact from "../../assets/pages/contact.svg";
import style from "./Contact.module.scss";
import { Form } from "./Form";

const Contact = () => {
  return (
    <main className={style.container}>
      <div className={style.text}>
        <h2 className={style.h2}>Контакти</h2> 
        <p className={style.p}>
          Цей проект було створено за організаційної та фінансової підтримки
          Baza Trainee Ukraine. Ти можеш зв'язатись із розробниками сайту та
          додатку (app.mama.ne.vdoma@gmail.com).<br/> <b>Якщо у тебе залишились питання - пиши:</b>
        </p>
       <Form/>
      </div>
      <img src={contact} alt="contact" className={style.img}></img>
    </main>
  );
};

export default Contact;
