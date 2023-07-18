import React, { useEffect } from 'react';
import { useState } from 'react';

const MapinmyLocation = () => {
    const [state, setstate] = useState();
    const [fail, setfaillocatin] = useState(null);
    const [lanlat, setcitylanlat] = useState(null);
    const [citymain, setcity] = useState(null);

    useEffect(() => {
        const citywiter = async () => {

            // const cityurl = `https://api.opencagedata.com/geocode/v1/json?q=${lan},${lon}&key=faed4d9eb29d483a866000c901ccb680&language=en&pretty=1`
            // const cityurl = `https://api.opencagedata.com/geocode/v1/json?q=${lan}+${log}&key=2a9db56c1dea4607a3b4e9e4e865c404`
            // const respois = await fetch(cityurl)
            // const res = await respois.json()
            console.log("res");
        }
        citywiter()
    }, []);
    const CurrentLocationdat = async (lat, lon) => {
        const urls = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=2a9db56c1dea4607a3b4e9e4e865c404`
        const respo = await fetch(urls);
        const resjosn = await respo.json();
        setcity(resjosn.results[0])
        setcitylanlat(`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7342.633047467606!2d${lon}!3d${lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689624379247!5m2!1sen!2sin`) 

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
        <div>
            <input type="text" onChange={(e) => { setstate(e.target.value) }} />
            <button onClick={CurrentLocation}>Current Location</button><span>{fail}</span>
            <br />
            MY Location
            <br />
            {!citymain ? <p>data not Found</p> :
                <>
                    <p>city:- <span className='span-tag'>{citymain["components"].city}</span></p>
                    <p>continent:- <span className='span-tag'>{citymain["components"].continent}</span></p>
                    <p>country:- <span className='span-tag'>{citymain["components"].country}</span></p>
                    <p>county:- <span className='span-tag'>{citymain["components"].county}</span></p>
                    <p>pitch:- <span className='span-tag'>{citymain["components"].pitch}</span></p>
                    <p>postcode:- <span className='span-tag'>{citymain["components"].postcode}</span></p>
                    <p>road:- <span className='span-tag'>{citymain["components"].road}</span></p>
                    <p>state:- <span className='span-tag'>{citymain["components"].state}</span></p>
                    <p>state_district:- <span className='span-tag'>{citymain["components"].state_district}</span></p>
                    <p>suburb:- <span className='span-tag'>{citymain["components"].suburb}</span></p>
                    <p>formatted:- <span className='span-tag'>{citymain["formatted"]}</span></p>
                    <p>geometry:- <span className='span-tag'>{citymain["geometry"]["lat"]}</span></p>
                    <p>geometry:- <span className='span-tag'>{citymain["geometry"]["lng"]}</span></p>
                    {/* <iframe src={lanlat} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe src={lanlat} width="600" height="450" ></iframe>
                </>
            }
        </div>
    );
};

export default MapinmyLocation;