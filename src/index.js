import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import {FirebaseContext} from "./store/FirebaseContext";
import Context from './store/FirebaseContext'
import firebase from './firebase/config'

// ReactDOM.render(
//   <FirebaseContext.Provider value={{firebase}} >
//     <App />
//   </FirebaseContext.Provider>,

//   document.getElementById("root")
// );

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>

      <Context>
      <App />
      </Context>
      
    </FirebaseContext.Provider>
  </React.StrictMode>
);
