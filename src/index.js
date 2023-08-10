import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import MainFile from './MainFile/MainFile.jsx';
import Login from './login';



ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Login />
  </>
);
reportWebVitals();
