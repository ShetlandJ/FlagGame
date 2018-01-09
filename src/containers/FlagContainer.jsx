import React from 'react';
import Flag from '../components/Flag'

class FlagContainer extends React.Component {
  render() {
    return(
      <div>
        <Flag />
        <Flag />
        <Flag />
        <Flag />
      </div>
    )
  }
}

export default FlagContainer;
