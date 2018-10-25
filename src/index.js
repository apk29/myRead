import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from "./components/registerServiceWorker";
import './index.css';
import { Router } from "react-router-dom";
import createHashHistory from "history/createHashHistory";

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
ReactDOM.render(
    <Router history={hashHistory}>
      <App />
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();