import React from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentLocation from './CurrentLocation';
import Search from './Search';


function Navbar() {
    const navigate = useNavigate();

    const handleSearch = (searchCity) => {
        // Arama yapıldığında URL'e yönlendirme yap
        navigate(`/${searchCity}`);
    };

    return (
        <div className='flex w-full hidden lg:inline-block'>
            <div className='basis-1/4 mt-2 text-sm'>Light Mode/Dark Mode</div>
            {/* Search */}
            <Search onSearch={handleSearch} />
            {/* ********************************************************************* */}
            <div className='basis-1/4 mt-2'>
                <CurrentLocation />
            </div>
        </div>
    );
}

export default Navbar;
