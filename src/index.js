import React from "react";
import ReactDOM from "react-dom/client"; // Asegúrate de que este import sea correcto
import App from './routes/App';

const rootElement = document.getElementById("app"); // Asegúrate de que este ID coincida
if (!rootElement) {
    console.error("No se pudo encontrar el elemento DOM con el ID 'app'");
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
