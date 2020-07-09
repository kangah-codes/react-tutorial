import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: 'Initial data'
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(e){
    this.setState({data: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.updateState}>Update</button>
        <h4>State data: {this.state.data}</h4>
      </div>
    )
  }
}

export default App;