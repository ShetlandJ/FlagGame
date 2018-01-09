import React from 'react';

class CountryHeader extends React.Component {
  render() {
    if (!this.props.country) {
      return null;
    } else {
      return(
        <div className="header">
          <h1>
          What is the flag of {this.props.country.name}
        </h1>
        </div>
      )
    }
  }
}

export default CountryHeader;
