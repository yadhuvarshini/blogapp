import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Profile({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  var postsCollection = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
      const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

 
  return (
    <div className="homePage container">

      <div className="row">
      
        {postLists.map((post) => {
          return (
            
            <div className="col-lg-4">
                 
                <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  
                  <div className="post card">
                  <div className="postHeader">
                    <div className="title card-title">
                      <h1 key="{post.title}"> {post.title}</h1>
                      {/* <h4>By {post.author.name}</h4> */}
                    </div>
                    
                    <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      {" "}
                      &#128465;
                    </button>
                  )}
                </div>
  
                  </div>
  
                  <div className="postTextContainer">  
                        <span key="{post.postText}">{post.posttext}</span> 
                  </div>    
                </div>
                )}
              </div>

            </div>
          );
        })}
    </div>
    </div>
  );
}

export default Profile;