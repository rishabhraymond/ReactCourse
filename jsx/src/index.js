//Import React and ReactDOM
import React from "react";
import ReactDOM  from "react-dom";

//Adding Components
var App = function() {
    let style = {backgroundColor: 'blue', color: 'white'};
    return(
        <div>
            <label className="label" htmlFor="name">Enter Name : </label>
            <input id="name" /> 
            <button style={style}>Submit</button>
        </div>
    );
};

//Rendering the componets to index.html
ReactDOM.render(<App/>, document.querySelector('#root'));