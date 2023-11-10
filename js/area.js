
// slectors

const output = document.getElementById("output");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const lists = document.getElementById("lists");

//function

const area = function (x,y){
    return x * y;
}
const clculate = function(){
    output.innerText = area(width.valueAsNumber, breadth.valueAsNumber) + " sqft"
}

const store = ()=>{
    lists.innerHTML += `<li> ${width.value} ft * ${breadth.value} ft = ${output.innerText} </li>`
    clearInput();
}

const clearInput = ()=>{
    output.innerText="...............";
    breadth.value=null;
    width.value = null;
}
