import React from "react";
import style from "./Protocol.module.scss";

const Refusal = () => {
  return (
    <div className={style.container}>
      <h3>Відмова від відповідальності:</h3>
      <p style={{ marginBottom: "5rem"}}>
        Застосунок «Мама не дома» — платформа для об’єднання батьків для
        організації догляду за дітьми. Важливо зазначити, що розробники
        Застосунку <u><b>не несуть жодної відповідальності</b></u> за безпеку, законність або
        якість догляду за дітьми, які надають інші користувачі. Користувачі
        Застосунку несуть повну відповідальність за свою взаємодію та угоди з
        іншими користувачами. Розробники Застосунку також наполегливо
        рекомендують всім користувачам проявляти належну обачність і
        обережність, організовуючи догляд за своїми дітьми.
      </p>
    </div>
  );
};

export default Refusal;
