import React from "react";
import style from '../../scss/Protocol.module.scss'

const Refusal = () => {
  return (
    <div className={style.container}>
      <h3>Відмова від відповідальності:</h3>
      <p>
        Застосунок «Мама не дома» — платформа для об’єднання батьків для
        організації догляду за дітьми. Важливо зазначити, що розробники
        Застосунку не несуть жодної відповідальності за безпеку, законність або
        якість догляду за дітьми, які надають інші користувачі. Користувачі
        Застосунку несуть повну відповідальність за свою взаємодію та угоди з
        іншими користувачами. Розробники Застосунку також наполегливо
        рекомендують проявляти належну обачність і обережність, організовуючи
        догляд за дітьми.
      </p>
    </div>
  );
};

export default Refusal;
