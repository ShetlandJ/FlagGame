import React from 'react';

class ResultContainer extends React.Component {

  handleClick(event) {
    
  }

  render() {
    console.log(this.props.visibility);
    return(
      <div>
        <p>{this.props.result}</p>
        <button>Play again?</button>
      </div>
    )
  }
}

export default ResultContainer;
