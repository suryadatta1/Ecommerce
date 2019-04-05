import React, { Component } from 'react';
import {Switch,Route} from  'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from  './components/ProductList';
import Details from  './components/Details';
import Cart from  './components/Cart';
import Default from  './components/Default';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path ="/" component={ProductList} /> 
        <Route path ="/details" component={Details} />
        <Route path ="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
  

    </React.Fragment>
    );
  }

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
