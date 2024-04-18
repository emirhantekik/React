import React from 'react'

import Navbar from "../components/Navbar.jsx"
import MobileSearch from "../components/MobileSearch.jsx"

function Home() {
  return (
    <div>
      <MobileSearch />
      <Navbar />
    </div>
  )
}

export default Home