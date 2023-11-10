
const usdtommk= document.getElementById("usdtommk");
const mmktousd= document.getElementById("mmktousd");
const result= document.getElementById("result");
const exchainbtn= document.getElementById("exchainbtn");
const currentexchainrate = 2900;
const amount= document.getElementById("amount");
const currencies =document.getElementById("currencies");

const dtombtm = document.getElementById("dtombtm")

const run = (x,y)=> x*y ;
const runmtok = (x,y)=> x/y ;


const mtod = ()=> {
    result.innerText=runmtok(amount.valueAsNumber,currentexchainrate);
}

const sayargyi = ()=>{
    if(currencies.onselect.name("dm")){
        return mtod();}
        else{
            return result.innerText = run(currentexchainrate,amount.valueAsNumber);
        }
    }
        

// const saragyi = ()=>{
//     if(currencies. == 1){
//         mtod();
//     }else{dtom()};
// }