import React from 'react';

class CountryHeader extends React.Component {
  render() {
    if (!this.props.country) {
      return null;
    } else {
      return(
        <div>{this.props.country.name}</div>
      )
    }
  }
}

export default CountryHeader;
