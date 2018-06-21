import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import WhichAnimeMenu from '../Menu';

const containerSize = {
    'width': '700px',
    'fontSize': '16px',
    'padding': '20px',
    'backgroundColor' : 'rgba(0, 0, 0, 0.8)',
    'color' : 'white',
    'height' : '100vh'
};

class AboutMe extends Component {

    render(){
        return(
            <div>
                <WhichAnimeMenu/>
                <Container style={containerSize}>
                <h1 style={{textAlign: 'center'}}>Welcome to <span className='whichAnime'>WhichAnime!</span></h1>
                <h2 style={{textAlign: 'center'}}>Your guide to discovering new anime!</h2>
                <h3 style={{textAlign: 'center'}}><strong>Instructions</strong></h3>
                <p>You will be presented with four options:</p>
                <ol>
                    <li><strong>Select By Genre</strong>: Get a list of anime by selecting a genre</li>
                    <li><strong>Enter A Keyword</strong>: Get a list of anime by entering a keyword or phase (please keep it simple and PG-13 at the most).</li>
                    <li><strong>Kid Friendly Search</strong>: Get a list of kid-friendly titles by selecting a genre</li>
                    <li><strong>Random Anime</strong>: Try your luck and get a random anime!</li>
                </ol>
                <p>Clicking on the image will lead you to the anime's profile page on Kitsu</p>

                <h3 style={{textAlign: "center"}}>How <span>WhichAnime</span> Was Made</h3>
                <p><span>WhichAnime</span> was created by Cesa Paula.
                <span>WhichAnime</span> was with ReactJS on the front-end, and ExpressJS and Postgresql on the backend.  
                The chatbot is built with React-Simple-Chat. The APIs used were Kitsu API, and Studio Ghibli API.
                </p>
                <h3 style={{textAlign: "center"}}>Future Updates for <span>WhichAnime</span></h3>
                <ol>
                    <li>Search dedicated to Studio Ghibli films</li>
                    <li>Extended kid-friendly section, that includes searching by keyword</li>
                    <li>Extra filters for more precise searches</li>
                    <li>Links to anime news sources, blogs, convention</li>
                </ol>
                </Container>
            </div>
        )
    }
}

export default AboutMe;