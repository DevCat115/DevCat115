import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./globals.css";
import 'react-notifications-component/dist/theme.css';
import "animate.css";
import { ReactNotifications } from "react-notifications-component";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactNotifications />
    <App />
  </React.StrictMode>
);
