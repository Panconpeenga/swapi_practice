import React, { Component } from 'react';
import './App.css';
import Card from './containers/Card';
import CardHome from './containers/CardHome';
import Navbar from './containers/Navbar';
import Particles from 'react-particles-js';
import 'tachyons';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff',
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: '#ffffff',
      opacity: .2,
      width: 1,
    }
  }
};

class App extends Component {
  constructor(){
    super();
      this.state= {
        url:'https://swapi.co/api/',
        category: '',
        selection: [],
        cardLoaded: false,
        nextUrl: ''
      }
    }

  changeCategory = (url, category, cardLoaded) => {
    this.setState({url: url, category: category, cardLoaded: cardLoaded}, () => this.getInfo())
    }

  getInfo = () => {
    const {url} = this.state;
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {this.setState({selection: data})})
      .catch(function(error) { console.log(error)});
  }

  onCardChange = (loaded) => {
    if(loaded === false)
    {this.setState({cardLoaded:true})}
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return (
      <div className="App" >
        <Particles className='particles' params={particlesOptions}/>
        <Navbar changeCategory={this.changeCategory}/>
        {this.state.url !== 'https://swapi.co/api/'?
          <div className='mw9 center ph3-ns'>
            <Card changeCategory={this.changeCategory} cardLoaded={this.state.cardLoaded} selection={this.state.selection} category={this.state.category} onCardChange={this.onCardChange}/>
          </div>
          : <CardHome />}
      </div>
    );
  }
}

export default App;
