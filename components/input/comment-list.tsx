import { FC } from "react";

import { Comment } from "@/interfaces/comment.interface";

import classes from "./comment-list.module.css";

const CommentList: FC<{ comments: Comment[] }> = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
