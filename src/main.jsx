import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { alfred } from "./assets/redux-stuff/reducer.jsx";

const depo = createStore(alfred, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={depo}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
