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
       src="/images/img-1.jpg"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/>
        <ProjectCardsItem 
       src="/images/img-1.jpg"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/>
        <ProjectCardsItem 
       src="/images/img-1.jpg"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/>
        </ul>
        <ul className="project-cards-items">
       <ProjectCardsItem 
       src="/images/img-1.jpg"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/>
        <ProjectCardsItem 
       src="/images/img-1.jpg"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/>
        <ProjectCardsItem 
       src="/images/img-1.jpg"
       text='Weather app made with React and OpenWeather API.'
       label="Weather-React"/>
        </ul>
        </div>
        </div>
        </div>
    )
}

