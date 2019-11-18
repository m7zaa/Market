import React from "react";
import { Link } from "react-router-dom";

function Error404(){
  return (
    <div style={{textAlign: "center", padding: "404px"}}>
      <h1>CROP FAILURE 404! </h1>
      <h2>The page  does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

export default Error404;