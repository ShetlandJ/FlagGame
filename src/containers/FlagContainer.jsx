import React from 'react';
import Flag from '../components/Flag'

class FlagContainer extends React.Component {
  render() {
    return(
      <div>
        <Flag image={this}/>
      </div>
    )
  }
}

export default FlagContainer;
