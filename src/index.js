// Импорт React из библиотеки react
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

// Импорт стилей из файла ./styles/main.css
import "./styles/main.css";


const container = document.getElementById("root");
const root = createRoot(container);


// Рендеринг приложения, обернутого в Router для обработки маршрутов
root.render(
  <Router>
    <App />
  </Router>
);
