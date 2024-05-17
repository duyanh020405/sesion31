import React, { Component } from 'react';

export default class BAI8 extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // Khởi tạo một ref
  }

  componentDidMount() {
    document.title = 'New Page Title';
  }

  change = () => {
    const inputValue = this.inputRef.current.value; 
    document.title = inputValue; 
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="input"
          ref={this.inputRef} 
        />
        <button onClick={this.change}>Change</button>
      </div>
    );
  }
}



