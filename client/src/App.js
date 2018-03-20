import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import PageShow from './PageShow'

class App extends React.Component {
  styles = {
    
  }
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

//   testFunc = () => {
//     let doc = new DOMParser().parseFromString('<div><b>Hello!</b></div>', 'text/html')
    
// }

  // }

  // handleSumbit = () => {
  //   const formInput = this.state.text
  //   formInput.push(inputArray)
  // }
  // split('').splice("").join
  render() {

    return (
      <div>
        <form>
          <ReactQuill 
            value={this.state.text}
            onChange={this.handleChange} 
          />
          <button>Submit</button>

        </form>
        <PageShow
            value={this.state.text}
            />
            {/* {doc} */}
      </div>
    )
  }
  
}

export default App;
