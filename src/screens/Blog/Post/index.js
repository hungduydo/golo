import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  const { item } = props;
  return (
    <li>
      <h3><Link to={`/blog/${item.id}`}>{item.title}</Link></h3>
      <p>{item.body}</p>
    </li>
  );
};

export default Post;
