import React , {useState,useEffect} from 'react';
import {addDoc , collection} from 'firebase/firestore';
import {db, auth } from "../firebase-config";
import {useNavigate} from 'react-router-dom';

const CreatePost = ( {isAuth} ) => {


  const [title,setTitle] = useState("");
  const [posttext , setPosttext] = useState("");

  const postsCollection = collection(db , "posts");
  let navigate = useNavigate();

  const createPost = async() => {
      await addDoc(postsCollection, {
        title, 
        posttext , 
        author: {name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
      navigate("/")
  };

  useEffect( () => {
    if(!isAuth) {
      navigate("/login");
    }
  })

  return (
    <div className="createPostPage">
      <div className="cpContainer">
          <h1>Create A post</h1>
          <div className="inputGp">
            <label>Title:</label>
            <input type="text" 
              placeholder="Title" 
              onChange ={(event) => {
                setTitle(event.target.value);
              }} 
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea 
              placeholder="Post" 
              onChange = {(event) => {
                setPosttext(event.target.value);
              }}
              >
            </textarea>
          </div>

          <button onClick = {createPost} >Submit</button>
      </div>
    </div>
  )
}

export default CreatePost;