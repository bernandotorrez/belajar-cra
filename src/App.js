import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import Menu from './Components/Menu'
import Footer from './Components/Footer'

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    fetch("http://localhost:3001/api/login")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
          });

          console.log(result)
        },
        (error) => {
          console.log(`Error : ${error}`)
        }
      )
    
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">

      <Menu/>

        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {data.map(value => (
          	<tr>
            <td>{value.username}</td>
            <td>{value.level}</td>
          	</tr>
            ))}
          </tbody>
        </table>

        <Footer/>
      </div>
    );
  }
}

export default App;
