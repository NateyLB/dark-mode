import React, { useEffect } from "react"

import useLocalStorage from "./useLocalStorage.js";

const useDarkMode = () =>{

    const [value, setValue] = useLocalStorage("darkMode", false )
    
    useEffect(()=>{
        var body = document.querySelector('body')
        if(value === true){
            body.classList.add("dark-mode")
        }
        else{
            body.classList.remove("dark-mode")
        }

    },[value])

    return[value, setValue]
    }

    


export default useDarkMode;