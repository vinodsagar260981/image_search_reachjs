import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './Image_List';

class App extends React.Component{
  state = { images:[] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
    params:{ query: term }
    
    });

    this.setState({images: response.data.results});
  }
  render(){
    return(
      <div className="ui container" style={{marginTop: "10px"}}>
        <h1><SearchBar onSubmit={this.onSearchSubmit}/></h1>
        <ImageList images= {this.state.images}/>
      </div>
    );
  }
}

export default App;
