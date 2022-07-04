import React, {useEffect, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import {AuthContext, FirebaseContext} from './store/FirebaseContext'



function App() {


  const {setUser} = useContext(AuthContext)

  const {firebase} = useContext(FirebaseContext)



  useEffect(() => {

    // console.log(user);

      firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
  });
    
  },[])
  


  return (

    <Router>

    <div>

      <Routes>

        <Route path='/' exact element={ <Home />} />

        <Route path='/signup' element={ <Signup />} />

        <Route path='/login' element={ <Login />} />

        <Route path='/create' element={ <Create />} />


     
      </Routes>
    </div>

    </Router>
  );
}

export default App;
