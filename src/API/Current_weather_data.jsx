import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Current_weather_data = () => {
    const [citymain, setcity] = useState(null);
    const [lanlat, setcitylanlat] = useState(null);
    const [fail, setfaillocatin] = useState(null);
    const [search, setsearch] = useState('');
    useEffect(() => {
        const findcity = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e322d30c923c4f26c82811389689a883`;
            const respo = await fetch(url);
            const resjosn = await respo.json();
            setcity(resjosn.main)
            setcitylanlat(resjosn.coord)
        }

        findcity();
    }, [search])
    const CurrentLocationdat = async (lon, lat) => {
        const urls = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6db7852bc3356870fcc7e4a0acec2839`
        const respo = await fetch(urls);
        const resjosn = await respo.json();
        setcity(resjosn.main)
        setcitylanlat(resjosn.coord)
    }
    const getCurrentLocation = async (Position) => {
        await CurrentLocationdat(Position["coords"]["latitude"], Position["coords"]["longitude"])
        setfaillocatin("")
    }
    const faillocatin = () => {
        setfaillocatin("Current Location Error")
    }
    const CurrentLocation = async () => {
        navigator.geolocation.getCurrentPosition(getCurrentLocation, faillocatin)
    }
    return (
        <>
            <input type="search" placeholder='Any city name' value={search} onChange={(e) => { setsearch(e.target.value) }} />
            <button onClick={CurrentLocation}>Current Location</button><span className='failclass'>{fail}</span>
            {!citymain ? <p>no data found</p> : <div>
                <p>City Name is <span className='weather'>{search}</span></p>
                <p>temp_max is <span className='weather'>{citymain["temp_max"]}</span>Cel</p>
                <p>temp_min is <span className='weather'>{citymain["temp_min"]}</span>Cel</p>
                <p>Lon  <span className='weather'>{lanlat['lon']}</span></p>
                <p>Lat  <span className='weather'>{lanlat['lat']}</span></p>

            </div>}
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default Current_weather_data;

const codeString = `
import React, { useEffect, useState } from 'react';

const Current_weather_data = () => {
    const [citymain, setcity] = useState(null);
    const [lanlat, setcitylanlat] = useState(null);
    const [fail, setfaillocatin] = useState(null);
    const [search, setsearch] = useState('');
    useEffect(() => {
        const findcity = async () => {
            const url = https://api.openweathermap.org/data/2.5/weather?q={search}&units=metric&appid={API key};
            const respo = await fetch(url);
            const resjosn = await respo.json();
            setcity(resjosn.main)
            setcitylanlat(resjosn.coord)
        }

        findcity();
    }, [search])
    const CurrentLocationdat = async (lon, lat) => {
        const urls = https://api.openweathermap.org/data/2.5/weather?lat={lat}&units=metric&lon={lon}&appid={API key}
        const respo = await fetch(urls);
        const resjosn = await respo.json();
        setcity(resjosn.main)
        setcitylanlat(resjosn.coord)
    }
    const getCurrentLocation = async (Position) => {
        await CurrentLocationdat(Position["coords"]["latitude"], Position["coords"]["longitude"])
    }
    const faillocatin = () => {
        setfaillocatin("Current Location Error")
    }
    const CurrentLocation = async () => {
        navigator.geolocation.getCurrentPosition(getCurrentLocation, faillocatin)
    }
    return (
        <>
            <input type="search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
            <button onClick={CurrentLocation}>Current Location</button><span>{fail}</span>
            {!citymain ? <p>no data found</p> : <div>
                <p>City Name is <span className='weather'>{search}</span></p>
                <p>temp_max is <span className='weather'>{citymain["temp_max"]}</span>Cel</p>
                <p>temp_min is <span className='weather'>{citymain["temp_min"]}</span>Cel</p>
                <p>Lon  <span className='weather'>{lanlat['lon']}</span></p>
                <p>Lat  <span className='weather'>{lanlat['lat']}</span></p>

            </div>}
        </>
    );
};

export default Current_weather_data;
`