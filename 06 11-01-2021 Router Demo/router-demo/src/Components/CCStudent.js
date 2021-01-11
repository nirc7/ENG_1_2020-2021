import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CCStudent extends Component {
  render() {
    return (
      <div>
        <h2>Student</h2>
                user id = {this.props.match.params.userId} <br />


        {
          this.props.location.state !== undefined &&
          <div>
            <h3>form userObj2Send</h3>
             user id =  {this.props.location.state.userObj2Send.userId} <br />
                user name = {this.props.location.state.userObj2Send.userName} <br />
                user grade = {this.props.location.state.userObj2Send.grade} <br />
          </div>
        }
      </div>
    )
  }
}
export default withRouter(CCStudent);
