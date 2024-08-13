import classes from "./loading.module.css";
import React, {useEffect, useState} from "react";
import triggerBrowserReflow from "react-bootstrap/triggerBrowserReflow";


const Loading = (props) =>{

  const [isOverdue, setIsOverdue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setIsOverdue(true)
    },2000)

    return () => clearTimeout(timer);

  }, [])

  return (
      <div className={`${classes.wrapper_loading} ${isOverdue ? classes.wrapper_loading_overdue : ""}`}>
        <div className={classes.container}>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
        </div>
      </div>
  );
}

export default Loading;
