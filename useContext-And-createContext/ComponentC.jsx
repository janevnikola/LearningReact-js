import ComponentD from "./ComponentD";

import React, {useContext} from "react"
import {UserContext} from "./ComponentA.jsx"


function ComponentC(){

    const user =useContext(UserContext);
    return(
        <>
        <div className="box">
         
            <h1>Hello again {user}</h1>
            <ComponentD />
        </div>
        </>
    );
}

export default ComponentC;
