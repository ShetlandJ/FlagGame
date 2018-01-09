import React from 'react';
import CountryHeader from './CountryHeader';
import FlagContainer from './FlagContainer.jsx';
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

    this.getRandomIndex = this.getRandomIndex.bind(this);
    // this.getRandomCountry = this.getRandomCountry.bind(this);
    this.buildCountryArray = this.buildCountryArray.bind(this);
  }

  getRandomIndex(min, max){
    const rand = min + Math.random() * (max - min);
    const rounded = Math.round(rand)
    return rounded
  }

  buildCountryArray(index){
    let gameArray = [];
    for (var i=0; i < 4; i++) {
      let roundedNum = this.getRandomIndex(0, 249)
      let countryObj = this.state.countries[roundedNum];
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
        this.setState({ countries: data }, () => {
          this.buildCountryArray(this.state.randomNumber)
        });
      }
    });
    request.send();
  }

  handleClick(event){

  }

  render(){
    let randomNumber = this.getRandomIndex(0, 3)

    const guessCountry = this.state.gameCountries[randomNumber]

    return (
      <div>
        <div>
          <CountryHeader country={guessCountry}/>
          <FlagContainer correct={guessCountry} countries={this.state.gameCountries}/>
        </div>

        <div className="results">
          <button onClick={this.buildCountryArray}>New Round</button>
        </div>


      </div>
  );
}
}

export default CountryContainer;
