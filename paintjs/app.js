const canvas = document.getElementById("jsCanvas"); // jsCanvas id 값을 가진 Element의 정보를 가져옴
const ctx = canvas.getContext("2d"); // canvas를 2d로 설정
const colors = document.getElementsByClassName("jsColor"); // jsColor className 값을 가진 Element의 정보를 가져옴
const range = document.getElementById("jsRange"); // jsRange id 값을 가진 Element의 정보를 가져옴
const mode = document.getElementById("jsMode");  // jsMode id 값을 가진 Element의 정보를 가져옴
const saveBtn = document.getElementById("jsSave");  // jsSave id 값을 가진 Element의 정보를 가져옴

const INITIAL_COLOR ="#2c2c2c"; // 기본 색 저장
const CANVUS_SIZE = 700; // canvus 사이즈 저장

canvas.width = CANVUS_SIZE;  // canvas width 설정
canvas.height = CANVUS_SIZE; // canvas height 설정

ctx.fillStyle="white"; // ctx의 도형 내부 색을 white로 설정
ctx.fillRect(0,0, CANVUS_SIZE, CANVUS_SIZE); // ctx의 (0,0)부터 (700,700)까지 속이 찬 도형을 그림
ctx.strokeStyle = INITIAL_COLOR; // 도형 윤곽선 색을 INITIAL_COLOR로 설정
ctx.fillStyle = INITIAL_COLOR; // 도형 내부 색을 INITIAL_COLOR로 설정
ctx.lineWidth = 2.5; // 도형 윤곽선 굵기를 2.5로 설정

let painting = false; // 그리기 상태 저장용
let filling = false; // 도형 채우기 상태 저장용

function stopPainting(){
    painting = false; // 그리기 중지
}

function startPainting(){
    painting = true; // 그리기 시작
}
function handleCanvasClick(){
    if(filling){ // filling === true일 경우
        ctx.fillRect(0,0, CANVUS_SIZE, CANVUS_SIZE); // ctx의 (0,0)부터 (700,700)까지 속이 찬 도형을 그림
    }
}

function onMouseMove(event){
    if(!filling){ // filling === false일 경우
        const x = event.offsetX, // 클릭한 Element 내부 좌표 x를 저장
        y = event.offsetY; // 클릭한 Element 내부 좌표 y를 저장
        if(!painting){ // painting === false일 경우
            ctx.beginPath(); // 시작점을 저장함
            ctx.moveTo(x, y); // x,y로 점을 이동
        }else{ // painting === true일 경우
            ctx.lineTo(x,y); // 이전 점에서 x, y까지 선을 이어줌(그리진 x)
            ctx.stroke(); // 그려줌
        }
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor; // Element의 backgorundColor를 받아옴
    ctx.fillStyle = color; // 도형 내부 색을 color로 설정
    ctx.strokeStyle = color; // 도형 윤곽선 색을 color로 설정
}

function handleRangeChange(event){
    const size = event.target.value; // Element의 value를 받아옴
    ctx.lineWidth = size; // 윤곽선 굵기를 size로 설정
}

function handleModeClick(){
    if(filling) { //filling === true일 경우
        mode.innerText = "Fill"; // mode Element의 Text를 Fill로 수정
    }else{//filling === false일 경우
        mode.innerText = "Paint";  // mode Element의 Text를 Paint로 수정
    }
    filling = !filling; // filling 값을 반대로 저장
}

function handleCM(event){
    event.preventDefault(); //event 기본 기능을 막아둠
}

function handleSaveClick(){
    const image = canvas.toDataURL(); // canvas 내용을 URL로 변환하여 저장
    const link = document.createElement("a"); // a Element를 생성
    link.href = image; // a Element의 href를 image로 설정
    link.download = "PaintJS{EXPORT}"; // 다운로드될 파일 이름 설정
    link.click(); // link를 clink하게 설정
}

if(canvas){ // canvas가 존재할 경우
    canvas.addEventListener("mousemove", onMouseMove); // canvas mousemove 이벤트 추가
    canvas.addEventListener("mousedown", startPainting); // canvas mousedown 이벤트 추가
    canvas.addEventListener("mouseup", stopPainting); // canvas mouseup 이벤트 추가
    canvas.addEventListener("mouseleave", stopPainting); // canvas mouseleave 이벤트 추가
    canvas.addEventListener("click", handleCanvasClick); // canvas click 이벤트 추가
    canvas.addEventListener("contextmenu", handleCM); // canvas contextmenu 이벤트 추가
}

if(colors){ // color가 존재할 경우
    Array.from(colors).forEach(color => // colors Element를 배열로 저장시키고 forEach 함수를 사용하여 각각에 이벤트 부여
        color.addEventListener("click", handleColorClick) // color click 이벤트 추가
   );
}

if(range){ // range가 존재할 경우
    range.addEventListener("input",handleRangeChange); // range input 이벤트 추가
}

if(mode){ // mode가 존재할 경우
    mode.addEventListener("click", handleModeClick); // mode click 이벤트 추가
}

if(saveBtn){ // saveBtn이 존재할 경우
    saveBtn.addEventListener("click",handleSaveClick); // saveBtn click 이벤트 추가
}