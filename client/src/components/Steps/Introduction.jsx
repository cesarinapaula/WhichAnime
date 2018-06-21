import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';

class Introduction extends Component {


   render(){
       return (
            <div>
                <p>Welcome to <span className='whichAnime'>WhichAnime</span>!<br/>
                For more information about <span>WhichAnime</span>, <NavLink to="/about">click here.</NavLink>
                </p>
            </div>
       )
   }
} 

export default Introduction;
