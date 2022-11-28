import './App.css';
import React , {useState} from 'react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {signOut} from "firebase/auth";
import {auth} from './firebase-config';
import Profile from './pages/Profile'

function App() {
  const [isAuth , setIsAuth] = useState(localStorage.getItem("isAuth"));;


  const signUserOut = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = '/login'
      });
  };
  
  return (

    <HashRouter>
    <div className="nav">
      <Link to="/">Home</Link>
      {!isAuth ? (
      <Link to="/login">Login</Link> 
      ):(
      <>
        <button className="btn btn-outline-dark text-white fs-4" onClick = {signUserOut}>Log Out</button>
        <Link to="/createpost">Create Post</Link>
        <Link to="/profile">Profile</Link>
      </>
      )}
    </div>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />}>  </Route>
        <Route path="/createpost" element={<CreatePost  isAuth = {isAuth} />}>  </Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}>  </Route>
        <Route path="/profile" element={<Profile isAuth={isAuth} />}>  </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
