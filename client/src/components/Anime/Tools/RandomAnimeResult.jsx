import React from 'react';
//import RandomAnimeTitle from './AnimeFormation';

var linkTo = 'http://www.kitsu.io/anime/';


const RandomAnimeResult = props =>(
   
        <div>
        <h4>Anime: {props.title}</h4>
        <p>Description: {props.synopsis}</p>
        <p>Premiered: {props.premiere}</p>
        <p>Link on the image to go to {props.title}'s Kitsu page</p> 
        <a href={linkTo+props.slug}>
            <img src={props.image} alt=''/>
            </a>
    </div>
    )

export default RandomAnimeResult;