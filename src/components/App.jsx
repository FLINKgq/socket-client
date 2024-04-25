// Импорт React из библиотеки react
import React from "react";

// Импорт компонента AppRoutes из файла AppRoutes.js
import AppRoutes from "./AppRoutes";

// Определение функционального компонента App
const App = () => (
  // Возвращение JSX элемента, содержащего корневой элемент приложения
  <div className="container">
    {/* Вставка компонента AppRoutes */}
    <AppRoutes />
  </div>
);

// Экспорт компонента App для использования в других частях приложения
export default App;
