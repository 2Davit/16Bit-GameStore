import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import dotenv from "dotenv";
import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";
dotenv.config();

/* axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
 */ axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <Auth0Provider
    domain="16bit-game-store.us.auth0.com"
    clientId="iLuXZmxvUskbRShj2amEbKowGWdpP6ka"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
