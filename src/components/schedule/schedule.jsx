import classes from "./schedule.module.css";

const Schedule = () =>{

  return (
    <div className={`container ${classes.wrapper}`}>
      <div className={`row`}>
        <div className={`col-12 col-md-12 col-lg-6 ${classes.left}`}>
          <div className={classes.schedule_title}>
            Богослужение каждое воскресенье в 10:00
          </div>
          <div className={classes.address_title}>
            Адрес:
          </div>
          <div className={classes.address_there}>
            Геленджикский проспект, 2Б, Г.Геленджик, Краснодарский край
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
