import React, { Component } from "react";
import './App.css';
import CCAddStudent from "./ClassComponents/CCAddStudent";
import Student from './Classes/Student';
import FCStudentsList from "./FunctioanlComponents/FCStudentsList";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        new Student(7, "avi"),
        new Student(8, "ben"),
        new Student(1, "charlie"),
      ]
    }
  }

  getStudentFromChild = (stud) => {
    let newStudents = [...this.state.students, stud];
    this.setState({ students: newStudents });
  }

  getId2RemoveFromChild = (id) => {
    let newStudents = this.state.students.filter(stud => stud.id !== id);
    this.setState({ students: newStudents });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CCAddStudent sendStudent2Parent={this.getStudentFromChild} />
          <FCStudentsList sendId2RemoveFromSL={this.getId2RemoveFromChild} sendId2RemoveFromSL2={this.getId2RemoveFromChild} students={this.state.students} />
        </header>
      </div>
    );
  }
}