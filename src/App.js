import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Profile from './components/Profile'
import ListUsers from './components/ListUsers'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css';

function App() {
const [isLogin, setIsLogin] = useState(false)
const toggleIsLogin=()=>{
setIsLogin(!isLogin)
}
  return (
    <Router>
    <NavBar  isLogin={isLogin} toggleIsLogin={toggleIsLogin}/>
     <Switch>
      <Route exact path='/' component={Home} />
     <Route  path='/profile/:userId' >
      <Profile  isLogin={isLogin} />
      </Route>
     <Route path='/listUsers'  >
       <ListUsers isLogin={isLogin} />
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
