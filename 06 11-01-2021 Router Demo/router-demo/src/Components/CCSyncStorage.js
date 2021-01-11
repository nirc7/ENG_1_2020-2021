import React, { Component } from 'react'

export default class CCSyncStorage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grade: 0
    }
  }

  btnSync = () => {
    console.log('before');
    this.setState({
      grade: 100
    }, () => {
      console.log("grade in sync=", this.state.grade);
    });

    console.log('grade after setstate=', this.state.grade);

  }

  render() {
    return (
      <div>
        <h2>CCSyncStorage</h2>
        <button onClick={this.btnSync} >sync</button>
      </div>
    )
  }
}
