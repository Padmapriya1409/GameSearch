import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../context/GameContext";

const PlayerDetails=()=>{
    const{id}=useParams()
    const playerData=useContext(myContext)
    
    let player;
    playerData.map((data,i)=>player=data.topPlayer)
    console.log(player)
    var fliterOptions=player.filter((data)=>data.playerId === id)

    return(
        <React.Fragment>
            <div style={{textAlign:"center",fontFamily:"cursive" ,border:"double", margin:"200px",backgroundColor:"bisque"}} className="player">
            <h1><u>Player Detail</u></h1>
            {fliterOptions.map((data)=>{
                return(
                    <div key={data.playerId}>
                        <h1>Name:- {data.name}</h1>
                        <h2>Different Games:- {data.differ_games.join(" || ")}</h2>
                        <h3>Date Joined:- {data.join}</h3>
                    </div>
                    
                )
            })}
            </div>
        </React.Fragment>
    )
}
export default PlayerDetails