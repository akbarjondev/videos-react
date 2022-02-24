import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmitted(this.state.term);
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search videos</label>
            <input 
              value={this.state.term}
              onChange={this.onInputChange}
              type='text' 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
