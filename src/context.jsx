import { useState, useContext, useEffect, createContext } from "react";

const key = import.meta.env.VITE_API_KEY;
const api = "https://api.openweathermap.org/data/2.5/weather";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [city, setCity] = useState("turkmenabat");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (url) => {
    setLoading(true);
    try  {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      } 
      const data = await response.json();
      setWeatherData(data);
      setError({show: false, msg: ''});
    } catch (err) {
        setError({show: true, msg: err.message || 'Произошла ошибка'});
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(`${api}?q=${city}&appid=${key}&lang=ru&units=metric`);
  }, [city]);

  return (
    <AppContext.Provider
      value={{
        loading,
        city,
        setCity,
        weatherData,
        error,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
