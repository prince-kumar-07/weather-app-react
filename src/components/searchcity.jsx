import "./searchcity.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


function SearchCity() {

  const {getLongLat, fetchDataByCity, city, setCity, open, setOpen, apiData} = useContext(AppContext);
  
  return (
    <>
      <div className="btn-div">
        <button className="open-modal-btn" onClick={() => setOpen(true)}>
          ➕ Add Your City
        </button>
      </div>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Choose Location</h2>

            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchDataByCity(city);
                }
              }}
            />

            <button
              className="cta primary"
              onClick={() => {
                fetchDataByCity(city);
              }}
            >
              Search City
            </button>

            <span className="or">OR</span>

            <button className="cta secondary" onClick={getLongLat}>
              📍 Auto Detect Location
            </button>

            {apiData?.name && (
              <button className="close" onClick={() => setOpen(false)}>
                X
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchCity;
