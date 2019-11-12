const toDoform = document.querySelector(".js-todoForm"), //js-todoForm의 첫 번째 노드의 정보를 가져옴.
    toDoInput = toDoform.querySelector("input"), // toDoform에서 input의 첫 번째 노드의 정보를 가져옴.
    toDoList = document.querySelector(".js-toDoList"); // js-toDoList의 첫 번째 노드의 정보를 가져옴.

const TODOS_LS = 'toDos'; // localStorage 저장용 Key

let toDos = []; // toDoList 저장 Array

function deleteToDo(event){ // ToDo 지우는 function
    const btn = event.target; // event가 실행된 target을 찾음.
    const li = btn.parentNode; // target의 부모 Node를 가져옴.
    toDoList.removeChild(li); //toDoList에서 li을 삭제시킴.
    const cleanToDos = toDos.filter(function(toDo){ // 클릭한 target의 id 값과 일치하지 않은 정보를 cleanToDos[]에 저장시킴
        return toDo.id !== parseInt(li.id);
    });
    for(var i = 0; i<cleanToDos.length; i++){ //cleanToDos[]에 저장된 id 값 재정렬
        cleanToDos[i].id = i+1;
    }
    toDos = cleanToDos; // toDos에 바뀐 정리된 cleanToDos 저장
    saveToDos(); // saveToDos function 실행
    
}

function saveToDos(){ 
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // localStorage에 TODOS_LS Key와 toDos Value를 String 형식으로 저장
}

function paintToDo(text){
    const li = document.createElement("li"); // list Element 생성
    const delBtn = document.createElement("button"); // button Element 생성
    const span = document.createElement("span"); // span Element 생성
    const newId = toDos.length + 1; // toDos[] 길이 + 1
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click",deleteToDo); // delbtn Click시 deleteToDo function 실행
    span.innerHTML = text;
    li.appendChild(delBtn); // li Element에 delBtn Element 추가
    li.appendChild(span); // li Element에 span Element 추가
    li.id = newId; // li Element id 값을 저장
    toDoList.append(li); // toDoList에 li Element 추가
    const toDoObj = {
        text: text, // 사용자가 입력한 값인 text를 text에 저장
        id: newId,
    };
    toDos.push(toDoObj); // toDos[]에 toDoObj 추가
    saveToDos(); // saveToDos function 실행
}

function handleSubmit(event){ // toDo 추가해주는 function
    event.preventDefault(); // event 기본 기능을 없애줌
    const currentValue = toDoInput.value; // 사용자가 입력한 값을 currentValue에 저장
    paintToDo(currentValue); // paintToDo function을 currentValue parameter를 이용하여 실행
    toDoInput.value = ""; // toDoInput 값을 비워줌.
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); // localStorage에 TODOS_LS Key의 Value를 loadedToDos에 저장
    if(loadedToDos !== null){ // loadedToDos가 null이 아닐 경우
        const parsedToDos = JSON.parse(loadedToDos); // loadedToDos을 Object로 변환하여 parsedToDos[]에 저장
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text); // parsedToDos Element 각각 paintToDo function을 ELement.text parameter를 이용하여 실행
        });
    }
}
function init(){ // 페이지 로딩시
    loadToDos(); // loadToDos function 실행
    toDoform.addEventListener("submit", handleSubmit); // toDoform 값 입력 후 Enter 시 handleSubmit function 실행
}

init();
