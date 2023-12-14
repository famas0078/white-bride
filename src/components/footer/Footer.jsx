import classes from "./footer.module.css";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg"

const Footer = () =>{

  return (
    <div className={`container ${classes.wrapper}`}>
      <div className={`row`}>
        <div className={`col-6 ${classes.left}`}>
          <div className={classes.contant_text}>
            Контакты
          </div>
          <div className={classes.contant_number}>
            +7(928)-429-73-37
          </div>
          <div className={classes.contant_email}>
            example@mail.ru
          </div>
        </div>
        <div className={`col-6 ${classes.right}`}>
          <div className={classes.icons}>
            <div className={classes.whatsapp}>
              <img src={whatsapp} alt="Whatsapp" className={classes.whatsapp}/>
            </div>
            <div className={classes.telegram}>
              <a src="https://t.me/voteyra">
                <img src={telegram} alt="Telegram" className={classes.telegram}/>
              </a>
            </div>
          </div>
          <h4 className={classes.signature}>
            @ Церковь " Белая Невеста "
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
