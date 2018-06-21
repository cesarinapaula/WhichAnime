import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import axios from 'axios';
import RandomAnimeResult from './Tools/RandomAnimeResult';

class RandomAnime extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            result: '',
            trigger: false,
            randomNumber: ''
        };
      
        this.triggetNext = this.triggetNext.bind(this);
    }

    componentWillMount(){
      let randomTitle = Math.ceil(Math.random() * 14214);

        function getRandomTitle(){
          return axios.get(`https://kitsu.io/api/edge/anime/${randomTitle}`)

        }
        function postRandomTitle(){
          let userid = localStorage.getItem('userCode');
          return axios.post(`http://localhost:3100/randomanimetitle`, { userid, randomTitle })
        }

        axios.all([getRandomTitle(), postRandomTitle()])
            .then(axios.spread((getRandomAnime, postRandomAnime)=>{
                    this.setState({
                        result: getRandomAnime.data.data,
                        loading: false,
                        randomNumber: randomTitle
                    });
                 }))
                .catch(err => {
                    console.log(err);
                });
        };

  triggetNext(){
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render(){
    const { loading, result } = this.state;
    return (
      <div>
        { loading ? <Loading /> : <RandomAnimeResult
            slug={result.attributes.slug}
            image={result.attributes.posterImage.small}
           title={result.attributes.canonicalTitle}
            synopsis={result.attributes.synopsis}
            premiere={result.attributes.startDate !== null ? result.attributes.startDate.slice(5,7)+"/"+result.attributes.startDate.slice(8)+ '/'+result.attributes.startDate.slice(0,4) : 'Premiere date not available'}
            /> }
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
          </div>
        }
      </div>
    );
  }
}

RandomAnime.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

RandomAnime.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default RandomAnime;
