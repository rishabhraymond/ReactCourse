import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{
    state = { lat: null, errorMsg: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position  => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMsg: err.message});
            }
        )
    }

    render(){
        if(!this.state.lat && this.state.errorMsg){
            return(
                <div>Error: {this.state.errorMsg}</div>
            );
        }
        
        if(this.state.lat && this.state.errorMsg === ''){
            return(
                <SeasonDisplay lat={this.state.lat}/>
            )
        }
        
        return(
            <Spinner loadingMsg = 'Please allow your browser to use location services'/>
        )
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));