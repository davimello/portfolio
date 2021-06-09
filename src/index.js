import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as BumbagProvider } from "bumbag";

const theme = {
  palette: {
    primary: "#121212",
    secondary: "#939394",
    terciary: "#5863D8",
    contrast: "#f5f5f5",

    modes: {
      dark: {
        background: "#121212",
        text: "#f5f5f5",
        primary: "#f5f5f5",
        contrast: "#121212",
      },
    },
  },
};

const Root = () => (
  <BumbagProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </BumbagProvider>
);

render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
