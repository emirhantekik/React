import React from 'react'
import Search from './Search'
import CurrentLocation from './CurrentLocation'
import { useNavigate } from 'react-router-dom';

function MobileSearch() {
  const navigate = useNavigate();

  const handleSearch = (searchCity) => {
    navigate(`/${searchCity}`);
  };
  return (
    <div className='flex flex-col h-screen' style={{ backgroundImage: `url(/images/Background.png)`, backgroundSize: 'cover' }}>
      <div className='flex items-center justify-center' style={{ marginTop: "48px" }}>
        <img src="/images/Logo.png" alt="logo" />
        <p className='font-nunito text-white'>iWeather</p>
      </div>
      <div className='h-full flex flex-col justify-center items-center mb-[15rem]'>
        <div className='text-white' style={{ width: '311px', height: '52px', gap: '4px' }}>
          <p className='font-nunito flex items-center justify-center text-xl font-bold'>Welcome to <span className='text-[#8fb2f5]'>TypeWeather</span></p>
          <p className='font-nunito text-sm font-normal'>Choose a location to see the weather forecast</p>
          <div className='w-[311px] h-[56px] rounded-[8px] bg-[#1E1E29] p-[0px 20px]'>
            <Search onSearch={handleSearch} />
          </div>
          <div className='w-[311px] h-[56px] rounded-[8px] p-[0px 20px] mt-4'>
            <CurrentLocation />
          </div>
        </div>
      </div>
    </div>

  )
}

export default MobileSearch
