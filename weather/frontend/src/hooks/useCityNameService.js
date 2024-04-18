import { useQuery } from 'react-query';
import axios from 'axios';
const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

const useCityNameService = (lat, lon) => {
  const cityName = useQuery(['sehir'], async () => {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=${OPENCAGE_API_KEY}`
    );
    return response.data;
  });
  return cityName;
};

//response.data.results[0].components.city
export default useCityNameService;

