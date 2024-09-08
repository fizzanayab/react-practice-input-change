import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputs: false,
      input1Value: '',
      input2Value: ''
    };
  }

  handleButtonClick = () => {
    this.setState({ showInputs: true });
  };

  handleGoBackClick = () => {
    this.setState({ showInputs: false, input1Value: '', input2Value: '' });
  };

  handleInputChange = (e, inputNumber) => {
    this.setState({
      [inputNumber === 1 ? 'input1Value' : 'input2Value']: e.target.value
    });
  };

  render() {
    const { showInputs, input1Value, input2Value } = this.state;

    return (
      <div className="main container">
        {!showInputs ? (
          <div className="initial-content">
            <p>Welcome to color divs</p>
            <button className='button1' onClick={this.handleButtonClick}>Show Inputs</button>
          </div>
        ) : (
          <div className="input-section ">
            <input
              type="text"
              placeholder="Enter a color for Div 1"
              value={input1Value}
              onChange={(e) => this.handleInputChange(e, 1)}
             
             
            />

            <input
              type="text"
              placeholder="Enter a color for Div 2"
              value={input2Value}
              onChange={(e) => this.handleInputChange(e, 2)}
            />

            <div
              className="color-box"
              style={{ backgroundColor: input1Value || 'transparent' }}
            >
              Div 1
            </div>

            <div
              className="color-box"
              style={{ backgroundColor: input2Value || 'transparent' }}
            >
              Div 2
            </div>

            <button onClick={this.handleGoBackClick}>Go Back</button>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
