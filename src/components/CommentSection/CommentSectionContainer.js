// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const { comments } = props

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        comments.map( commentData => {
        return <Comment key={commentData} commentData={commentData}/>
        })
      }
      {
        <CommentInput />
      }
    </div>
  );
};

export default CommentSection;
