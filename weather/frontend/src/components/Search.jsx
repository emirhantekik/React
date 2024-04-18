import { useRef } from 'react';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { setLocation } from '../redux/reducers/currentLocation';
import { toast } from "react-toastify";

const Search = ({ onSearch }) => {
    const dispatch = useDispatch();

    const location = useSelector(state => state.currentLocation)
    console.log("search location:", location.location)

    const inputRef = useRef(null);
    const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

    const handleClick = () => {
        inputRef.current.focus();
        console.log('Arama butonuna tıklandı.');
    };

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            const searchCity = inputRef.current.value;
            try {
                const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${searchCity}&key=${OPENCAGE_API_KEY}`);
                const { lat, lng } = response.data.results[0].geometry;
                dispatch(setLocation({ lat: lat, lon: lng }))
                console.log('Şehir:', searchCity, 'Lat:', lat, 'Lon:', lng);
                onSearch(searchCity);
                inputRef.current.value = "";
                console.log('Enter tuşuna basıldı.', searchCity);
            } catch (error) {
                toast.error("Girdiğiniz lokasyon bulunamadı!");
                inputRef.current.value = "";
            }
        }
    };

    return (
        <div className={`basis-1/2 flex mt-2 rounded-lg items-center w-full h-full lg:bg-gray-200 cursor-text`} onClick={handleClick}>
            <IoSearch className='m-2 text-lg text-gray-400' />
            <input
                ref={inputRef}
                className='basis-1/2 focus:outline-none bg-[#1E1E29] lg:bg-gray-200'
                placeholder='Search Location'
                onKeyPress={handleKeyPress}
                style={{ color: '#FAFAFA' }}
            />
        </div>
    );
};

export default Search;