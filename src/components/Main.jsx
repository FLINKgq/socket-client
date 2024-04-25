import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Импорт стилей
import styles from "../styles/Main.module.css";

// Объект с полями формы
const FIELDS = {
  NAME: "name",
  ROOM: "room",
};

// Определение компонента Main
const Main = () => {
  // Деструктуризация полей формы
  const { NAME, ROOM } = FIELDS;

  // Состояние для значений полей формы
  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  // Обработчик изменения значения в полях формы
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  // Обработчик клика по кнопке
  const handleClick = (e) => {
    // Проверка, все ли поля заполнены
    const isDisabled = Object.values(values).some((v) => !v);

    // Если не все поля заполнены, предотвращаем действие по умолчанию
    if (isDisabled) e.preventDefault();
  };

  // Возвращение JSX-разметки компонента Main
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>

        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              value={values[NAME]}
              placeholder="Username"
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="room"
              placeholder="Room"
              value={values[ROOM]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          {/* Кнопка для перехода в комнату чата */}
          <Link
            className={styles.group}
            onClick={handleClick}
            to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
          >
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
