import { Link } from "react-router-dom";
import AnimatedPage from "../../AnimatedPage";
import classes from "./about.module.css";
import settings from "../../images/settings.png"

const About = () =>{
  return (
    <div className={classes.wrapper}>
      <AnimatedPage>
        <div className={`container ${classes.wrapper}`}>
          <div className={`row ${classes.contant}`}>
            <div className={`col-12 col-md-6 ${classes.img}`}>
              <img src={settings} alt="error"/>
            </div>
            <div className={`col-12 col-md-6 ${classes.discription}`}>
              <div className={classes.title}>
                Ой!
              </div>
              <div className={classes.subtitle}>
                Пока что страница находится в разработке!
                <br/>
                Просим прощение за неудобство
              </div>
              <Link to="/" className={classes.btn_back}>
                Вернуться
              </Link>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
}

export default About;
