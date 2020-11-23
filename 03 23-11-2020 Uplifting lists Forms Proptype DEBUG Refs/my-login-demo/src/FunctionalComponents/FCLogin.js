import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

const Users =
  [
    { email: 'avi@a.com', pass: 'avi123', name: 'avi' },
    { email: 'ben@a.com', pass: 'ben123', name: 'ben' },
    { email: 'charlie@a.com', pass: 'charlie123', name: 'charlie' }
  ];

export default class FCLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnCheckIfLoggedin = () => {
    let checkedUser = Users.find(user =>
      user.email === this.state.txtEmail && user.pass === this.state.txtPass);
    this.props.sendData2Parent(checkedUser);
  }

  chgEmail = (e) => {
    this.setState({ txtEmail: e.target.value });
  }

  chgPass = (e) => {
    this.setState({ txtPass: e.target.value });
  }

  render() {
    return (
      <div>
        <TextField id="standard-basic" label="Email" onChange={this.chgEmail} /> <br />
        <TextField id="standard-basic" label="Pass" type="password" onChange={this.chgPass} /> <br /><br />
        <Button variant="outlined" color="primary" size="small"
          onClick={this.btnCheckIfLoggedin} >Login</Button>
      </div>
    )
  }
}

