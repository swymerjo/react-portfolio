import React from 'react'
import "./ProjectCards.css";

function ProjectCardsItem(props) {
    return (
        <>
        <li className='project-card-item'>
        <div className='item-wrap'>
        <figure className='project-cards-item-pic-wrap' data-category={props.label}>
        <img src={props.src} className='project-cards-item-pic' alt="project-pic"/>
        </figure>
        <div className='project-card-item-info'>
        <h5 className='project-cards-item-text'>{props.text}</h5>
        </div>
        </div>
        </li>
        </>
    );
}

export default ProjectCardsItem
