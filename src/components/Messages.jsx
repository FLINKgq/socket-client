import React from "react";

import styles from "../styles/Messages.module.css";

// Определение компонента Messages
const Messages = ({ messages, name }) => {
  // Возвращение JSX-разметки компонента Messages
  return (
    <div className={styles.messages}>
      {messages.map(({ user, message }, i) => {/* Маппинг сообщений */
        const itsMe =
          user.name.trim().toLowerCase() === name.trim().toLowerCase();
           // Установка класса стиля в зависимости от того, кто отправил сообщение
        const className = itsMe ? styles.me : styles.user;

        // Возвращение JSX-разметки для каждого сообщения
        return (
          <div key={i} className={`${styles.message} ${className}`}>
            <span className={styles.user}>{user.name}</span>

            <div className={styles.text}>{message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
