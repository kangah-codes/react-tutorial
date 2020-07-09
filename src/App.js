import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      textColor: 'black',
    }

    this.changeColor = this.changeColor.bind(this);

  }

  changeColor(){
    let colors = ['red', 'blue', 'orange', 'green', 'pink', ''];
    this.setState({textColor: colors[Math.floor(Math.random() * colors.length)]})
  }

  render(){
    return (
      <div id="mainDiv">
          <h1 style={{color:this.state.textColor}}>Press the button to change the color</h1>
          <button onClick={this.changeColor} id="colorBtn">Change Color</button>
      </div>
    )
  }
}

export default App;