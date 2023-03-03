import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Context from "./store/Context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux Setup
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // for persisting data
import { store, persistor } from "./Redux/store";

// subscribe

// subscribe this function is used for console the current state if there is no Redux extension there
// store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
