import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Username({ isAuth }) {
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
    <div>

      <div>
      
        {postLists.map((post) => {
          return (
            <div>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <div><h1>hi {post.author.name} </h1></div>
            )}
          </div>
          );
        })}
    </div>
    </div>
  );
}

export default Username;