import { useEffect } from "react";
import { useState } from "react";
import ChildLevelOne from "./ChildLevel1";
import { CounterContext } from "./CounterContext";

const Parent = () => {
  let [count, setCount] = useState(0);

  const onClick = () => {
    setCount(++count);
  };

  // useEffect(() => {
  //     console.log(count);
  // }, [count])

  return (
    <div className="parent-container">
      This is parent
      <CounterContext.Provider value={{value: count, addOne: onClick}}>
        <ChildLevelOne />
      </CounterContext.Provider>
    </div>
  );
};

export default Parent;
