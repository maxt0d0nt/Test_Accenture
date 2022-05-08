import { createContext } from "react";
import { useInRouterContext } from "react-router-dom";

export const SliderContext = createContext({
    valorA: null
});

export default useInRouterContext;