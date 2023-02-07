import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cardData = data.map(x =>{
        return(
            <Card
                key = {x.id}
                item = {x}
            />
        )
    })
    return(
        <div className = "container">
            <Navbar/>
            {cardData}
        </div>
    )
}