import React from 'react'
import "./ProjectCards.css";
import ProjectCardsItem from './ProjectCardsItem';

export default function ProjectCards() {
    return (
        <div className='project-cards'>
        <h1>Check out my work:</h1>
        <div className='project-cards-container'>
        <div className='project-cards-wrapper'>
        <ul className="project-cards-items">
       <ProjectCardsItem 
       src="/images/weather-original.png"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/>
        <ProjectCardsItem 
       src="/images/dictionary-app-image.png"
       text='Dictionary app made with React and 2 APIs.'
       label="Dictionary-app"/>
        <ProjectCardsItem 
       src="/images/weather-app-image.png"
       text='Weather app made using Vanilla Javascript and OpenWeather API.'
       label="Weather-Javascript"/>
        </ul>
        <ul className="project-cards-items">
       <ProjectCardsItem 
       src="/images/tandem-app-about.png"
       text='Landing page for undersTandem app.'
       label="App landing page"/>
        <ProjectCardsItem 
       src="/images/seaglass-image.png"
       text='A website for seaglass art pieces.'
       label="Seaglass art website"/>
        <ProjectCardsItem 
       src="/images/pokemon-pic.jpg"
       text='Weather app made with React and OpenWeather API that shows the weather in Pokemon.'
       label="Weather-React: Pokemon"/>
        </ul>
        </div>
        </div>
        </div>
    )
}

