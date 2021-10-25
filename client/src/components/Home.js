import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h1>Feedback System !</h1>
      <p>Collect feedback from your Users</p>
    </div>
  );
}

export default Home;
