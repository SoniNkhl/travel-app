import React from 'react'

export default function Hero(props) {
  return (
    <div>
        <div className={props.cName}>
            <img src={props.heroImg} alt="HeroImg" />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
        </div>
    </div>
  )
}
