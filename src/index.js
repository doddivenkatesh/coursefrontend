import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Toaster } from "react-hot-toast";
import { store } from "./ReduxConcepts/Saga-StoreCm/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster />
  </React.StrictMode>
);
