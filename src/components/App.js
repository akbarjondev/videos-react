import React from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';
import VideoList from './VideoList';
class App extends React.Component {
  state = { videos: [] }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({videos: response.data.items})
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmitted={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
