import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

const Users =
  [
    { email: 'avi@a.com', pass: 'avi123', name: 'avi' },
    { email: 'ben@a.com', pass: 'ben123', name: 'ben' },
    { email: 'charlie@a.com', pass: 'charlie123', name: 'charlie' }
  ];

const ColorEnum = {
  RED: 0,
  GREEN: 1,
  BLUE: 2
}

export default class CCMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      israining: true
    };

    console.log(ColorEnum.RED);
    let a = ColorEnum.GREEN;    
  }

  btnCheckIfLoggedin = () => {
    let checkedUser = Users.find(user => user.email === 'avi@a.com' && user.pass === 'avi123');
    if (checkedUser !== undefined ) {
      this.setState({
        isLoggedIn: true,
        checkedUserName: checkedUser.name
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Main</h2>
        <TextField id="standard-basic" label="Email" /> <br />
        <TextField id="standard-basic" label="Pass" type="password" /> <br /><br />
        <Button variant="outlined" color="primary" size="small"
          onClick={this.btnCheckIfLoggedin} >Login</Button>
        <h3>{this.state.isLoggedIn ? ` ${this.state.checkedUserName} u r logged in:)` : 'u r  not logged in :('}</h3>
      </div>
    )
  }
}
