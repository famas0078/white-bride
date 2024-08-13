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
          <a href="mailto:voteyra@gmail.com" className={`cursor-pointer ${classes.contant_email}`}>
            voteyra@gmail.com
          </a>
        </div>
        <div className={`col-6 ${classes.right}`}>
          <div className={classes.icons}>
          <a href="https://wa.me/9384831056" className={classes.whatsapp}>
              <img src={whatsapp} alt="Whatsapp" className={classes.whatsapp}/>
            </a>
            <a href="https://t.me/voteyra" target="_blank" className={classes.telegram}>
                <img src={telegram} alt="Telegram" className={classes.telegram}/>
            </a>
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
