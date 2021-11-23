import React from 'react';
import Profile from './Component/profile.js';
class App extends React.Component{
  
  state = {
        isVisible: false,
    };



  toggleVisibility=()=>{
    this.setState({
      isVisible:! this.state.isVisible
    })
  }
  render () {
    return(
     
       
        <div className="App">
         <button className="btn" onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide Profile':'Show Profile'}</button>
      
  
         {this.state.isVisible && <Profile />}
         
      </div>
    )
  }
  
}
export default App ;
