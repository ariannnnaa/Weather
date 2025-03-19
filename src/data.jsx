// фон
import clearBg from './assets/images/clearbg.jpg'
import cloudsBg from './assets/images/cloudsbg.svg'
import drizzleBg from './assets/images/drizzlebg.jpg'
import rainBg from './assets/images/rainbg.svg'
import snowBg from './assets/images/snowbg.svg'
import thunderstormBg from './assets/images/thunderstormbg.svg'
// значки
import clear from './assets/images/icons/clear.svg'
import clouds from './assets/images/icons/clouds.svg'
import drizzle from './assets/images/icons/drizzle.svg'
import rain from './assets/images/icons/rain.svg'
import snow from './assets/images/icons/snow.svg'
import thunderstorm from './assets/images/icons/thunderstorm.svg'

const conditions = [
{
    name: "Clear",
    icon: clear ,
    bg: clearBg ,
},
{
    name: "Clouds",
    icon: clouds,
    bg: cloudsBg
},
{
    name: "Drizzle",
    icon: drizzle,
    bg: drizzleBg 
},
{
    name: "Rain",
    icon: rain ,
    bg: rainBg 
},
{
    name: "Snow",
    icon: snow,
    bg: snowBg
},
{
    name: "Thunderstorm",
    icon: thunderstorm,
    bg: thunderstormBg 
},
]

export {conditions};
