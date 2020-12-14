import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAddTwoTone';
import TextField from '@material-ui/core/TextField';
import Student from '../Classes/Student';

export default class CCAddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      txtName: null,
      txtId: null
    }
  }

  chgId = (e) => {
    this.setState({ txtId: e.target.value });
  }

  chgName = (e) => {
    this.setState({ txtName: e.target.value });
  }

  btnAddStudent = () => {
    this.props.sendStudent2Parent(new Student(this.state.txtId, this.state.txtName));
  }

  render() {
    return (
      <div>
        <TextField label="id" onChange={this.chgId} variant="outlined" style={{margin:5}}/> <br/>
        <TextField label="Name" onChange={this.chgName} style={{margin:5, backgroundColor: 'grey', borderRadius:5 }} variant="outlined" /> <br/>
        <Button
          variant="contained"
          color="primary"
          size="large"
          //className={classes.button}
          startIcon={<PersonAdd />}
          onClick={this.btnAddStudent}
          style={{margin:5}}
        >Add</Button>
      </div>
    )
  }
}
