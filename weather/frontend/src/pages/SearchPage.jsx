import React, { useEffect } from 'react'
import { useSelector } from "react-redux"

import FiveDatsForecast from '../components/FiveDatsForecast'
import HourlyForecast from '../components/HourlyForecast'
import Information from '../components/Information'
import WeatherInformation from '../components/WeatherInformation'
import useWeatherService from "../hooks/useWeatherService"
import unixToTime from '../utils/unixToTime'

function Home() {

  const { location } = useSelector(state => state.currentLocation)

  const { data, isLoading, refetch } = useWeatherService(location.lat, location.lon);

  useEffect(() => {
    refetch(); // location değiştiğinde refetch fonksiyonunu çağır
  }, [location, refetch]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(data.current.weather[0].description)
  console.log(unixToTime(data.current.sunset))
  console.log(unixToTime(data.current.dt))

  console.log(data)

  return (
    <div className='h-screen w-full flex flex-col sm:justify-evenly sm:items-center sm:justify-center'>
      {/* 1. div */}
      <div className='flex flex-col md:flex-row md:justify-around lg:mt-2 w-screen'>
        <div className='sm:mr-4 p-3 lg:p-0'>
          <Information data={data} />
        </div>
        {/* Kişinin merak ettiği beldenin hava durumu bilgileri */}
        <div className='sm:ml-4 p-2 lg:p-0'>
          <WeatherInformation data={data} />
        </div>
      </div>



      {/* 2. div */}
      <div className='w-full mb-5 sm:mb-0'>
        <div className='flex flex-col md:flex-row md:justify-around md:w-screen'>
          <FiveDatsForecast data={data} />
          <div className='bg-[#D9D9D9] rounded-3xl basis-1/2 md:block hidden'>
            <HourlyForecast data={data} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
