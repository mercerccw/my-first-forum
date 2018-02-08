import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        this.setState({username: this.state.username});
        this.setState({password: this.state.password});
        alert('Username: '+this.state.username+' and '+ 'Password: '+this.state.password);

    }
    handleSubmit() {
        alert('Username: '+this.state.username+' and '+ 'Password: '+this.state.password);
        
    }


  render() {
    return (
        <div className="App">
          <label><b>Username</b></label>
          <input type="text" value={this.state.username} placeholder="Enter Username" name="uname" required/>
          <br/>
          <label><b>Password</b></label>
          <input type="password" value={this.state.password} placeholder="Enter Password" name="psw" required/>
          <br/>
          <button type="submit" className="button">Login</button>
          <button type="button" className="button">Cancel</button>
        </div>
    );
  }
}

export default App;
