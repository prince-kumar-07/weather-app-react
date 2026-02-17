import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useCallback } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState();
  const [countryFlag, setCountryFlag] = useState();
  const [loading, setLoading] = useState(false);
  // const [weatherIcon, setWeatherIcon] = useState();

  async function fetchDataByCity(cityName) {
    setLoading(true);

    if (cityName === "" || cityName === " ") {
      toast.error(`City field is empty`);
      return;
    }

    try {
      const fetchData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=46ba7cbac370536c459bbafa36955409&units=metric`,
      );
      const data = await fetchData.json();

      //  console.log(data)
      if(data.name){
      setApiData(data);
     
      
      setCountryFlag(
        `https://flagsapi.com/BE/shiny/64.png`.replace("BE", data.sys.country),
      );
//      setWeatherIcon(
//   `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
// );
   
      setOpen(false);
    } else {
      
      toast.error(data.message)
    }
    } 
    catch (error) {
     toast.error("Something went wrong");
     
    }
    setLoading(false);

  }


const fetchDataByLonLat = useCallback(async (lat, long) => {

  setLoading(true);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=46ba7cbac370536c459bbafa36955409&units=metric`
    );

    const data = await response.json();

    setApiData(data);

    setCountryFlag(
      `https://flagsapi.com/${data.sys.country}/shiny/64.png`
    );

    // setWeatherIcon(
    //   `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    // );

  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false); 
  }

}, []); 


const getLongLat = useCallback(() => {

  setLoading(true);

  navigator.geolocation.getCurrentPosition(
    async (pos) => {

      await fetchDataByLonLat(
        pos.coords.latitude,
        pos.coords.longitude
      );

      setLoading(false);
      setOpen(false);

    },
    () => {
      toast.error("Please enable location permission");
      setLoading(false);
    }
  );

}, [fetchDataByLonLat]);


const handleOnload = useCallback(async () => {
  setLoading(true);

  const permission = await navigator.permissions.query({
    name: "geolocation",
  });

  if (permission.state === "granted" || permission.state === "prompt") {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        await fetchDataByLonLat(
          pos.coords.latitude,
          pos.coords.longitude
        );
        setLoading(false);
      },
      () => {
        setLoading(false);
        setOpen(true);
      }
    );
  } else {
    setLoading(false);
    setOpen(true);
  }
}, [fetchDataByLonLat, setLoading, setOpen]);


  const value = {
    fetchDataByCity,
    fetchDataByLonLat,
    apiData,
    setApiData,
    city,
    setCity,
    open,
    setOpen,
    country,
    setCountry,
    setCountryFlag,
    countryFlag,
    loading,
    setLoading,
    // weatherIcon,
    getLongLat,
    handleOnload
  };
  
  return (
    <div>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}

export default AppContextProvider;
