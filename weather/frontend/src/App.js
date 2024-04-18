import Home from "./pages/Home"
import SearchPage from "./pages/SearchPage.jsx"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
        <div className="bg-[#13131A] sm:bg-gradient-to-br from-white to-gray-600 min-h-screen">
          <ToastContainer />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/:city" element={<SearchPage />} />
            <Route path="/CurrentLocation" element={<SearchPage />} />
          </Routes>
        </div>
  );
}

export default App;
