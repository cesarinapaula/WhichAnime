import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class WhichAnimeMenu extends Component {
    constructor(){
        super();
        this.state = { activeItem: 'home' }
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state;

        return(
        <div>
        <Menu color={'black'} inverted stackable size='massive'>
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
        </div>
    )
}
}

export default WhichAnimeMenu;