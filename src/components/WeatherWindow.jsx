import { useGlobalContext } from "../context";
import { year,month,date,day } from "../utils";
import { conditions } from "../data";
import feelsIcon from "../assets/images/icons/feelsIcon.svg";
import wind from "../assets/images/icons/wind.svg";

const WeatherWindow = ({data}) => {
const {city,error} = useGlobalContext();

const icon = conditions.find((item) => item.name == data.weather[0].main).icon;
const currentCity = city.slice(0,1).toUpperCase() + city.slice(1);
const desc = data.weather[0].description;
const description = desc.slice(0,1).toUpperCase() + desc.slice(1); 

if(error.show){
  return (
    <div className="backdrop-blur-xl backdrop-brightness-90 p-16 md:p-24 rounded-2xl mt-36 w-5/6 mx-auto">
 <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl text-center text-white">{error.msg}</h1>
    </div>
  )
}

  return (
    <div className="flex flex-wrap justify-center items-center gap-7 md:gap-14 mt-20 text-white text-center">
{/* Общая инфа  */}
<div className="backdrop-blur-xl backdrop-brightness-90 p-16 md:p-24 rounded-2xl">
 <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl">{currentCity}</h1>
 <h2 className="text-xl sm:text-3xl xl:text-4xl mt-5 mb-3">{`${day}, ${date} ${month}`}</h2>
 <p className="text-lg sm:text-xl xl:text-2xl">{year} год</p>
</div>
{/* температура  */}
<div className="backdrop-blur-xl backdrop-brightness-90 p-16 md:p-24 rounded-2xl">
<div className="flex gap-3 items-center mb-5">
<img src={icon} className="size-11 xl:size-20 mr-3" alt="значок погоды"/>
<i className="text-3xl sm:text-5xl xl:text-6xl">{Math.floor(data.main.temp)}</i>
<img src={feelsIcon} className="size-11 xl:size-14" alt="значок градуса" />
</div>
<p className="text-xl sm:text-2xl xl:text-3xl">{description}</p>
</div>
{/* ощущения погоды  */}
<div className="backdrop-blur-xl backdrop-brightness-90 p-10 md:p-24 rounded-2xl">

 <div className="flex items-center mb-5">
<i className="text-xl sm:text-3xl xl:text-4xl"> Ощущается как: {Math.floor(data.main.feels_like)}</i>
<img src={feelsIcon} className="size-11 xl:size-14" alt="значок градуса" />
</div>

<div className="flex gap-2 items-center">
<img src={wind} className="size-11 xl:size-14" alt="ветер" />
<p className="text-lg sm:text-xl xl:text-2xl">Ветер: {Math.floor(data.wind.speed)} км/c</p>
</div>

</div>

    </div>
  );
};

export default WeatherWindow;
