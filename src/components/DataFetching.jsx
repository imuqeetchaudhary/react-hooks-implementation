import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Error While fetching Data");
      });
  }, [idFromButton]);

  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Data
      </button>
      <div>{post.title}</div>
      {/* {posts.length
        ? posts.map((post) => <div key={post.id}>{post.title}</div>)
        : null} */}
      {errorMsg ? <div>{errorMsg}</div> : null}
    </>
  );
};

export default DataFetching;
