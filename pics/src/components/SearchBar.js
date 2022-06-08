import React from "react";

class SearchBar extends React.Component {
    state = { searchItem: '' }

    OnSubmitForm = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.searchItem);
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.OnSubmitForm} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchItem}
                            onChange={(event) => this.setState({ searchItem: event.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;