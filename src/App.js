import React from 'react';
import {useState} from 'react'
import {useEffect} from 'react'
import fire from './config/config'
import './App.module.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login';

function App() {
const [isLoggedin, setLoggedin] = useState(true)


function authListener() {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    user? setLoggedin(false): setLoggedin(true)
  });
}

useEffect(() => {
  authListener()
  console.log('use effect running')
 
},[]);

  return (
    <main className="main">

    <header className="header">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Logo</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Register</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Courses</a>
    </li>
     
  </ul>
  <ul className="ml-auto navbar-nav">
  <li className=" nav-item">
      <a onClick={()=>fire.auth().signOut()} className="nav-link" href="#">Logout</a>
    </li>
    </ul>
</nav>

    </header>
    
    {!isLoggedin ? <Home/>: <Login/>}
    
    <footer className="footer">

    </footer>

    </main>

  );
}

export default App;
