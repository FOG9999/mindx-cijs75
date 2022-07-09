import ChildLevelTwo from "./ChildLevel2";
import { CounterContext } from "./CounterContext";

const ChildLevelOne = () => {
  return (
    <div className="ChildLevelOne-container">
      Child level one. 

      <CounterContext.Consumer>
        {({ value, addOne }) => 
          <ChildLevelTwo addOne={addOne} />
        }
      </CounterContext.Consumer>
    </div>
  );
};

export default ChildLevelOne;
