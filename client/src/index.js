import React,{createContext} from 'react';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import DeviceStore from './store/deviceStore';
import UserStore from './store/userStore';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const Context = createContext(null)

root.render(
  <StrictMode>
    <Context.Provider value = {{
      user: new UserStore(),
      device: new DeviceStore()
    }}>
         <App />
    </Context.Provider>
 
  </StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

