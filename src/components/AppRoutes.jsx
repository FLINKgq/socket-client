// Импорт React из библиотеки react
import React from "react";

// Импорт компонентов Routes и Route из библиотеки react-router-dom
import { Routes, Route } from "react-router-dom";

// Импорт компонентов Main и Chat из соответствующих файлов
import Main from "./Main";
import Chat from "./Chat";

// Определение компонента AppRoutes
const AppRoutes = () => (
  // Возвращение компонента Routes, который определяет маршрутизацию в приложении
  <Routes>
    {/* Маршрут для главной страницы */}
    <Route path="/" element={<Main />} />
    
    {/* Маршрут для страницы чата */}
    <Route path="/chat" element={<Chat />} />
  </Routes>
);

// Экспорт компонента AppRoutes для использования в других частях приложения
export default AppRoutes;
