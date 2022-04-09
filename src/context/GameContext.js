import React, { createContext, useState } from "react";
import gamedata from "../Gamedata";
export const myContext=createContext()
 
export default function GameContext ({children}){
    const[details]=useState(gamedata)
return <myContext.Provider value={details}>{children}</myContext.Provider>
}