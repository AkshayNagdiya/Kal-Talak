import { createContext, useReducer } from "react";
import NewsReducer from "./Reducer";

const NewsContext = createContext()

export const NewsProvider=({children})=>{


    const initialstate ={
        Allnews : [],
        topic : "Indore",
    }

    const [state,dispatch] = useReducer(NewsReducer, initialstate)


    return(
        <NewsContext.Provider value={{...state , dispatch}}>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContext;