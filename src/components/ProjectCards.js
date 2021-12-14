import React from 'react'
import "./ProjectCards.css";
import ProjectCardsItem from './ProjectCardsItem';

export default function ProjectCards() {
    return (
        <div className='project-cards'>
        <h1 id="project-title">Check out my work:</h1>
        <div className='project-cards-container'>
        <div className='project-cards-wrapper'>
        <ul className="project-cards-items">
       <a className="project-a-link" target="_blank" rel="noreferrer" href="https://trusting-mahavira-0d29ce.netlify.app"><ProjectCardsItem 
       src="/images/weather-original.png"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/></a>
        <a className="project-a-link" target="_blank" rel="noreferrer" href="https://happy-payne-677245.netlify.app"><ProjectCardsItem 
       src="/images/dictionary-app-image.png"
       text='Dictionary app made with React and 2 APIs.'
       label="Dictionary-app"/></a>
       <a className="project-a-link" target="_blank" rel="noreferrer" href="https://hardcore-fermat-72e5f3.netlify.app"> <ProjectCardsItem 
       src="/images/weather-app-image.png"
       text='Weather app made using Vanilla Javascript and OpenWeather API.'
       label="Weather-Javascript"/></a>
        </ul>
        <ul className="project-cards-items">
       <a className="project-a-link" target="_blank" rel="noreferrer" href="https://silly-shaw-c8aa88.netlify.app"><ProjectCardsItem 
       src="/images/tandem-app-about.png"
       text='Landing page for undersTandem app.'
       label="App landing page"/></a>
        <a className="project-a-link" target="_blank" rel="noreferrer" href="https://sleepy-dijkstra-f527ec.netlify.app"><ProjectCardsItem 
       src="/images/seaglass-image.png"
       text='A website for seaglass art pieces.'
       label="Seaglass art website"/></a>
        <a className="project-a-link" target="_blank" rel="noreferrer" href="https://adoring-kepler-effbaf.netlify.app"><ProjectCardsItem 
       src="/images/pokemon-pic.jpg"
       text='Weather app made with React and OpenWeather API that shows the weather in Pokemon.'
       label="Weather-React: Pokemon"/></a>
        </ul>
        </div>
        </div>
        </div>
    )
}

