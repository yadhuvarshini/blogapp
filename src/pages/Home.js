import React,{useState,useEffect} from 'react';
import {getDocs , collection} from 'firebase/firestore';
import {auth,db} from '../firebase-config';

 const Home = ( {isAuth} ) => {
  const [postList , setPostList] = useState([]);
  const postsCollection = collection(db,"posts");

  useEffect(() =>{
    const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPostList(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    };

    getPosts();
  });

  
  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title} </h1>
              </div>
              
            </div>
            <div className="postTextContainer">  </div>
            <h3>@{post.author.name}</h3>
            {post.posttext}
                                                                                                 
          </div>
        );
        })}
    </div>
  )
}

export default Home;
