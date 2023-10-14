import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "../scss/Form.module.scss";

export const Form = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tema, setTema] = useState("");
  const [message, setMessage] = useState("");

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
          setIsSend("Повідомлення надіслано");
          setName("");
          setEmail("");
          setTema("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setIsSend("Повідомлення невдалося надіслати");
        }
      );
  };

  return (
    <form className={style.form} ref={form} onSubmit={sendEmail}>
      <input
        placeholder="Ім'я*"
        type="text"
        name="user_name"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Email*"
        type="email"
        name="user_email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Тема"
        type="text"
        name="user_tema"
        value={tema}
        onChange={(e) => {
          setTema(e.target.value);
        }}
      />
      <textarea
        className={style.textarea}
        placeholder="Повідомлення*"
        name="message"
        required
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div className={style.sending}>
        <h6 className={style.send}>{isSend}</h6>
        <input className={style.button} type="submit" value="Надіслати" />
      </div>
    </form>
  );
};
