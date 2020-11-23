import React, { Component } from 'react';
import FCLogin from '../FunctionalComponents/FCLogin';
import FCMessage from '../FunctionalComponents/FCMessage';


// const ColorEnum = {
//   RED: 0,
//   GREEN: 1,
//   BLUE: 2
// }
export default class CCMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: null
    };

    // console.log(ColorEnum.RED);
    // let a = ColorEnum.GREEN;    
  }

  getDataFromChild = (userData) => {
    //debugger;
    console.log('got data from child ', userData);
    this.setState({
      isLoggedIn: userData !== undefined,
      userName: userData !== undefined ? userData.name : null
    });
  }


  render() {
    return (
      <div>
        <h2>Main</h2>
        <FCLogin sendData2Parent={this.getDataFromChild} />
        <FCMessage isLoggedIn={this.state.isLoggedIn} checkedUserName={this.state.userName} />
      </div>
    )
  }
}
