import { useQuery } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = process.env.REACT_APP_API_KEY;

const useWeatherService = (lat, lon) => {
    const weatherData = useQuery(["weather"], async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            return response.data;
        } catch (error) {
            toast.error("Girdiğiniz lokasyon bulunamadı!");
            throw new Error("Girdiğiniz lokasyon bulunamadı!");
        }
    });
    return weatherData;
};

export default useWeatherService;
