import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {myContext}from '../context/GameContext';

export default function DisplayGames (){
    const[search,setSearch]=useState('')
    const gameData =useContext(myContext)
     
    const navigate = useNavigate()
    
    const handleRoute=id=>{
        navigate(`${id}`)
    }
    const handleSearch= e =>{
        setSearch(e.target.value)

    }
    const fliterOptions=gameData.filter(data=>{
        return data.name.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <React.Fragment>
            <form autoComplete="off" style={{alignContent:'center'}} className="search-bar">
                <input  className="input-search" type='text' name='search' placeholder="Search By GameName" value={search} onChange={handleSearch} />
            </form>
            {fliterOptions.map(data=>{
                return(
                    <div style={{border:'double',margin:"20px"}} className="game-name" key={data.gameId}>
                        <span style={{fontSize:'20px',fontWeight:'bold', color:'brown',cursor:'pointer'}} onClick={()=>handleRoute(data.gameId)}><u>{data.name}</u></span>
                        <h3 style={{fontSize:'16px'}}>Game Detail:- {data.desc}</h3>
                    </div>
                
                    
                )
            })}
        </React.Fragment>
    )
}