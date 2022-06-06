import React from "react";

const Spinner = (props) => {
    const loadingMsg = props.loadingMsg;
    return(
        <div class="ui active dimmer">
            <div class="ui big text loader">{loadingMsg}</div>
        </div>
    )
}

Spinner.defaultProps = {
    loadingMsg: 'Loading......'
}

export default Spinner;