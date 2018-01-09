import React from 'react';
import Flag from '../components/Flag'

class FlagContainer extends React.Component {
  render() {
    const images = this.props.countries.map((country, index) => {
      return <img alt="" src={country.flag} value={index} key={index}></img>
    });
    return(
      <div>
        {images}
      </div>
    )
  }
}

export default FlagContainer;
