import React from 'react';


class SearchBar extends React.Component {
  state = { term: ''};
 
  dataSubmit = event =>{
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.dataSubmit} className="ui form">
                    <div className="field">
                        <label><h2>Image search</h2></label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term : e.target.value})}/>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar
