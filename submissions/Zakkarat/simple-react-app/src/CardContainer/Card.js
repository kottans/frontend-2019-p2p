import React from 'react'

const Card = (props) =>  (
        <div className='card'>
            <img className="img-card" src={props.image} alt={`${props.name}`}/>
            <h3 className="text-card">{props.name}</h3>
            <h4 className="text-card">Gender: {props.gender}</h4>
            <h4 className="text-card">Status: {props.status}</h4>
            <h4 className="text-card">Species: {props.species}</h4>
        </div>
    )

export default Card;
