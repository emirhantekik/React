import React from 'react'
import unixToTime from '../utils/unixToTime'
import calvinToDegree from '../utils/calvinToDegree'

import { CiLocationArrow1 } from "react-icons/ci";

function HourlyForecast({ data }) {
    return (
        <div className='flex flex-col items-center h-full'>
            <p className='font-bold text-2xl p-3'>Saatlik Tahmin</p>
            <div className='w-full flex justify-evenly h-full mt-2'>
                {
                    data.hourly.filter((dataHourly, i) => dataHourly.dt > data.current.dt && i % 3 === 0).slice(0, 4).map((dataHourly, i) => (
                        <div className='border rounded-2xl p-2 flex flex-col items-center w-32 mb-10' key={i}>
                            <p className='font-bold'>{unixToTime(dataHourly.dt)}</p>
                            <img src={`http://openweathermap.org/img/wn/${dataHourly.weather[0].icon}.png`} alt="Weather Icon" />
                            <p>{calvinToDegree(dataHourly.temp).toFixed(0)}°C</p>
                            <CiLocationArrow1 className='h-12 w-12 m-1' />
                            <p>{dataHourly.wind_speed.toFixed(0)}km/h</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HourlyForecast