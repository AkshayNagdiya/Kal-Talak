import { createContext, useReducer } from "react";
import WeatherReducer from "./Redcer";

const WeatherContext = createContext();

export const WeatherProvider =({children})=>{

    const initialstate = {
        weather : "null",
    }

    const [state,dispatch] = useReducer(WeatherReducer , initialstate)
    return(
        <WeatherContext.Provider value={{...state , weatherdispatch: dispatch}}>
            {children}
        </WeatherContext.Provider>
    )
}



export default WeatherContext;