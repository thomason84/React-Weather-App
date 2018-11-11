import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};

    //binds this to onInputChange so that the function will exist
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    //callback functions need to be bound to 'this'
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //go and fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a 5 day forecast in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}  />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}
