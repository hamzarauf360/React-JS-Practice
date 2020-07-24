import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserInfo.css';
import UserOutput from './UserOutput/UserOutput';


import UserInput from './UserInput/UserInput';


class App extends Component {

  //state added to username task 4

  state = {
    UserNames : [
      {username:"Haroon"},
      {username:"Khuram"},

    ],
  }


  //task 5 

    userNameManipulator = (event) => {
        //update the state

        this.setState({
          UserNames : [
            {username: event.target.value}, // to update the state according to the input target box
            {username:"Khuram"},
          ],
        });
    }

    





  render() {

    const style = {
      border: "1px solid yellow",
    };

    return (
      <div className="App">

        <UserOutput userName={"hamza"}>Hello From Me</UserOutput>
        <UserOutput userName={"rosh"}/>

        <UserOutput userName={this.state.UserNames[0].username}/>
        <UserInput style={style} changed={this.userNameManipulator} startingName={this.state.UserNames[0].username}></UserInput>

        <UserOutput userName={this.state.UserNames[1].username}/>




      </div>
    );
  }
}

export default App;


