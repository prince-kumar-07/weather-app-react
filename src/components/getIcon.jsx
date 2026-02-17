import './getIcon.css';
import { WiDaySunny } from "react-icons/wi";
import { WiNightPartlyCloudy } from "react-icons/wi";
import { BsCloudy } from "react-icons/bs";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa6";
import { BiCloudLightRain } from "react-icons/bi";
import { RiThunderstormsLine } from "react-icons/ri";
import { FaSnowflake } from "react-icons/fa";
import { BsCloudHazeFill } from "react-icons/bs";

function GetIcon({ iconKey }) {

  if (iconKey === "01d" || iconKey === "01n") {
    return (
      <div className='icon-01d'>
        <WiDaySunny size={100}  />
      </div>
    )}
    else  if (iconKey === "02d" || iconKey === "02n") {
    return (
      <div >
        <WiNightPartlyCloudy size={100}  />
      </div>
    )}
    else  if (iconKey === "02d" || iconKey === "02n") {
    return (
      <div>
        <WiNightPartlyCloudy size={100}  />
      </div>
    )}
     else  if (iconKey === "03d" || iconKey === "03n") {
    return (
      <div >
        <BsCloudy size={100}  />
      </div>
    )}
     else  if (iconKey === "04d" || iconKey === "04n") {
    return (
      <div >
        <WiDaySunnyOvercast size={100}  />
      </div>
    )}
     else  if (iconKey === "09d" || iconKey === "09n") {
    return (
      <div >
        <FaCloudRain size={100}  />
      </div>
    )}
     else  if (iconKey === "10d" || iconKey === "10n") {
    return (
      <div >
        <BiCloudLightRain size={100}  />
      </div>
    )}
     else  if (iconKey === "11d" || iconKey === "11n") {
    return (
      <div >
        <RiThunderstormsLine size={100}  />
      </div>
    )}
     else  if (iconKey === "13d" || iconKey === "13n") {
    return (
      <div >
        <FaSnowflake size={100}  />
      </div>
    )}
    else  if (iconKey === "50d" || iconKey === "50n") {
    return (
      <div >
        <BsCloudHazeFill  size={100}  />
      </div>
    )}
  

  return null;
}

export default GetIcon;
