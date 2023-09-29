import React from "react";
import style from "./About.module.scss";
import location from '../assets/location.svg'

const About = () => {
  return (
    <div className={style.about_container}>
      <h2>Як це працює?</h2>
      <p>
        Вам потрібно йти на роботу? Ви шукаєте дитячий садок для своїх дітей?
        Більшість послуг дитячого садка недоступні або занадто дорогі для вас?
        Ми допоможемо знайти поруч мам з такими ж проблемами!{" "}
      </p>
      <div className={style.boxes}>
        <div className={style.box}>
          <img src={location} alt='svg'></img>
          <h3>Обирай локацію</h3>
          <p>знаходь поблизу себе інших мам, що також потребують догляду за своєю дитиною</p>
        </div>
        <div className={style.box}>
          <h3>Створюй групи</h3>
        </div>
        <div className={style.box}>
          <h3>Працюй спокійно</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
