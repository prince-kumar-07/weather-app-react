import "./weatherpage.css";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect } from "react";
import NoData from "./NoData";
import GetIcon from "./getIcon";


function Weatherpage() {

  const { apiData, countryFlag } = useContext(AppContext);

  const NA = "No data available";

  useEffect(() => {
    document.title = apiData?.name
      ? `Weather • ${apiData.name}`
      : "Weather • App";
  }, [apiData?.name]);

    if (!apiData?.name) {
    return <NoData />;
   }

  return (
   
    <div>

    <div className="weather-glass">

      <div className="location">
        <p>
          {apiData?.name ?? NA}
          {" "}
          <span>{apiData?.sys?.country ?? NA}</span>

          {countryFlag && (
            <span>
              <img
                className="country-img"
                src={countryFlag}
                alt="country flag"
              />
            </span>
          )}

        </p>
      </div>

      <div className="condition">
        <p className="main">
          {apiData?.weather?.[0]?.main ?? NA}
        </p>

        <p className="desc">
          {apiData?.weather?.[0]?.description ?? NA}
        </p>
      </div>

      <div className="icon">
        <GetIcon iconKey={apiData?.weather[0]?.icon} />
      </div>

      <div className="temp">
        <p>
          {apiData?.main?.temp ?? NA}
          {apiData?.main?.temp && <span>°C</span>}
        </p>
      </div>

      <div className="stats">

        <div className="stat">
          <p className="label">WIND</p>
          <p className="value">
            {apiData?.wind?.speed
              ? `${apiData.wind.speed} m/s`
              : NA}
          </p>
        </div>

        <div className="stat">
          <p className="label">HUMIDITY</p>
          <p className="value">
            {apiData?.main?.humidity
              ? `${apiData.main.humidity}%`
              : NA}
          </p>
        </div>

        <div className="stat">
          <p className="label">PRESSURE</p>
          <p className="value">
            {apiData?.main?.pressure ?? NA}
          </p>
        </div>

      </div>

    </div>
    </div>
  );
}

export default Weatherpage;
