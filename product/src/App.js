import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 state={
   data:[]
 }
componentDidMount() {
  fetch("http://localhost:5000/products")
    .then(data => {
      console.log("^^^^^^^^^", data)
      return data.json();
    })
    .then(res => this.setState ({ data: res}))
    .catch((err) => {console.log("%%%%%%%%%",err)})
}
  render() {
    console.log(this.state.data)
    const data = this.state.data;
    return (
      <div className="App">
          {
            data.map((product, index) => {
              return(
                <div key={index}>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                </div>
              );
            })
          }
      </div>
    );
  }
}

export default App;
