import React, { useEffect, useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function App() {
  const sayHello = () => console.log("heello");
  /*
    useEffect == componentdidmount + componentdidupdate
  */
  // useEffect(() => {
  //   // == componentdidmount + componentdidupdate
  //   sayHello();
  // });

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]); // number가 바뀌면 실행
  useEffect(sayHello, []); // 실행 자체가 안됨
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber - 1)}>{aNumber}</button>
    </div>
  );
}
