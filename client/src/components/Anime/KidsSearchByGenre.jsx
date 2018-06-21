import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import axios from 'axios';
import AnimeResults from './Tools/AnimeResults';

class KidsSearchByGenre extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            result: '',
            trigger: false,
        };
      
        this.triggetNext = this.triggetNext.bind(this);
    }

    //Chatbot doc, but need to test if componentDidMount is optional
    componentWillMount(){
      const { steps } = this.props;
      const genre = steps.kidfriendlygenre.value;

      function getGenreResults(){
        return axios.get(`https://kitsu.io/api/edge/anime?filter[ageRating]=G&filter[genres]=${genre}`);
      }

      function postGenreResults(){
        let userid = localStorage.getItem('userCode');
        return axios.post(`http://localhost:3100/genre`, {userid, genre});
      }

      axios.all([getGenreResults(), postGenreResults()])
        .then(axios.spread((getResults, postResults)=>{
            console.log(getResults);
          this.setState({
          result: getResults.data.data,
          loading: false,
        });
        }))
        .catch(err => {
          console.log(err);
        });
      }

  triggetNext(){
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render(){
    const { loading, result } = this.state;
    return (
      <div>
        { loading ? <Loading /> : <AnimeResults results={result} />}
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

KidsSearchByGenre.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
  };
  
  KidsSearchByGenre.defaultProps = {
    steps: undefined,
    triggerNextStep: undefined,
  };

export default KidsSearchByGenre;