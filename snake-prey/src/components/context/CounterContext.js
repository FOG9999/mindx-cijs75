import { createContext } from "react";

const CounterContext = createContext({
    value: 0,
    addOne: () => {} // update lai gia tri cua trulong value ben tren
});

export {CounterContext}