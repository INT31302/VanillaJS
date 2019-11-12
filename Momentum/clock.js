const clockContainer = document.querySelector(".js-clock"), // js-clock class의 첫 번째 노드의 정보를 가져옴
    clockTitle = clockContainer.querySelector(".js-title"); // clockCOntainer에서 js-title의 첫 번째 노드의 정보를 가져옴

function getTime(){ // 시간을 가져오기 위한 function
    const date = new Date();
    const minutes = date.getMinutes(); // 분 정보를 가져옴
    const hours = date.getHours(); // 시간 정보를 가져옴
    const seconds = date.getSeconds(); // 초 정보를 가져옴
    clockTitle.innerText = `${hours < 10? `0${hours}`:hours}:${  // 10 미만 숫자일 경우 0을 추가로 붙여주는 작업
        minutes < 10? `0${minutes}`:minutes}:${
        seconds < 10? `0${seconds}`:seconds}`;
}
function init(){
    getTime();
    setInterval(getTime,1000); // function을 주어진 시간마다 실행시켜줌
}

init();