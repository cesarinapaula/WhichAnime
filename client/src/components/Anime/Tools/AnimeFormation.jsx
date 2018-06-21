import React from 'react';

var linkTo = 'http://www.kitsu.io/anime/';


const AnimeTitle = props => (
    <div>
        <p><strong>Anime:</strong> {props.title}</p>
        <p><strong>Description:</strong> {props.synopsis}</p>
        <p><strong>Premiered:</strong> {props.premiere}</p>
        <p>Link on the image to go to {props.title}'s Kitsu page</p> 
        <a href={linkTo+props.slug}>
            <img src={props.image} alt=''/>
            </a>
        <p style={{textAlign: "center"}}>-----------------</p>

    </div>
    
    
)

export default AnimeTitle;