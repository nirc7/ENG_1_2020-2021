

import React, { Component } from 'react';
import './App.css';
import CCStudent from './ClassComponents/CCStudent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.txtInput1 = null;
    this.textInput2 = React.createRef();

    this.state = {
      userName: 'insert your name...',

    };
  }


  onTextChanged = (event) => {
    // let output = event.target.value.replace('6', '');  
    // this.setState({ userName: output });
    this.setState({ userName: event.target.value.toUpperCase() });
  }

  onTextChanged2 = (event) => {
    // let output = event.target.value.replace('6', '');  
    // this.setState({ userName: output });
    this.setState({ userName2: event.target.value });
  }


  btnRefsUse = () => {
    debugger;
    let num=7;
    num++;
    console.log(num);
    this.setState({
      txt1: this.txtInput1.value,
      txt2: this.textInput2.current.value
    });
  }

  render() {

    let numbers = [1, 2, 3, 4, 5];
    let listNumbers = numbers.map((number, index) =>
      <li key={number}><a href="#" className="list-group-item" >{number * 2}</a></li>
    );

    return (
      <div className="App">
        <header className="App-header">
          not connected to state input
          <input type="text" name="stam" /><br />
          connected to state input WO onchange
          <input type="text" name="userName" value={this.state.userName} /><br />
          connected to state input With onchange
          <input type="text" name="userName" value={this.state.userName}
            onChange={this.onTextChanged} /> <br />
          <input type="text" placeholder="enter your name..."
            onChange={this.onTextChanged2} />
          {this.state.userName2} <br />

          <input type="text"
            ref={(input) => { this.txtInput1 = input }} />
          <span style={{ marginRight: 50 }} />
          {this.state.txt1}<br />

          <input type="text"
            ref={this.textInput2} />
          <span style={{ marginRight: 50 }} />
          {this.state.txt2} <br />

          <input type="button" value="refs use" onClick={this.btnRefsUse} />

          <CCStudent id={7} name="avi" />
          <CCStudent id={1} name="ben" />
          <CCStudent id={8} />
          <CCStudent name="avi" />
          <CCStudent id="asd" name={5} />

          <ul>{listNumbers}</ul>

        </header>
      </div >
    );
  }
}

