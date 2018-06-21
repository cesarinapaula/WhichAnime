import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import steps from './Steps';
import axios from 'axios';

//styling for WhichAnime ChatBot
const theme = {
    background: '#rgba(0,0,0,0.8)',
    fontFamily: 'Roboto',
    headerBgColor: '#3281A1',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#3281A1',
    botFontColor: '#fff',
    userBubbleColor: '#B3E7CD',
    userFontColor: '#4a4a4a',
  };


const bubbleOptionStyle = {
    'backgroundColor': '#7768AE'
};

const contentStyle = {
	'height': '73vh',
	'overflowY': 'auto',
    'maxHeight': '1200px',
    'fontFamily': 'Roboto'
};

const bubbleStyle = {
    'textAlign' : 'left'
}
//Themeprovider wrap to be neater.
const whichAnime = "WhichAnime Chatbot";

const placeholder = 'Type the keywords or phrases you wish to search for here.';

const style = {
    'backgroundColor':'rgba(0,0,0,0.6)'
};


class WhichAnimeBot extends Component {
   constructor(props){
        super(props);
        this.state = {
            checking: '',
        };
    }

    componentDidMount(){

       let userid = localStorage.getItem('userCode');

       axios.get(`http://localhost:3100/usercount/${userid}`)
        .then(response=>{
            if(response.data[0].count==="0"){
                axios.post('http://localhost:3100/newuser', { userid })
                    .then(response=>{
                        console.log("this worked: " + response);
                    })
                    .catch(err=>{
                        console.log("error is here: " + err);
                    });
                } else
                console.log(response);
            })
        .catch((err)=>{
            console.log("error is there " + err);
        });
    }

    render(){
        return(
            <div>
                <ThemeProvider theme={theme}>
                <ChatBot
                    steps={steps}
                    bubbleOptionStyle={bubbleOptionStyle}
                    headerTitle={whichAnime}
                    width={'550px'}
                    contentStyle={contentStyle}
                    bubbleStyle={bubbleStyle}
                    placeholder={placeholder}
                    style={style}
                    hideUserAvatar={true}
                />
                </ThemeProvider>
            </div>
        )
    }
}

export default WhichAnimeBot;