import React from 'react'
import './Trip.css'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

export default function TripData(props) {
  return (
    <div>
        <div className="t-card">
            <div className="t-image">
            <img src={props.image} alt="img" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </div>
  )
}