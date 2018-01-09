import React from 'react';
import CountryHeader from './CountryHeader';
import FlagContainer from './FlagContainer';
import ResultContainer from './ResultContainer';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries:[],
      randomCountry: '',
      randomNumber: 0,
      selectedCountry: null
    };
    this.handleSelectedCountry = this.handleSelectedCountry.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
  }

  getRandomIndex(){
    const min = 0;
    const max = 249;
    const rand = min + Math.random() * (max - min);
    this.setState({ randomNumber: this.state.randomNumber + Math.round(rand) });
  }

  componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all';
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({ countries: data });
      }
    });
    request.send();
    this.getRandomIndex();
  }

  handleSelectedCountry(index){
    this.setState({selectedCountry: index});
  }


  render(){
    const guessCountry = this.state.countries[this.state.randomNumber];

    // this.setState({randomCountry: guessCountry})
    console.log(this.state)
    // console.log(guessCountry.name);
    // console.log(this.state.randomNumber);
    return (
      <div>
        <CountryHeader country={guessCountry}/>
        <FlagContainer/>
        <ResultContainer/>
      </div>
    );
  }
}

export default CountryContainer;
