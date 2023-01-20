import {React,useState} from 'react'
import { Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import Logo from '../assets/logo.png'
import { Dashboard,Home,Landing,Analitycs,Admin} from '../pages/Index';
 import './Option.css'


const Opti = () => {

  return (
    <nav>
    <ul>
    <li>
     <Link to="/landing">Landing</Link>
  </li>
  <li>
     <Link to="/home">Home</Link>
  </li>
  <li>
    <Link to="/dashboard">Dashboard</Link>
  </li>
  <li>
    <Link to="/analitycs">Analitycs</Link>
  </li>
  <li>
    <Link to="/admin">Admin</Link>
  </li>
</ul>
</nav>

  )
}

function Navigationn() { 
      


}

export default Opti