import React from 'react'
import { useDispatch } from "react-redux"
import { setLocation } from '../redux/reducers/currentLocation';
import { useNavigate } from "react-router-dom"
import { MdOutlineLocationOn } from "react-icons/md";

function CurrentLocation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* 
      Kullanıcının bulunduğu adresin lat ve lon değerlerine erişmeyi sağlayan fonksiyon
  */
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude.toFixed(2);
          const longitude = position.coords.longitude.toFixed(2);

          /* 
              Kullanıcı ilk siteye girdiğinde kendi bulunduğu eyalet,
              şehirdeki hava durumu bilgilerini öğrenmesi için ve bu verileri
              Home.jsx'te göstermek için store de tut 
           */
          dispatch(setLocation({ lat: latitude, lon: longitude }))
          navigate("/CurrentLocation");
        },
        (error) => {
          console.error("Kullanıcının konumu alınamadı:", error);
        }
      );
    } else {
      console.error("Tarayıcı konum servisini desteklemiyor.");
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <button className='flex justify-center items-center bg-green-700 sm:bg-green-500 border rounded-full lg:rounded-lg p-1' onClick={getLocation}>
        <MdOutlineLocationOn className='text-lg font-bold text-white' />
        <p className='hidden lg:inline-block ml-2 font-bold text-white'>Güncel Konumunuz</p>
      </button>

    </div>

  )
}

export default CurrentLocation