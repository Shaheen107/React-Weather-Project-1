import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState(
        {
            city: "ASGHAD",
            feelsLIke: 23,
            temp: 26,
            tempMin: 23,
            tempMax: 27,
            humidity: 37,
            weather: "haze",
        }
    )

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather app</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}