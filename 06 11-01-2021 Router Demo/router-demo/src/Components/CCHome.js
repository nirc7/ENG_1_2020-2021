import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class CCHome extends Component {


    btnGoToStudentPageWithObjData = () => {
        var userObj = {
            userId: 9,
            userName: 'avi',
            grade:100
        };

        this.props.history.push({
            pathname: '/student/' + 8,
            search: '?query=abc',
            state: { userObj2Send: userObj }
        });
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <button onClick={this.btnGoToStudentPageWithObjData} >go to spwd</button>
            </div>
        )
    }
}

export default withRouter(CCHome);
