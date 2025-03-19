import { useGlobalContext } from "./context";
import { conditions } from "./data";
import background from './assets/images/background.svg'
// components 
import Header from "./components/Header";
import WeatherWindow from "./components/WeatherWindow";
import Loading from './components/Loading';

function App() {
  const { weatherData, loading} = useGlobalContext();
  const bground = weatherData ? conditions.find((item) => item.name == weatherData.weather[0].main).bg
  : background;

  if(loading) return <Loading />

  return (
 <div className="bg-no-repeat bg-cover pb-20 bg-fixed min-h-screen" 
 style={{backgroundImage: `url(${bground})`}}>

<Header />
<WeatherWindow data={weatherData} />

</div>
  )
}

export default App;
