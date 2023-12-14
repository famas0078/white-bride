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
            <div className={`d-flex align-items-center ${classes.main_image}`}>
              <h1>
                Евангельский Христианский Миссионерский Союз ( ЕХМС )
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 my-1">
            <Button
              label="Для детей"
              isHighlighted={activeButton === 'Для детей'}
              onClick={() => handleButtonClick('Для детей')}
            />
          </div>
          <div className="col-xl-3 col-md-6 my-1">
            <Button
              label="Для молодежи"
              isHighlighted={activeButton === 'Для молодежи'}
              onClick={() => handleButtonClick('Для молодежи')}
            />
          </div>
          <div className="col-xl-3 col-md-6 my-1">
            <Button
              label="Для общения"
              isHighlighted={activeButton === 'Для общения'}
              onClick={() => handleButtonClick('Для общения')}
            />
          </div>
          <div className="col-xl-3 col-md-6 my-1">
            <Button
              label="Для духовного роста"
              isHighlighted={activeButton === 'Для духовного роста'}
              onClick={() => handleButtonClick('Для духовного роста')}
            />
          </div>
        </div>
        {activeButton && (
          <div className={classes.block}>
            {activeButton === 'Для молодежи' && <div className={`${classes.block_item}`}>
              <div className={`row row_i`}>
              <div className={`col-md-6 col-12 mb-5`}>
              <div className={` left ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                    Воскресная школа
                    </div>
                    <div className={classes.block_item_h1_svg}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                      <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className={classes.block_item_under_text}>
                  Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!
                  </div>
              </div>
              </div>
              <div className={`col-md-6 col-12 mb-5 right`}>
              <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                  Церковная молитва
                  </div>
                  <div className={classes.block_item_h1_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                    <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={classes.block_item_under_text}>
                Каждое воскресение проходит молитва за детей, и за их процветание в Боге.
                </div>
              </div>
              </div>
              </div>
            </div>}
            {activeButton === 'Для детей' && 
            <div className={`${classes.block_item}`}>
              <div className={`row row_i`}>
              <div className={`col-md-6 col-12 mb-5`}>
              <div className={` left ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                    Воскресная школа
                    </div>
                    <div className={classes.block_item_h1_svg}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                      <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className={classes.block_item_under_text}>
                  Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!
                  </div>
              </div>
              </div>
              <div className={`col-md-6 col-12 mb-5 right`}>
              <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                  Церковная молитва
                  </div>
                  <div className={classes.block_item_h1_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                    <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={classes.block_item_under_text}>
                Каждое воскресение проходит молитва за детей, и за их процветание в Боге.
                </div>
              </div>
              </div>
              </div>
            </div>}
            {activeButton === 'Для общения' && <div className={`${classes.block_item}`}>
              <div className={`row row_i`}>
              <div className={`col-md-6 col-12 mb-5`}>
              <div className={` left ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                    Воскресная школа
                    </div>
                    <div className={classes.block_item_h1_svg}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                      <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className={classes.block_item_under_text}>
                  Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!
                  </div>
              </div>
              </div>
              <div className={`col-md-6 col-12 mb-5 right`}>
              <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                  Церковная молитва
                  </div>
                  <div className={classes.block_item_h1_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                    <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={classes.block_item_under_text}>
                Каждое воскресение проходит молитва за детей, и за их процветание в Боге.
                </div>
              </div>
              </div>
              </div>
            </div>}
            {activeButton === 'Для духовного роста' && <div className={`${classes.block_item}`}>
              <div className={`row row_i`}>
              <div className={`col-md-6 col-12 mb-5`}>
              <div className={` left ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                    Воскресная школа
                    </div>
                    <div className={classes.block_item_h1_svg}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                      <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className={classes.block_item_under_text}>
                  Увлекательное знакомство с Библией, новые друзья и вдохновение на добрые дела. Успейте занять место в группе!
                  </div>
              </div>
              </div>
              <div className={`col-md-6 col-12 mb-5 right`}>
              <div className={`${classes.block_item_inner_r} ${classes.block_item_inner}`}>
                <div className={classes.block_item_h1}>
                  <div className={classes.block_item_h1_text}>
                  Церковная молитва
                  </div>
                  <div className={classes.block_item_h1_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                    <path d="M1 1L8 8L0.999999 15" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className={classes.block_item_under_text}>
                Каждое воскресение проходит молитва за детей, и за их процветание в Боге.
                </div>
              </div>
              </div>
              </div>
            </div>}
          </div>
        )}
        <Schedule/>
        <div className={`row ${classes.lasts}`}>
            <div className={`col-12 col-md-6 `}>
              <GeneralBlocks title="Миссия" label=" Целью церкви является изменение жизней людей через познание и веру в Христа, создание более справедливого и мирного мира, а также оказание помощи и поддержки нуждающимся."/>
              <GeneralBlocks title="Основы веры" label=" Спасение возможно только через веру в Иисуса Христа как Господа и Спасителя. Верующие призываются капитализировать на благодати Божьей через свою веру, а не основываться на своих собственных усилиях."/>
            </div>
            <div className={`col-12 col-md-6 ${classes.wrapper_pict}`}>
              <div className={classes.pict}>

              </div>
            </div>
        </div>
      </div>
    </AnimatedPage>
  );
};




export default Main;
