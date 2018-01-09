import React from 'react';
// import Flag from '../components/Flag'
import ResultContainer from './ResultContainer';

class FlagContainer extends React.Component {
constructor(props){
  super(props);
  this.state = {
    guess: "",
    visibility: "hidden"
  }
}

  handleClick(event) {
    console.log(event.target.src);
    console.log(this.props.correct.flag);
    if (event.target.src === this.props.correct.flag) {
      // TODO: Display Correct message
      console.log("hello");
      this.setState({guess: "Correct"})
    }
  }

    render() {

      const images = this.props.countries.map((country, index) => {
        return <div className="flag"><img alt="" src={country.flag} value={country.name} key={index} onClick={this.handleClick.bind(this)}></img>
      </div>
    });

    return(
      <div>

      <div className="flag-container">
        {images}
      </div>
      <div className="results-container">
      <ResultContainer result={this.state.guess} visibility={this.state.visibility}/>
    </div>
  </div>
    );
  }
}

export default FlagContainer;
