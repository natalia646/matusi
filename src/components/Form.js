import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from '../scss/Form.module.scss'

export const Form = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState('');
  const [name, setName] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fx2uokm",
        "template_t9sf2qn",
        form.current,
        "4hnfdzUIg7jxrH-jl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend('Повідомлення надіслано');
          setName('')

        },
        (error) => {
          console.log(error.text);
          setIsSend('Повідомлення невдалося надіслати')
        }
      );
  };

  return (
    <form className={style.form} ref={form} onSubmit={sendEmail}>
      <input placeholder="Ім'я" type="text" name="user_name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input placeholder="Email" type="email" name="user_email" />
      <input placeholder="Тема" type="text" name="user_tema" />
      <textarea className={style.textarea} placeholder="Повідомлення" name="message" />
      <input className={style.button} type="submit" value="Надіслати" />
      <h6 className={style.send}>{isSend}</h6>
    </form>
  );
};
