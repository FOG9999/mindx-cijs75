import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import ChildLevel3 from "./ChildLevel3";

const ChildLevelTwo = ({addOne}) => {

    const counter = useContext(CounterContext);
    let [forLv3, setForLv3] = useState({
        val: 0
    });

    useEffect(() => {
        console.log(counter);
    }, []);

    return <div className="ChildLevelTwo-container">
        Child level two. Receive from parent {counter.value}
        <ChildLevel3 fromLv2={forLv3} />
        <button onClick={() => addOne()}>Add one</button>        
    </div>
}

export default ChildLevelTwo;