//slect an element --

const heading = document.getElementById("heading");
const para =document.getElementById("para");
const lists = document.getElementById("lists");
const textinput =document.getElementById("textinput");
const btn = document.getElementById("btn");

// heading.innerText= "San Kyi Tar Par";

// para.innerText = "hello hello helllo hello"

// lists.innerHTML="<li>one</li><li>two</><li>three</>"
 lists.innerHTML = "<li>one </li>"
 lists.innerHTML += "<li>two </li>"
 lists.innerHTML += "<li>three </li>"

// textinput.value ="yha";

// btn.innerText ="Click me"

function run(){
    heading.innerText= textinput.value 
    textinput.value =null
}

// console.log(heading);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(para);
// console.log(para.innerHTML);
// console.log(para.innerText);
// console.log(lists);
// console.log(lists.innerText);
// console.log(lists.innerHTML);
// console.log(textinput);
// // console.log(btn);

//Pritical 
//area တွက်တဲ့ fun လေးတစ်ခုတည်ေဆာက်ပါမယ်။ width and breadth ယူပါမယ် area ကိုတွက်ပါမယ်။ အဖြေကို square feet နဲ့ထုတ်ေပးပါမယ်။
// တွက်ချက်မှု w,b,result တေွကိုမှတ်တမ်းအဖြစ်သိမ်းထားပါမယ်။


// Dom manipulation--

//Attribter တေွပြင်လို့ရ-----

const link =document.getElementById("link");

//properties နဲ့ ပြင်တာ
console.log(link)
console.log(link.htef)
link.href = "http://mms-it.com"
link.target = "_self"

//method နဲ့ပြင်တာ
console.log(link.getAttribute("href"));
link.setAttribute("href","http://youtube.com");
console.log(link.getAttribute("href"));

//method နဲ့ဖြတ်
// ူremoteAttribute("href")
//----------------------------------------------------------
//Style တေွပြင်လို့ရ--
console.log(link)
link.style.color="pink";
link.style.backgroundColor="green";
link.style.padding= "10px 20px";
link.style.textDecoration="none";
link.style.borderRadius="10px";

//Class တေွလည်းသံုးလို့ရ---
//class ထည့်တဲ့ကိစ္စ--
btn.classList.add("bg-blue-600","text-white","px-10","py-4")

console.log(btn.classList);
//class တေွဖြုတ်ချလို့လည်းရ--
heading.classList.remove("font-sans");
heading.classList.replace("text-violet-400","text-pink-500");
heading.classList.toggle("bg-gray-400");
console.log(heading);
