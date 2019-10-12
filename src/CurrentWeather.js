import React from 'react'; 


const CurrentWeather = ({temperature,city,...props}) => {
    return (
        <div>
            <div>{temperature}</div>
            <div>{city}</div>
        </div>
    );
};

export default CurrentWeather;

