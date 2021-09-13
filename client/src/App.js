import { useState,Fragment } from 'react'
import Search from './components/Search';
import Login from './components/Login';

import './App.css';



function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  if (isLoggedIn) {
    return (
       
      <Search/>
      
    ) 
  }
  
  if (!isLoggedIn) {
    return (
      <Login setLogin={setIsLoggedIn}/>
    )
  }
}

export default App;
