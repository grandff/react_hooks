import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // chrome bug 때문에 넣어야함
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
