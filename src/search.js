import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleChange = (e) => {
    //console.log(e)
    this.setState({value: e.target.value});
  }
  //console.log(props)
  render() {
  return (
    <div className="searchBar">
      <input className='input' type="text" onChange = {this.handleChange}/>
      <button className='button' onClick={(e)=> this.props.searchMovie(this.state.value)}> Go! </button>
    </div>
  )
}
}
export default Search;
