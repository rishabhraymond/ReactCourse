import './SeasonDisplay.css';
import React from "react";

const SeasonConfig = {
    summer : {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter : {
        text: 'Burrrr.... its chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, month) => {
    if(month >= 3 && month <= 8){
        return latitude < 0 ? 'winter' : 'summer'
    }
    else{
        return latitude < 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;