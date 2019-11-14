const body = document.querySelector("body"); // body의 첫 번째 노드의 정보를 가져옴.

const IMG_NUMBER  = 3; // 이미지 갯수 저장

function paintImage(imgNumber){
    const image = new Image(); // Image 객체 생성
    image.src = `images/${imgNumber+1}.jpg`; // Image 객체 source를 imgNumber를 이용하여 불러옴
    image.classList.add('bgImage'); // Image 객체에 bgImage class 지정
    body.appendChild(image); // body에 image 객체 추가
    
}
function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER); // 이미지 수만큼 랜덤 값 받아오기
    return number; // 랜덤 값 return
}
function init(){
    const randomNumber = genRandom(); // getRandom function을 이용해 랜덤값을 받아오고 randomNumber에 저장
    paintImage(randomNumber); // randomNumber를 이용해 paintImage function 실행
}

init();