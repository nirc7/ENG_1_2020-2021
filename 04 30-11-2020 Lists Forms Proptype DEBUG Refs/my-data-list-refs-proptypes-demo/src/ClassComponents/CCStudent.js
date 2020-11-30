import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CCStudent extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h5>Student</h5>
        <h6>NAME: {this.props.name}</h6>
        <h6>ID:{this.props.id}</h6>
      </div>
    )
  }
}


CCStudent.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
