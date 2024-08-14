
import React, {useState, createContext} from "react"
import ComponentB from "./ComponentB.jsx";


export const UserContext=createContext();


function ComponentA(){
    
    const [user, setUser] =useState("nikola");
 

    return(
        <>
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`hello ${user}`}</h2>
            <UserContext.Provider value={user}>
             <ComponentB />
            </UserContext.Provider>
        </div>
        </>
    );
}

export default ComponentA;
