
const output = document.getElementById("output");
const inputone = document.getElementById("inputone");
const inputtwo= document.getElementById("inputtwo");

const exc = (x,y)=> x*y ;

const exchaincr = ()=>{
    output.innerText= exc(inputone.valueAsNumber,inputtwo.valueAsNumber);
}
console.log(exchaincr());