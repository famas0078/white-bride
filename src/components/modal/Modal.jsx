import classes from "./modal.module.css";
import React, { useState } from "react";
import telegramBotDataService from "../../services/telegramBotDataService";

const Modals = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const response = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {

      await telegramBotDataService.sendMessage(name, phone);
      setSuccess(true);

    } catch (err) {
      console.error("Ошибка при отправке сообщения:", err);
      setError("Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className={`${classes.wrapper}`} onClick={() => props.setModalTarget(false)}>
        <div className={`modals ${classes.modal}`} onClick={e => e.stopPropagation()}>
          {loading ? (
              <div className={`w-100 h-100 m-5 ${classes.list_wrapper}`}>
                <div className={classes.loader}></div>
              </div>
          ) : success ? (
              <div className={`w-100 h-100 ${classes.list_wrapper}`}>
                <div className={classes.close_bnt} onClick={() => props.setModalTarget(false)}>
                  <img src="https://i.postimg.cc/TPNWgn6r/x-01.png" alt="" />
                </div>
                <div className={`mb-3 ${classes.title}`}>
                  Успех!
                </div>
                <div className={`mb-5 ${classes.subtitle}`}>
                  Ваше сообщение успешно отправлено.
                </div>
                <button className={classes.submit} type="button" onClick={() => {
                  setSuccess(false);
                  props.setModalTarget(false);
                }}>
                  Закрыть
                </button>
              </div>
          ) : error ? (
              <div className={`w-100 h-100 ${classes.list_wrapper}`}>
                <div className={classes.close_bnt} onClick={() => props.setModalTarget(false)}>
                  <img src="https://i.postimg.cc/TPNWgn6r/x-01.png" alt="" />
                </div>
                <div className={`mb-3 ${classes.title}`}>
                  Ошибка!
                </div>
                <div className={`mb-5 ${classes.subtitle}`}>
                  {error}
                </div>
                <button className={classes.submit} type="button" onClick={() => {
                  setError("");
                  props.setModalTarget(false);
                }}>
                  Закрыть
                </button>
              </div>
          ) : (
              <div className={`w-100 h-100 ${classes.list_wrapper}`}>
                <div className={classes.close_bnt} onClick={() => props.setModalTarget(false)}>
                  <img src="https://i.postimg.cc/TPNWgn6r/x-01.png" alt="" />
                </div>
                <div className={classes.title}>
                  Связь
                </div>
                <div className={classes.subtitle}>
                  Напишите нам, мы будем рады помочь вам
                </div>
                <div className={classes.name}>
                  <input
                      type="text"
                      required
                      autoComplete="off"
                      placeholder="Имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={classes.description}>
                  <input
                      type="tel"
                      required
                      autoComplete="off"
                      placeholder="+7 (900) 111 - 11 - 11"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button className={classes.submit} type="button" onClick={response} disabled={loading}>
                  Связаться
                </button>
              </div>
          )}
        </div>
      </div>
  );
};

export default Modals;