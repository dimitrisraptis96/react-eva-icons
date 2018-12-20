import React, { Component } from 'react';
import * as eva from 'eva-icons';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    eva.replace();
  }
  
  render() {
    const icons = Object.keys(eva.icons);
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            react-eva-icons
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <div style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'space-around',
            }}>
            {icons.map( (icon, index) => (
              <div style={{
                background: 'tomato',
                padding: '5px',
                width: '200px',
                height: '150px',
                marginTop: '10px',
                
                lineHeight: '150px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '3em',
                textAlign: 'center',
              }}>
                
              <i data-eva={icon} key={index} data-eva-fill="#fff"> </i>
              </div>
            ))}
            </div>

        </header>
      </div>
    );
  }
}

export default App;
