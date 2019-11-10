/* const nicoInfo = { // 데이터 정렬
    name:"Nico",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMoives :["Along the gods",
    "LOTR",
    "Old Boy"],
    favFood : [{name:"Kimchi", fatty:false},
    {name:"Cheese burger", fatty:true}]
}
console.log(nicoInfo);

function sayHello(name, age){
     console.log('Hello!',name,'you have ',age,
      ' years of ages.');
    console.log(`Hello ${name} you are ${age} years old`) // 데이터 출력 방식
    return `Hello ${name} you are ${age} years old`
}

const greetNicolas = sayHello("Nicolas",15);
 
console.log(greetNicolas);


// Create function
 const calculator = {
 plus: function(a, b){
     return a + b;
 }
}

const plus = calculator.plus(5,5);
console.log(plus); 

//  Modifying the DOM with JS
    const title = document.getElementById("title"); // id 값으로 객체 가져오기
    const title = document.querySelector("#title"); // css 선택자 이용하여 id 값으로 객체 가져오기
    title.innerHTML = "Hi! From JS"; // 객체 내부 텍스트 변경
    title.style.color = "red"; // 객체 텍스트 컬러 변경
    document.title = "I own you now"; // 객체 타이틀 변경
    console.dir(document);  


// Events and event handlers
function handleResize(event) { 
    console.log(event);
    console.log("I have been resized");
}
window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");

function handleClick(){
    title.style.color ="blue";
}

window.addEventListener("click", handleClick);


// if, else, and, or 사용
const age = prompt("How old are you");
if(age > 18 && age<21){
    console.log("You can drink but you should not");
}else if(age>21){
    console.log("Go ahead");
}else{
    console.log('too young');
} */
 

// DOM - If else - Function practice
 const title = document.querySelector("#title");


 //const BASE_COLOR = "#34495e"
 const BASE_COLOR = "rgb(52, 73, 94)"
 const OTHER_COlOR = "#e67e22"

 // handleClick 함수 정의
 function handleClick(){
     console.log(title.style.color);
    //title.style.color = "red";
    const currentColor = title.style.color;
    if(currentColor == BASE_COLOR){
        title.style.color = OTHER_COlOR;
    }else{
        title.style.color = BASE_COLOR;
    }
 }
 
 // init 함수 정의
 function init(){
     title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); // 클릭 이벤트 추가
 }
init();