import React, {Component } from 'react';
import { TagCloud } from 'react-tagcloud';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import WhichAnimeMenu from '../Menu';

//NO OF UNIQUE USERS!!!!
const containerSize = {
    'width': '600px',
    'fontSize': '16px',
    'padding': '20px',
    'backgroundColor' : 'rgba(0, 0, 0, 0.8)',
    'color' : 'white'
};
//to do: change to general statistics, convert main piece in classless component 
//stackable column, one each for genre, keyword, ghibli?

class Statistics extends Component {
    constructor(props){
        super(props);
        this.state = {
            genreData: [],
            keywordData: [],
            userData: []
        };
    }
    componentDidMount(){
        function getGenreData(){
            return axios.get('http://localhost:3100/genrestatistics');
        }

        function getKeywordData(){
            return axios.get('http://localhost:3100/keywordstatistics');
        }
        function getUserData(){
            return axios.get("http://localhost:3100/totalusers");
        }
        axios.all([getGenreData(), getKeywordData(), getUserData()])
        .then(axios.spread((genreData, keywordData, userData)=>{
            console.log(userData.data[0].count)
            this.setState({
                genreData: genreData.data, 
                keywordData: keywordData.data,
                userData: userData.data[0].count
            });
        }));
    }
//how to view statistics
    render(){
        const { genreData, keywordData } = this.state; 

        return(
            <div>
            <WhichAnimeMenu/>
            <Container style={containerSize}>
            <h1 style={{textAlign: 'center'}}>What Do <span>WhichAnime</span> Users Search For</h1>
            <h2 style={{textAlign: 'center'}}>Statistics For Genres</h2>

            <div style={{width: "500px", textAlign: 'center', margin: '0 auto'}}>
            <TagCloud minSize={16}
            maxSize={50}
            tags={genreData}
            onClick={tag => alert(`'${tag.value}' has a total of ${tag.count} inquiries!`)} />
            

            <h2 style={{textAlign: 'center'}}>Statistics For Keyword</h2>
            <TagCloud minSize={16}
            maxSize={50}
            tags={keywordData}
            onClick={tag => alert(`'${tag.value}' has a total of ${tag.count} inquiries!`)} />
            <h2 style={{textAlign: 'center'}}>Total Engaged Users: {this.state.userData}</h2>
            </div>
            </Container>
            </div>
        )
    }

}

export default Statistics;