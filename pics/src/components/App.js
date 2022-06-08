import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImagesList from "./ImagesList";

class App extends React.Component {
    state = { images: [] }

    onSearch = async (searchItem) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchItem }
        });

        this.setState({ images: response.data.results });
    }

    render(){
        return(
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearch}/>
                <ImagesList images={this.state.images}/>
            </div>
        );
    }
}

export default App;