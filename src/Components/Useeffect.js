import React, { useState, useEffect } from "react";

import axios from "axios";

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
  return (
    <div>
      {/* //   <button onClick={() => setPosts("posts")}>Posts</button>
    //   <button onClick={() => setPosts("comments")}>Comment</button> */}
    </div>
  );
};

export default UseeffectHooks;
