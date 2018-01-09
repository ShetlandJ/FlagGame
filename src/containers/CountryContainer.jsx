import React from 'react';
import CountryHeader from './CountryHeader';
import FlagContainer from './FlagContainer';
import ResultContainer from './ResultContainer';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries:[],
      selectedCountry: null
    };

    this.handleSelectedCountry = this.handleSelectedCountry.bind(this);
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
    const country = this.state.countries[this.state.selectedCountry];
    return (
      <div>
        <CountryHeader/>
        <FlagContainer/>
        <ResultContainer/>
      </div>
    );
  }
}

export default CountryContainer;
