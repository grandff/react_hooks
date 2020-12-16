import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const useClick = (onclick) => {
  if (typeof onclick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      // component did mount
      element.current.addEventListener("click", onclick);
    }

    return () => {
      if (element.current) {
        // component will unmount
        element.current.removeEventListener("click", onclick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const potato = useRef();
  //setTimeout(() => potato.current.focus(), 3000);

  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <input ref={potato} placeholder="la" />
    </div>
  );
}
