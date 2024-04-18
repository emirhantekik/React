import React, { useEffect, useState } from 'react'
import unixToTime from '../utils/unixToTime'
import unixToFullDate from "../utils/unixToFullDate"
import { useSelector } from "react-redux"
import useCityNameService from "../hooks/useCityNameService.js"

function Information({ data: APIdata }) {

    const [cityName, setCityName] = useState("");
    const { location } = useSelector(state => state.currentLocation)

    const { data: cityData, refetch } = useCityNameService(location.lat, location.lon)

    useEffect(() => {
        refetch(); // location değiştiğinde refetch fonksiyonunu çağır
    }, [location, refetch]);

    useEffect(() => {
        if (cityData && cityData.results && cityData.results[0]) {
            if (cityData.results[0].components.district) {
                setCityName(cityData.results[0].components.district)
            } else if (cityData.results[0].components.province) {
                setCityName(cityData.results[0].components.province)
            } else if (cityData.results[0].components.city) {
                setCityName(cityData.results[0].components.city);
            }else if(cityData.results[0].components.postal_city){
                setCityName(cityData.results[0].components.postal_city)
            } else {
                setCityName(cityData.results[0].components.state)
            }
        }
    }, [cityData]);

    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const sunriseTime = unixToTime(APIdata.current.sunrise);
        const sunsetTime = unixToTime(APIdata.current.sunset);
        const currentTime = unixToTime(APIdata.current.dt);

        // Arka plan resmini belirle
        if (sunriseTime <= currentTime && currentTime <= sunsetTime) {
            setBackgroundImage('/images/sun.jpeg');
        } else {
            setBackgroundImage('/images/night.jpeg');
        }
    }, [APIdata]);

    if (!cityData || !cityData.results || !cityData.results[0]) {
        return <div>Loading...</div>;
    }

    console.log(cityData)
    return (
        <div className='relative bg-[#D9D9D9] h-72 basis-1/4 rounded-lg md:rounded-3xl flex flex-col justify-center items-center shadow-dark-2xl'
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            {<p className='text-2xl font-bold m-5'>{cityName}</p>}
            <p className='text-7xl'>{unixToTime(APIdata.current.dt)}</p>
            <p className='text-base mb-5'>{unixToFullDate(APIdata.current.dt)}</p>
        </div>
    )
}

export default Information
