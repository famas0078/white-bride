import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import white_bride from "../../images/white-bride.svg"
import exms from '../../images/Vector.png'
import Modal from "../modal/Modal"
const Header = (props) =>{

  const handleHref = () => {
    window.open('https://cross-house.ru/', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`container ${classes.wrapper}`} >
      <div className={`row`}>
        <div className={`col-8 col-md-8 col-lg-8 col-xxl-6 d-flex ${classes.wrapper_logo}`}>
          <img src={white_bride} alt="ald"/>
          <div className={classes.logo_text}>
            Церковь 
            <br/>
            “Белая невеста”
          </div>
        </div>
        <div className={`d-flex flex-column align-items-end col-4 col-md-4 col-lg-4 col-xxl-6 ${classes.wrapper_navbar}`}>
          <div className={`d-flex justify-content-center align-items-center`}>
            <img className={`mb-3 cursor-pointer ${classes.text_title}`} onClick={handleHref} src={exms} alt=""/>
            <div className={`text-start`}>
              <h5 className={`${classes.text_title}`}>
                Евангельский христианский
              </h5>
              <h5 className={`${classes.text_title}`}>
                миссионерский союз
              </h5>
            </div>
          </div>
          <div className={`d-flex`}>

            <Link className={`mx-3 ${classes.text_menu}`} to="/">
              Главная
            </Link>
            <Link className={`mx-3 ${classes.text_menu}`} to="/about">
              О нас
            </Link>
            <Link className={`mx-3 ${classes.text_menu}`} to="/about">
              Мероприятия
            </Link>
            <Link className={`mx-3 ${classes.text_menu}`} to="/about">
              Архив
            </Link>
            <div className={`ms-3 ${classes.connetion_wr}`}>
              <div className={classes.connetion} onClick={ () => props.setModalTarget(true)}>
                Связаться
              </div>
            </div>
            <div className={`${classes.menu_phone_but}`}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className={`menu ${classes.menu}`}>
                <li>
                  <Link to="/">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    Мероприятия
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    Архив
                  </Link>
                </li>
              </ul>
            </div>

          </div>
          
          {/* <div className={classes.menu_phone}>
            <Link to="/">
            Главная
            </Link>
            <Link to="/about">
              О нас
            </Link>
            <Link to="/about">
              Мероприятия
            </Link>
            <Link to="/about">
              Архив
            </Link>
          </div> */}
        </div>
      </div>
      <div className={classes.logo_text_phone}>
        <span className={`d-flex justify-content-center align-items-center mt-5 h-100 w-100`}>
          Церковь
          <br/>
          “Белая невеста”
        </span>
      </div>
    </div>
  );
}

export default Header;
