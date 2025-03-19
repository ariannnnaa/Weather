const now = new Date();

const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
];
const days = [
"Вс",
"Пн",
"Вт",
"Ср",
"Чт",
"Пт",
"Сб",
]

let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let day = now.getDay();
month = months[month];
day = days[day];

export {year,month,date,day};