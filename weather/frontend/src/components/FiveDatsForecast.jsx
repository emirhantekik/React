import React from 'react'
import unixToDate from "../utils/unixToDate";
import calvinToDegree from '../utils/calvinToDegree';
import unixToDay from "../utils/unixToDay";

function FiveDatsForecast(data) {


    return (
        <div className='bg-[#16161F] sm:bg-[#D9D9D9] md:rounded-3xl basis-1/4 flex sm:flex-col justify-evenly items-center w-full h-full'>
            <p className='font-bold mt-2 text-2xl hidden sm:inline-block'>5 Günlük Tahmin</p>
            {
                data.data && data.data.daily.slice(1, -2).map((dataDaily, i) => (
                    <div key={i} className='flex sm:flex-col items-center'>
                        <div className='w-full flex flex-col sm:flex-row items-center sm:mt-2 sm:justify-evenly'>
                            <p className='text-[#BFBFD4] sm:hidden'>{unixToDay(dataDaily.dt)}</p>
                            {/* Icon - Silmeyi unutma Icon değişecek Taslak için böyle */}
                            <img src={`http://openweathermap.org/img/wn/${dataDaily.weather[0].icon}.png`} alt="Weather Icon" />
                            {/* Degree */}
                            <p className='text-[#FAFAFA]'>{calvinToDegree(dataDaily.temp.day).toFixed(0)}°C</p>
                            {/* Date */}
                            <p className=' text-sm text-[#7F7F98] sm:hidden'>{calvinToDegree(data.data.hourly[10].temp).toFixed(0)}°C</p>
                            <p className=' hidden sm:inline-block ml-5 text-[#BFBFD4]'>{unixToDate(dataDaily.dt)}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default FiveDatsForecast