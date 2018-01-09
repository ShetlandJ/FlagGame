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
    this.getRandomCountry = this.getRandomCountry.bind(this);
    this.buildCountryArray = this.buildCountryArray.bind(this);
  }

  getRandomIndex(){
    const min = 0;
    const max = 249;
    const rand = min + Math.random() * (max - min);
    const rounded = Math.round(rand)
    this.setState({ randomNumber: rounded });
  }

  getRandomCountry(index){
    const guessCountry = this.state.countries[index];
    console.log(guessCountry);
    return guessCountry
  }

  buildCountryArray(index){
    let gameArray = [];
    for (var i=0; i < 4; i++) {
      this.getRandomIndex();
      let countryObj = this.getRandomCountry(index);
      gameArray.push(countryObj)
    }
    this.setState({gameCountries: gameArray})
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

  }

  handleSelectedCountry(index){
    this.setState({selectedCountry: index});
  }

  render(){

    const guessCountry = this.state.countries[this.state.randomNumber];
    console.log(guessCountry);
    this.buildCountryArray(this.state.randomNumber)

    console.log(this.state.gameCountries);

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
