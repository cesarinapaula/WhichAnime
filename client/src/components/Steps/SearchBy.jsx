import React, { Component } from 'react';

class SearchBy extends Component {
    render(){
        return(
            <div>
                    You have several options to use from:
                    <ol>
                        <li>Search By Genre</li>
                        <li>Search By Keyword</li>
                        <li>Get A Random Anime</li>
                        <li>Search For Kid-Friendly Themes</li>
                    </ol>
                    These options will appear as purple buttons below. Click on the button of your choice.
                    Clicking on the title's image leads to the anime's page on <a href='https://kitsu.io/explore/anime'>Kitsu</a> 
            </div>
        )
    }
}

export default SearchBy;