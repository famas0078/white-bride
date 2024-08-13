import Button from "../../components/index/button/Button";
import Header from "../../components/header/Header";
import classes from "./main.module.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import React, { useState } from 'react';
import Schedule from "../../components/schedule/schedule";
import GeneralBlocks from "../../components/index/general_blocks/GeneralBlocks";
import Modal from '../../components/modal/Modal'
import AnimatedPage from "../../AnimatedPage";
import yandex_map from "../../images/yandex-map.png"
import telegram from "../../images/telegram.svg"

const Main = () => {
  const [activeButton, setActiveButton] = useState('Для детей');
  const [activeModal, settargetModal] = useState(false);

  // const handtargetclick = (elem) => {
  //   settargetModal(())
  // };
  const handleButtonClick = (label) => {
    setActiveButton((prevButton) => (prevButton === label ? null : label));
  };

  return (
    <AnimatedPage>
      <div className={`container ${classes.wrapper}`}>
        <div className="row">
          <div className={`col-12`}>
            <div className={`d-flex flex-column ${classes.main_image}`}>
              <h1>
                Богослужение каждое воскресенье в 10:00
              </h1>
              <div className={classes.down_subtitle}>
                <h5>
                  Адрес:
                </h5>
                <div className={`d-flex flex-column flex-xl-row justify-content-between ${classes.wrapper_more}`}>
                  <div className={`mb-3 mb-md-3 mb-sm-3 ${classes.wrapper_address}`}>
                    <a href="https://yandex.ru/maps/10990/gelendgik/?ll=38.076254%2C44.547407&mode=routes&rtext=44.547461%2C38.076454~55.755800%2C37.617300&rtt=auto&ruri=~&z=20" className={`me-2 ${classes.icon}`}>
                      <img src={yandex_map} alt=""/>
                    </a>
                    <div className={classes.text}>
                      Краснодарский край, г. Геленджик,
                      ул. Грибоедова, д. 29
                    </div>
                  </div>
                  <div className={classes.wrapper_who}>
                    <div className={classes.text}>
                      Пастор Щербаков Алексей Владимирович <br/>
                      <a className={classes.text_href} href="tel:+79384831056">
                        <b>+7 (938) 483 - 10 - 56</b>
                      </a>
                    </div>
                    <a href="https://t.me/voteyra" target="_blank" className={`ms-2 ${classes.icon}`}>
                      <img src={telegram} alt=""/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="row">*/}
        {/*  <div className={`col-12`}>*/}
        {/*    <div className={`d-flex align-items-center ${classes.main_image}`}>*/}
        {/*      <h1>*/}
        {/*        Евангельский Христианский Миссионерский Союз ( ЕХМС )*/}
        {/*      </h1>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="row">*/}
        {/*  <div className="col-xl-3 col-md-6 my-1">*/}
        {/*    <Button*/}
        {/*      label="Для детей"*/}
        {/*      isHighlighted={activeButton === 'Для детей'}*/}
        {/*      onClick={() => handleButtonClick('Для детей')}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-xl-3 col-md-6 my-1">*/}
        {/*    <Button*/}
        {/*      label="Для молодежи"*/}
        {/*      isHighlighted={activeButton === 'Для молодежи'}*/}
        {/*      onClick={() => handleButtonClick('Для молодежи')}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-xl-3 col-md-6 my-1">*/}
        {/*    <Button*/}
        {/*      label="Для общения"*/}
        {/*      isHighlighted={activeButton === 'Для общения'}*/}
        {/*      onClick={() => handleButtonClick('Для общения')}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-xl-3 col-md-6 my-1">*/}
        {/*    <Button*/}
        {/*      label="Для духовного роста"*/}
        {/*      isHighlighted={activeButton === 'Для духовного роста'}*/}
        {/*      onClick={() => handleButtonClick('Для духовного роста')}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*{activeButton && (*/}
        {/*  <div className={classes.block}>*/}
        {/*    {activeButton === 'Для молодежи' && <div className={`${classes.block_item}`}>*/}
        {/*      <div className={`row row_i`}>*/}
        {/*      <div className={`col-md-6 col-12 mb-5`}>*/}
        {/*      <div className={` left ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*            Воскресная школа*/}
        {/*            </div>*/}
        {/*            <div className={classes.block_item_h1_svg}>*/}
        {/*              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*              <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_under_text}>*/}
        {/*          Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      <div className={`col-md-6 col-12 mb-5 right`}>*/}
        {/*      <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*          Церковная молитва*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_h1_svg}>*/}
        {/*            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*            <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className={classes.block_item_under_text}>*/}
        {/*        Каждое воскресение проходит молитва за детей, и за их процветание в Боге.*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*    </div>}*/}
        {/*    {activeButton === 'Для детей' && */}
        {/*    <div className={`${classes.block_item}`}>*/}
        {/*      <div className={`row row_i`}>*/}
        {/*      <div className={`col-md-6 col-12 mb-5`}>*/}
        {/*      <div className={` left ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*            Воскресная школа*/}
        {/*            </div>*/}
        {/*            <div className={classes.block_item_h1_svg}>*/}
        {/*              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*              <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_under_text}>*/}
        {/*          Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      <div className={`col-md-6 col-12 mb-5 right`}>*/}
        {/*      <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*          Церковная молитва*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_h1_svg}>*/}
        {/*            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*            <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className={classes.block_item_under_text}>*/}
        {/*        Каждое воскресение проходит молитва за детей, и за их процветание в Боге.*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*    </div>}*/}
        {/*    {activeButton === 'Для общения' && <div className={`${classes.block_item}`}>*/}
        {/*      <div className={`row row_i`}>*/}
        {/*      <div className={`col-md-6 col-12 mb-5`}>*/}
        {/*      <div className={` left ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*            Воскресная школа*/}
        {/*            </div>*/}
        {/*            <div className={classes.block_item_h1_svg}>*/}
        {/*              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*              <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_under_text}>*/}
        {/*          Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      <div className={`col-md-6 col-12 mb-5 right`}>*/}
        {/*      <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*          Церковная молитва*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_h1_svg}>*/}
        {/*            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*            <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className={classes.block_item_under_text}>*/}
        {/*        Каждое воскресение проходит молитва за детей, и за их процветание в Боге.*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*    </div>}*/}
        {/*    {activeButton === 'Для духовного роста' && <div className={`${classes.block_item}`}>*/}
        {/*      <div className={`row row_i`}>*/}
        {/*      <div className={`col-md-6 col-12 mb-5`}>*/}
        {/*      <div className={` left ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*            Воскресная школа*/}
        {/*            </div>*/}
        {/*            <div className={classes.block_item_h1_svg}>*/}
        {/*              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*              <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_under_text}>*/}
        {/*          Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      <div className={`col-md-6 col-12 mb-5 right`}>*/}
        {/*      <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>*/}
        {/*        <div className={classes.block_item_h1}>*/}
        {/*          <div className={classes.block_item_h1_text}>*/}
        {/*          Церковная молитва*/}
        {/*          </div>*/}
        {/*          <div className={classes.block_item_h1_svg}>*/}
        {/*            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">*/}
        {/*            <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className={classes.block_item_under_text}>*/}
        {/*        Каждое воскресение проходит молитва за детей, и за их процветание в Боге.*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*      </div>*/}
        {/*    </div>}*/}
        {/*  </div>*/}
        {/*)}*/}
        {/*<Schedule/>*/}
        {/*<div className={`row ${classes.lasts}`}>*/}
        {/*    <div className={`col-12 col-md-6 `}>*/}
        {/*      <GeneralBlocks title="Миссия" label=" Целью церкви является изменение жизней людей через познание и веру в Христа, создание более справедливого и мирного мира, а также оказание помощи и поддержки нуждающимся."/>*/}
        {/*      <GeneralBlocks title="Основы веры" label=" Спасение возможно только через веру в Иисуса Христа как Господа и Спасителя. Верующие призываются капитализировать на благодати Божьей через свою веру, а не основываться на своих собственных усилиях."/>*/}
        {/*    </div>*/}
        {/*    <div className={`col-12 col-md-6 ${classes.wrapper_pict}`}>*/}
        {/*      <div className={classes.pict}>*/}

        {/*      </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
      </div>
    </AnimatedPage>
  );
};




export default Main;
