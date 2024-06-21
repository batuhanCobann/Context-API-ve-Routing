import { useContext } from "react";
import FormInputs from "./FormInputs";
import { MyContext } from "../store/context";
import FormSummary from "./FormSummary";

export default function GirisBilgileri (){
    const { showSummary } = useContext(MyContext)
    return (
    <>
    
        {showSummary ? <FormSummary /> : <FormInputs />}    
    </>

    )
    
}