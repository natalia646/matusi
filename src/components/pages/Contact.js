import React from "react";
import contact from "../assets/contact.svg";
import style from "./scss/Contact.module.scss";
import { Form } from "../Form/Form";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h2>Контакти</h2>
        <p>
          Цей проект було створено за організаційної та фінансової підтримки
          Baza Trainee Ukraine. Ти можеш зв'язатись із розробниками сайту та
          додатку (app.mama.ne.vdoma@gmail.com). <b>Якщо у тебе залишились питання - пиши:</b>
        </p>
       <Form/>
      </div>
      <img src={contact} alt="contact"></img>
    </div>
  );
};

export default Contact;
