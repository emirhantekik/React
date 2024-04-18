import React from 'react'

import calvinToDegree from "../utils/calvinToDegree"
import unixTotime from '../utils/unixToTime'

import { PiSunDim } from "react-icons/pi";
import { FaTemperatureHalf } from "react-icons/fa6";
import { BsFillSunsetFill } from "react-icons/bs";
import { BsFillSunriseFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import { FiWind } from "react-icons/fi";

function WeatherInformation({ data }) {
  return (
    <div className='basis-1/2 flex flex-col md:flex-row justify-around bg-black sm:bg-[#D9D9D9] md:rounded-3xl'>
      <div className='sm:hidden'>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center'>
            <FaTemperatureHalf className='text-[#3B3B54]' />
            <p className='font-nunito ml-1 text-[#BfBfD4]'>Thermal sensation</p>
          </div>
          <div className='text-white'>
            <p className='font-nunito'>{calvinToDegree(data.current.temp).toFixed(0)}°c</p>
          </div>
        </div>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center'>
            <FaTemperatureHalf className='text-[#3B3B54]' />
            <p className='ml-1 font-nunito text-[#BfBfD4]'>Feels Like </p>
          </div>
          <div className='text-white'>
            <p className='font-nunito'>{calvinToDegree(data.current.feels_like).toFixed(0)}°c</p>
          </div>
        </div>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center'>
            <FiWind className='text-[#3B3B54]' />
            <p className='ml-1 font-nunito text-[#BfBfD4]'> Wind Speed </p>
          </div>
          <div className='text-white'>
            <p className='font-nunito'>{data.current.wind_speed} km/h</p>
          </div>
        </div>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center'>
            <WiHumidity className='text-[#3B3B54]' />
            <p className='ml-1 font-nunito text-[#BfBfD4]'> Air Humadity </p>
          </div>
          <div className='text-white'>
            <p className='font-nunito'>{data.current.humidity}%</p>
          </div>
        </div>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center'>
            <PiSunDim className='text-[#3B3B54]' />
            <p className='ml-1 font-nunito text-[#BfBfD4]'> UV Index </p>
          </div>
          <div className='text-white'>
            <p className='font-nunito'>{data.current.uvi.toFixed(0)}</p>
          </div>
        </div>



      </div>
      <div>
        <div className='hidden sm:block flex flex-col p-2 lg:p-5'>
          <p className='font-bold flex flex-row items-center justify-center text-6xl'>
            <div className='flex flex-row'>
              <FaTemperatureHalf className='text-sm lg:hidden' />
              <span className='text-sm'>Thermal Sensation</span>
            </div>
            {calvinToDegree(data.current.temp).toFixed(0)}°c
          </p>
          <p className='text-sm'><span>Hissedilen :</span> {calvinToDegree(data.current.feels_like).toFixed(0)}°c</p>
          <div className='flex justify-evenly items-center mt-1'>
            <BsFillSunriseFill className='text-3xl' />
            <div className='text-sm items-center justify-center'>
              <p>sunrise:</p>
              <span>{unixTotime(data.current.sunrise)}</span>
            </div>
          </div>
          <div className='flex justify-evenly items-center'>
            <BsFillSunsetFill className='text-3xl' />
            <div className='text-sm mr-1 items-center justify-center'>
              <p>sunset:</p>
              {unixTotime(data.current.sunset)}
            </div>
          </div>
        </div>
      </div>
      <div className='hidden sm:block flex flex-col items-center  justify-center'>
        <img className='w-24 h-24 mb-2' src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`} alt="Weather Icon" />
        <p className='text-xl mt-2'>{data.current.weather[0].description}</p>
      </div>
      <div className='flex flex-row hidden sm:block sm:flex p-2'>
        {/* Humidity */}
        <div className='p-2'>
          <div className='flex flex-col items-center p-2'>
            <WiHumidity className='w-8 h-8' />
            <p className='text-sm'>{data.current.humidity}%</p>
            <p className='text-sm'>humidity</p>
          </div>
          {/* wind */}
          <div className='flex flex-col items-center p-2'>
            <FiWind className='w-8 h-8' />
            <p className='text-sm'>{data.current.wind_speed}km/h</p>
            <p className='text-sm'>wind speed</p>
          </div>
        </div>
        <div className='p-2'>
          {/* cloud */}
          <div className='flex flex-col'>
            <div className='flex flex-col items-center p-2'>
              <FaCloud className='w-8 h-8' />
              <p className='text-sm'>{data.current.clouds}</p>
              <p className='text-sm'>cloud</p>
            </div>
            {/* UV */}
            <div className='flex flex-col items-center p-2'>
              <p className='w-8 h-8'>icon</p>
              <p className='text-sm'>{data.current.uvi.toFixed(0)}</p>
              <p className='text-sm'>uv index</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInformation