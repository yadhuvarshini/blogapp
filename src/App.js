import './App.css';
import React , {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {Routes , Route } from "react-router";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {signOut} from "firebase/auth";
import {auth} from './firebase-config';


function App() {
  const [isAuth , setIsAuth] = useState(false);


  const signUserOut = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = '/login'
      });
  };
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      {!isAuth ? (
      <Link to="/login">Login</Link> 
      ):(
      <>
        <button className="btn btn-outline-dark text-white fs-4" onClick = {signUserOut}>Log Out</button>
        <Link to="/createpost">Create Post</Link>
      </>
      )}
    </nav>
      <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/createpost" element={<CreatePost  isAuth = {isAuth} />}>  </Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}>  </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
