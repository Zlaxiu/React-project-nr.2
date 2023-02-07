import React from "react"

export default function Card(props){
    return(
        <div>
        <div className = "card">
            <img src = {props.item.imageUrl} className = "foto"/>
            <div className = "zawartosc">
                <div className = "introduce">
                    <img className = "pin" src = "./Images/placeholder.png"/>
                    <p className = "miejsce">{props.item.location}</p>
                    <a className = "view" href = {props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className = "title">{props.item.title}</h1>
                <p className= "date">{props.item.startDate} - {props.item.endDate}</p>
                <p className = "description">{props.item.description}</p>  
            </div>
        </div>
            <hr className = "haerik"/>
        </div>
    )
}