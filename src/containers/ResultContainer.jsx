import React from 'react';

class ResultContainer extends React.Component {

  handleClick(event) {

  }

  render() {

    let generatedClass = "";
    if (this.props.result === "Correct") {
      generatedClass = "correct"
    } else {
      generatedClass = "tryAgain"
    }

    return(
      <div className="results">
        <h1 className={generatedClass}>{this.props.result}</h1>
      </div>
    )
  }
}

export default ResultContainer;
