import React, { Component} from 'react';
import axios from 'axios';

class SearchGhibli extends Component {
  constructor(props){
    super(props);
    this.state = {
      titles: '',
      results: []
    };
  }
  
  handleGetTitles = (event) =>{
    axios.get(`https://ghibliapi.herokuapp.com/films`)
      .then(response=>{
        let newArr= response.data.map(el=>{
          return el.title;
        })
        this.setState({
          results: newArr
        })
        console.log(this.state.results);
        })
        .catch(err=>{
          console.log(err)
        });
      }
  

  handleDatabase = (event) =>{
    return this.state.results.map(title=>{
      return axios.post(`http://localhost:3100/ghiblititle`, {title})
      .then(response=>{
      console.log(response)
      })
      .catch((err)=>{
      console.log(err)
      })
      })
  }

  handleKitsuId = (event)=>{
    axios.get(`http://localhost:3000/ghiblititle`)
      .then(response=>{
        console.log(response.data.map(el=>{
          return el.title;
        }))
        
      })
      
      .catch(err=>{
        console.log(err);
      });
  };
  /*
  axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${title}`)
    .then(response=>{
      axios.post
    })

    //last bit
  axios.post(`http://localhost:3000/ghiblikitsulink`, {title, kitsuid})
    .then(response=>{
      console.log(response);
    })
    .catch(err=>{
      console.log(err);
    })
*/
  render(){
    const enabledButton = (this.state.results.length !== 0 ? false : true);

    return(
      <div>
        <p>There's definitely a more efficient way to do this, but for demonstration purposes let's use an unnecessary methods to show off those skills!</p>
        <button onClick={this.handleGetTitles}>Click me first to get titles</button>
        <button disabled={enabledButton} onClick={this.handleDatabase}>Then me to insert titles, but don't ever use me again</button>
        <button onClick={this.handleKitsuId}>Checking First</button>
      </div>
    )

  }

  }


export default SearchGhibli;

/*
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import axios from 'axios';
import AnimeResults from './Tools/AnimeResults';

class SearchGhibli extends Component{
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
        const genre = steps.ghibliresults12.value;

      ///  const searchGenre = (query) =>{
            axios.get(`https://kitsu.io/api/edge/anime?filter[genres]=${genre}`)
                .then(response=>{
                    this.setState({
                        result: response.data.data,
                        loading: false
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        };
    //}
//steps = this.props
//genre = steps.6genres.value
//axios.all(axios.post(database), axios.get(genre)).then(axios.spread())
//setState: result, loading


  triggetNext(){
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }
//line 35 = { <ListOfAnimes results = {results} ?>
  render(){
    const { trigger, loading, result } = this.state;
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
            {
              !trigger &&
              <button
                onClick={() => this.triggetNext()}
              >
                Search Again
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

SearchByGenre.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

SearchByGenre.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default SearchByGenre;
*/

/*
handleClick=(event)=>{
      let newArrOther=[];

      axios.get('https://ghibliapi.herokuapp.com/films')
        .then(response=>{
          let newArr = [];
          if(response.data.length > 0){
              response.data.map((el)=>{
              newArr.push(el.title);
            });
          }
          this.setState({
            checking: newArr
          });
          console.log(this.state.checking);
        })
        .then(response=>{
          let filmTitle = this.state.checking;
            return filmTitle.map((el)=>{
            return axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${el}`)
              .then(response=>{
                newArrOther.push(response.data.data[0]);
            })
          .catch(err=>{
            console.log(err);
          });
          });
        })
        .then(response=>{
          this.setState({
            results: newArrOther
          })
          console.log(this.state.results);
        })
        .catch(err=>{
          console.log(err);
        });
    };

    render(){
        let title = this.state.checking.map((el)=>{
          return <p>{el}</p>
        })

        
      return (
        <div>
          Just Checking 
          <button onClick={this.handleClick}>Just Checking</button>
          <div>
            {title}
          </div>
          <div>
            <button onClick={this.handleAnotherAxiosCall}>OK lets see</button>
          </div>
        </div>
      )
    }

*/