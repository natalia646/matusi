import React, { useEffect, useRef } from "react";
import style from "../scss/About.module.scss";
import location from "../components/assets/location.svg";
import group from "../components/assets/group.svg";
import purse from "../components/assets/purse.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "./redux/slices/activeSlice";

const img = [location, group, purse];
const h3 = ["Обирай локацію", "Створюй групи", "Працюй спокійно"];
const p = [
  "знаходь поблизу себе інших мам, що також потребують догляду за своєю дитиною",
  "шукай чи створюй групи для вирішення спільної проблеми за бажаним місцем проживання, віком дитини, розкладом мами",
  "та допомагай іншим мамам отримати таку можливість, завдяки догляду за вашими дітьми",
];



const About = () => {
  const dispatch = useDispatch();
  const detailsRef = useRef();
  const { details } = useSelector((state) => state.activeIndex);

  useEffect(() => {
    if (details) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
      dispatch(setDetails(false));
    }
  }, [details]);

  return (
    <div className={style.container}>
      <div className={style.desc} ref={detailsRef}>
        <h2>Як це працює?</h2>
        <p>
          Вам потрібно йти на роботу? Ви шукаєте дитячий садок для своїх дітей?
          <br />
          Більшість послуг дитячого садка недоступні або занадто дорогі для вас?
          <br />
          Ми допоможемо знайти поруч мам з такими ж проблемами!
        </p>
      </div>

      <div className={style.boxes}>
        {img.map((item, i) => {
          return (
            <article key={i} className={style.box}>
              <img src={item} alt="svg"></img>
              <h3>{h3[i]}</h3>
              <p>{p[i]}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default About;
