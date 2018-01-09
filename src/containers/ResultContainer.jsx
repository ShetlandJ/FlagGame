import React from 'react';

class ResultContainer extends React.Component {

  handleClick(event) {

  }

  render() {
    console.log(this.props.visibility);
    return(
      <div>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

export default ResultContainer;
