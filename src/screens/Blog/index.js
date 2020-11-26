import React, { useEffect }  from "react";
import { Button } from "reactstrap";
import Post from "./Post";

const Blog = () => {
  let blogs = [];
  // su dung loop de tai su dung lai component con
  const listItems = blogs.map((item, index) => {
    return <Post key={index} item={item} />
  });

  return (
    <>
      {/* hien thi Blog list tu cac component da duoc render o tren */}
      <ul className="list-items">{listItems}</ul>
    </>
  );
};

export default Blog;
