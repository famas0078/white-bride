import Button from "../../components/index/button/Button";
import Header from "../../components/header/Header";
import classes from "./wrapper.module.css";
import Footer from "../../components/footer/Footer"
import { useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import Modals from "../../components/modal/Modal";

const Wrapper = () =>{

  const [isModal,setModalTarget] = useState(false);

  return (
    <div className={classes.wrapper}>

      <Header setModalTarget={setModalTarget}/>
      <Outlet />
      <Footer />
      {isModal && <Modals isModal={isModal} setModalTarget={setModalTarget}/>}
    </div>
  );
}

export default Wrapper;
