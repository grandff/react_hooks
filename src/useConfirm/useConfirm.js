import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const useConfirm = (message = "", callback, rejection) => {
  if (!callback || typeof callback !== "function") {
    return;
  }

  if (!rejection || typeof rejection !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
