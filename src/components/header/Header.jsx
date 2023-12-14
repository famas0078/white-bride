import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import Modal from "../modal/Modal"
const Header = (props) =>{
  
  return (
    <div className={`container ${classes.wrapper}`} >
      <div className={`row`}>
        <div className={`col-6 d-flex ${classes.wrapper_logo}`}>
          <img src="https://i.postimg.cc/vZXHNb1V/logo.png" alt="ald"/>
          <div className={classes.logo_text}>
            Церковь 
            <br/>
            “Белая невеста”
          </div>
        </div>
        <div className={`col-6 ${classes.wrapper_navbar}`}>
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
          <div className={classes.connetion_wr}>
            <div className={classes.connetion} onClick={ () => props.setModalTarget(true)}>
              Связаться
            </div>
          </div>
          <div className={classes.menu_phone_but}>
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
    </div>
  );
}

export default Header;
