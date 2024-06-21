import { useState } from "react";
import { MyContext } from "./context";

export default function ContextProvider({ children }) {
    const [formData, setFormData] = useState({
        name:"",
        surname:"",
        email:"",
        phone:""
    });
    const [showSummary, setShowSummary] = useState(false);


    return(

        <MyContext.Provider value={{formData, setFormData, showSummary, setShowSummary}}>
            {children}
        </MyContext.Provider>
    )
}