import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
