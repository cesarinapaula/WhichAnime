import React, { Component} from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import WhichAnimeBot from './WhichAnimeBot';
import "../index.css";
//import WhichAnimeMenu from './Home';

class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            checking: '',
            activeItem: 'home'
        };
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//convert Menu into component
    render(){
        const { activeItem } = this.state;

        return (
            <div>

        <Menu color={"black"} inverted stackable size='massive' >
        <Menu.Item>
            <h1><span className='whichAnime'>WhichAnime</span></h1>
        </Menu.Item>
        <Menu.Item
            name='Home'
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
            as={NavLink}
            exact 
            to="/">
        </Menu.Item>
        <Menu.Item
            as={NavLink}
            exact 
            to="/about">
            About WhichAnime
        </Menu.Item>
        <Menu.Item
            as={NavLink}
            exact 
            to="/statistics">
            Statistics
        </Menu.Item>
        </Menu>               
            <Grid textAlign='center' style={{height: '100%'}} > 
                <Grid.Column style={{maxWidth: 550}}>
                <WhichAnimeBot/>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default Home;
