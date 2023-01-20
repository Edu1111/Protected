import React, { useState } from 'react'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Homee from '../pages/Homee'
import { Landing,Home, Dashboard, Analitycs, Admin } from '../pages/Index'
import Logo from '../assets/logo.png'
import style from './Nab.css';

const Nab = () => {

  const [user,setUser] = useState ({
    email: "",
      discordId: "",
  })

  const login = () =>{

    setUser({
      email: "",
      discordId: "",
    })
  }

  const logout = () => setUser(null)
  return (
    <BrowserRouter>
      <Navi/>
      <div>
      <label htmlFor="email">Email</label> <br />
      <input type="text " placeholder='Your email' readOnly/> <br />
      <label htmlFor="email">ID</label> <br />
      <input type="text " placeholder='Your discord' readOnly/><br />

      {
        user ? (
          <button className='Button tres' onClick={logout}>Logout</button>

        ):(
          <button className='Button dos' onClick={login}>Login</button>

        )
      }



      </div>


    <Routes >
      <Route index element={<Landing/>}/>
      <Route path='/landing' element={<Landing/>}></Route>
      <Route path='/home' element={<Home user={user}/>}></Route>
      <Route path='/dashboard' element={<Dashboard user={user}/>}></Route>
      <Route path='/analitycs' element={<Analitycs user={user}/>}></Route>
      <Route path='/admin' element={<Admin user={user}/>}></Route>
    </Routes>

    </BrowserRouter> 
  )
}

function Navi (){
  return <nav className='navigation'>
        <div className='logo'>
       <img src={Logo} alt="Logo Image" style={{width:'80px'}}/>
      </div>

        <ul>
    <li>
     <Link to="/landing">Home</Link>
  </li>
  <li>
     <Link to="/home">About me</Link>
  </li>
  <li>
    <Link to="/dashboard">Hello</Link>
  </li>
  <li>
    <Link to="/analitycs">Skills</Link>
  </li>
  <li>
    <Link to="/admin">Contact</Link>
  </li>
  <li>
    
  </li>
</ul>

  </nav>
}


export default Nab