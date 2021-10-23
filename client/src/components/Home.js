import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>{user ? <h1>Welcome back {user._id} !!</h1> : <h1>Home</h1>}</div>
  );
}

export default Home;
