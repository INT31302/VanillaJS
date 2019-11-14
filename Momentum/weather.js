const weahter = document.querySelector('.js-weather'); // js-weatehr의 첫 번째 노드의 정보를 가져옴.

const API_KEY = "a9abb79dab873902d47aea54757f5d94"; //OpenWeather api Key 저장
const COORDS = 'coords'; // localStorage 저장용 Key

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` // 주소의 데이터를 가져옴
    ).then(function(response){
        return response.json(); // 데이터 불러와 처리중인 상태라면 처리중 상태를 가져옴
    }).then(function(json){ // json 데이터 준비가 완료되면
        const temperatrue = json.main.temp; // temp 정보를 받아와 temperatrue에 저장
        const place = json.name; // 위치 name을 받아와 place에 저장
        weahter.innerText = `${temperatrue} @ ${place}`; // weather span text를 '온도' @ '위치'로 표시
    });
}

function saveCoords(coordsObj){ // localStorage 저장하기 위한 function
    localStorage.setItem(COORDS,JSON.stringify(coordsObj)); // localStorage에 COORDS Key로 coordsObj를 String형으로 저장
}

function handleGeoSucces(position){ // 위도와 경도 가져오기 위한 function
    const latitude = position.coords.latitude; // latitude를 가져와 latitude 저장
    const longitude = position.coords.longitude; // longitude를 가져와 longitude 저장
    const coordsObj = {
        latitude, // latitude : latitude
        longitude // longitude : longitude
    };
    saveCoords(coordsObj); // coordsObj를 이용하여 saveCoords function 실행
    getWeather(latitude,longitude); // latitude, longitude를 이용하여 getWeather function 실행
}

function handleGeoError(){ // 정보를 불러올 수 없는 경우
    console.log('Cant access geo location');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); // 현재 위치를 받아올 수 있다면 handleGeoSucces function 실행, 아닐 경우 handleGeoError function 실행
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 COORDS 키의 Value를 가져와 loadedCoords에 저장
    if(loadedCoords === null){  // loadedCoords가 null 값이면
        askForCoords(); // askForCoords function 실행
    }else{ // null 값이 아닐 경우
        const parseCoords = JSON.parse(loadedCoords); // String형인 loadedCoords을 Object로 변환하여 parseCoords에 저장
        getWeather(parseCoords.latitude, parseCoords.longitude); // parseCoords.latitude, parseCoords.longitude를 이용하여 getWeather functino 실행
    }
}
function init(){
    loadCoords();
}
init();