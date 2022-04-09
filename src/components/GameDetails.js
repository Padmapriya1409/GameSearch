import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {myContext} from '../context/GameContext'

const GameDetails =()=>{
    const {id}=useParams()
    const displaydata=useContext(myContext)
    const navigate =useNavigate()
    
    const handleBack=()=>{
        navigate('/')
    }

    const filterData=displaydata.filter(data=>data.gameId === id)


    const handlePlayer=playerId=>{
        navigate(`/player/${playerId}`)
    }

    return(
        <React.Fragment>
            <button onClick={handleBack} style={{backgroundColor:"lightcoral",width:"200px"}}>GO BACK</button>
            {filterData.map(data=>{
                return(
                    <div  className="details" key={data.gameId}>
                        <h2>Name:- {data.name}</h2>
                        <h3>Detail:- {data.desc}</h3>
                        <h4>LaunchDate:- {data.launchDate}</h4>
                        <h3> Count:- {data.playercount}</h3><hr></hr>
                        {data.topPlayer.map(play=>{
                            return(
                                <div key={play.playerId}>
                                    <h2 style={{cursor:'pointer',color:"lightsalmon"}} onClick={()=>handlePlayer(play.playerId)}><u>{play.name}</u></h2>
                                    <h3>{play.join}</h3>
                                </div>

                            )
                        })}
                    </div>
                )
            })}
            
        </React.Fragment>
    )
}
export default GameDetails