import React from "react";
import style from "./Questions.module.scss";
import Question from "./Question";

const Questions = () => {
  const qaList = [
    {
      q: "Як користуватися додатком?",
      a: (
        <p>
          - Завантаж застосунок з Google Play <br />- Встанови застосунок на своєму
          телефоні з ОС Android
          <br /> - Зареєструйся як новий користувач додатку та розкажи про себе
          і своїх дітей, щоб застосунок міг знайти підходящу тобі групу догляду за
          дітьми
          <br /> - Обери собі групу поруч із твоїм домом чи роботою
          <br /> - Отримай контакти інших учасників групи, домовляйся із ними
          про умови спільного догляду
          <br /> - Насолоджуйся улюбленою роботою чи навчанням, поки твої діти
          під наглядом турботливих матусь!
          <br />
        </p>
      ),
    },
    {
      q: "Навіщо вам мої особисті дані та геолокація?",
      a: (
        <p>
          - Щоб підібрати тобі та твоїй дитині саме ту групу, якої ви
          потребуєте, ми маємо знати все про ваші потреби 😊
          <br /> Не хвилюйся, твої особисті дані захищені. Ми не разголошуємо та
          не передаємо твої дані третім особам, не використовуємо для розсилок
          реклами тощо.
        </p>
      ),
    },
    {
      q: "Яку відповідальність за моїх дітей несуть розробники додатку?",
      a: (
        <p>
          {" "}
          - За жодних обставин ми не несемо жодної відповідальності перед
          користувачами додатку та третіми особами за будь-які збитки чи шкоду
          будь-якого роду, понесені в результаті використання мобільного додатку
          або будь-якої інформації, наданої в мобільному додатку. Тому залишаючи
          свою дитину з іншими користувачами додатку, будь дуже уважною,
          пильною, та сама пересвідчись у безпеці своєї дитини!
        </p>
      ),
    },
    {
      q: "Скільки мені буде це коштувати та в яких країнах працює застосунок?",
      a: (
        <p>
          - Користування додатком повністю безкоштовно та не лімітовано за
          часом. Застосунок працює у будь-якій точці нашої планети, в усіх країнах,
          де в тебе буде мобільний зв’язок.
        </p>
      ),
    },
  ];

  return (
    <section className={style.questions}>
      <h2 className={style.title}>Поширені запитання</h2>
        {qaList.map((item, id) => {
          return <Question id={id} item={item} key={id} />;
        })}
    </section>
  );
};

export default Questions;
