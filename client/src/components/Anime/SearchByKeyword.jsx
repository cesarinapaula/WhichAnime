import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import axios from 'axios';
import AnimeResults from './Tools/AnimeResults';

class SearchByKeyword extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            result: '',
            trigger: false,
            keywordEntered: ''
        };
      
        this.triggetNext = this.triggetNext.bind(this);
    }

    componentWillMount(){
        const { steps } = this.props;
        const userKeyword = steps.searchbykeyword9.value;

        function getKeywordResults(){  
          return axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${userKeyword}`)
        }

        function postKeywordResults(){
          let userid = localStorage.getItem('userCode');
          return axios.post(`http://localhost:3100/keyword`, { userid, userKeyword});
        }
        axios.all([getKeywordResults(), postKeywordResults()])
          .then(axios.spread((getResults, postResults)=>{
                    this.setState({
                        result: getResults.data.data,
                        loading: false,
                        keywordEntered: userKeyword
                    });
                    console.log(userKeyword);
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

SearchByKeyword.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

SearchByKeyword.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default SearchByKeyword;