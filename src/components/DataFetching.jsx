import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts ")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Error While fetching Data");
      });
  }, []);
  return (
    <>
      List of posts
      {posts.length
        ? posts.map((post) => <div key={post.id}>{post.title}</div>)
        : null}
      {errorMsg ? <div>{errorMsg}</div> : null}
    </>
  );
};

export default DataFetching;
