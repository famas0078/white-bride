import classes from "./modal.module.css";
import React from "react";

const Modals = (props) =>{

  return (
    <div className={`${classes.wrapper}`} onClick={ () => props.setModalTarget(false)}>
      <div className={`modals ${classes.modal}`} onClick={ e => e.stopPropagation()}>
        <div className={classes.close_bnt} onClick={ () => props.setModalTarget(false)}>
          <img src="https://i.postimg.cc/TPNWgn6r/x-01.png" alt=""/>
        </div>
        <div className={classes.title}>
          Связь
        </div>
        <div className={classes.subtitle}>
          Напишите нам, мы будем рады помочь вам
        </div>
        <div className={classes.name}>
          <input type="text" required autocomplete="off" placeholder="Имя"/>
        </div>
        <div className={classes.description}>
          <input type="tel" required autocomplete="off" placeholder="+7 (900) 111 - 11 - 11"/>
        </div>
        <button className={classes.submit} type="submit">
          Связаться
        </button>
      </div>
    </div>
  );
}

export default Modals;
