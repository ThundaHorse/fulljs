// import React, { useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       This is a sample stateful and server-side
//       rendered React application.
//       <br />
//       <br />
//       Here is a button that will track
//       how many times you click it:
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// }

// class App extends React.Component {
//   render () {

//     // Access prop set in index.js 
//     let txt = this.props.txt; 
    
//     return (
    // Wrap multiple tags in a div to avoid adjacent JSX tags error 
    // If without div, essentially returning React.createElement() React.createElement(), no no 
//      <div>
//        <h1>{txt}</h1>
//        <h1>Hello There</h1>
//        <b>Bold!</b>
//      </div>
//     )
// Using React to create element 
    // return React.createElement('h1', null, 'Testing');
//   }
// }

// export default App 

// Fat Arrow 
// const App = () => <h1>Hello There!</h1>

// Define properties that we're going to be looking for in component 
// Each key is name of prop, value is type of prop you're looking for 
// App.propTypes = {
//   txt: React.PropTypes.string
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "This is the defaut prop text"
// }

// export default App 

import React from 'react'; 

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      txt: "This is the state text",
      cat: 0
    }
  }
  
  update( e ) {
    this.setState({txt: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}></input>
        <h1>{this.state.txt} || {this.state.cat}</h1> 
      </div>
      // this.state.txt changes because we bind the update func to it, any change there wont update this.state.cat 
    )
  }
}

export default App 