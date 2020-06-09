//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

import dummyData from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data

  const posts = dummyData

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      posts.map(postsObject => {
        return (
          <Post
            key={dummyData.username }
            postData={postsObject}
            />
        )
      })
      
      }
    </div>
  );
};

export default PostsPage;
