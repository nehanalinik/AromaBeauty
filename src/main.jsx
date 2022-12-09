import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        toastOptions={{
          className: "w-[250px] md:w-auto",
        }}
        position="top-center"
        reverseOrder={false}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
