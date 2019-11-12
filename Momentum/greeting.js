const form = document.querySelector(".js-form"), // document에서 js-form class의 첫 번째 노드 정보를 가져옴
    input = form.querySelector("input"), // form에서 input class의 첫 번째 노드 정보를 가져옴
    greeting = document.querySelector(".js-greetings"); // document에서 js-grettings class의 첫 번째 노드 정보를 가져옴

const USER_LS = "currentUser", // localStorage 저장용 Key
    SHOWING_CN = "showing"; // 화면에 보이게 해주는 옵션
    
function paintGreeting(text){ // text를 받아와 화면에 뿌려주는 function
    form.classList.remove(SHOWING_CN); // form을 안보이게 만듦.
    greeting.classList.add(SHOWING_CN); // 텍스트 출력해주는  class 보이게 만듦.
    greeting.innerText = `Hello ${text}` // greeting 텍스트 수정
}

function saveName(text){ // localStorage에 저장하는 function
    localStorage.setItem(USER_LS,text); // text를 USER_LS Key로 저장
}
function handleSubmit(event){
    event.preventDefault(); // event의 기본 기능을 없애줌.
    const cureentValue = input.value; // form에 입력된 값을 가져와 저장
    paintGreeting(cureentValue); // painGreeting function에 currentValue 파라미터 전송하여 실행
    saveName(cureentValue); // saveName function에 currentValue 파라미터 전송하여 실행
}

function askForName(){ 
    form.classList.add(SHOWING_CN); // form을 보이게 만듦.
    form.addEventListener("submit", handleSubmit); // 제출 이벤트 리스너 실행
}
function loadName(){ 
    const cureentUser = localStorage.getItem(USER_LS); // localStorage에서 USER_LS Key의 검색 값을 저장
    if(cureentUser === null){ // null일 경우
        askForName(); // askForName function 실행
    }else{
        paintGreeting(cureentUser); // paintGreeting function에 currentUser 파라미터 전송하여 실행
    }
}

function init(){
    loadName(); // loadName function 실행
}
init(); // 페이지가 열리면 init function 실행