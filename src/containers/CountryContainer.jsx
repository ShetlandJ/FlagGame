import React from 'react';
import CountryHeader from './CountryHeader';
import FlagContainer from './FlagContainer';
import ResultContainer from './ResultContainer';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries:[],
      gameCountries: [],
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
    return this.state.randomNumber
  }

  getRandomCountry(index){
    const guessCountry = this.state.countries[this.state.randomNumber];
  }

  buildCountryArray(){
    for (var i=0; i < 3; i++) {
      let randNum = this.getRandomIndex();
      this.getRandomCountry(randNum);
      
    }

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
    console.log(guessCountry);

    return (
      <div>
        <CountryHeader country={guessCountry}/>
        <FlagContainer country={}/>
        <ResultContainer/>
      </div>
    );
  }
}

export default CountryContainer;
