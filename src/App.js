import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';

import 'semantic-ui-react';






class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='App-title'>Itzel's Closet</h1>

         <Navbar />
        
        <p>
          Guatemalan Inspired Fashion
        </p>

        {/* Categories */}
        <h3 className="Sweat">Sweatshirts</h3>
        <div className="Sweat-shirts">
          <a href="https://amazon.com" class="ui medium       image">
          <img src="https://i.pinimg.com/originals/a6/2a/65/a62a6580f58250a689a2fe4a9776cc31.jpg"/>
          </a>
        </div>

        <h3 className="Shirts">T-shirts</h3>
        <div className="T-shirts">
          <a href="https://amazon.com" class="ui medium       image">
          <img src="https://ae01.alicdn.com/kf/HTB1GzAPJFXXXXcfXpXXq6xXFXXXv/High-Quality-Stretch-Short-sleeved-White-T-shirt-Men-s-Candy-Colors-Raglan-Blank-T-shirt.jpg_250x250.jpg"/>
        </a>
        </div>

        <h3 className="Coming">More</h3>
        <div className="Coming soon">
          <a href="https://amazon.com" class="ui medium       image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfMaz8nDWSEPFY6sIZk498NBWwb1H8efKx1QsqY_i5JSSnynX5g"/>
        </a>
        </div>

    </div>
    );
  }
}

export default App;
