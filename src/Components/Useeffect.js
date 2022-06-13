import React, { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
const UseeffectHooks = () => {
  let [page, setPosts] = useState([]);
  useEffect(() => {
    async function getResults() {
      //   const results = await axios(
      //     `https://jsonplaceholder.typicode.com/${page}`
      //   );
      const results = await axios(`https://jsonplaceholder.typicode.com/posts`);

      setPosts(results.data);

      console.log(results.data, "USESTATE");
    }
    getResults();
  }, []);
  console.log(page, "STATE");

  const Nav = useNavigate();

  const click = (e) => {
    Nav("/FunctionComponent");
  };
  return (
    <div>
      {/* //   <button onClick={() => setPosts("posts")}>Posts</button>
    //   <button onClick={() => setPosts("comments")}>Comment</button> */}
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-secondary" onClick={() => click()}>
        Navigation
      </button>
    </div>
  );
};

export default UseeffectHooks;
