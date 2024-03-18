let a=document.querySelector(".color1");
let b=document.querySelector(".color2");
let c=document.querySelector(".color3");
let d=document.querySelector(".color4");
let e=document.querySelector(".color5");
let a1=document.querySelector("#colora");
let b1=document.querySelector("#colorb");
let c1=document.querySelector("#colorc");
let d1=document.querySelector("#colord");
let e1=document.querySelector("#colore");
let a2=document.querySelector("#lock1");
let b2=document.querySelector("#lock2");
let c2=document.querySelector("#lock3");
let d2=document.querySelector("#lock4");
let e2=document.querySelector("#lock5");

let gen=document.querySelector(".gen")

let r,g,bl;
let f1=0,f2=0,f3=0,f4=0,f5=0;

function randoma(){
    r=(Math.random())*255;
    g=(Math.random())*255;
    bl=(Math.random())*255;
}

gen.onclick=()=>{
    coolors();
}

function coolors(){
    if(f1!=1){
        randoma();
        a.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        a1.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        a2.style.backgroundColor="rgba("+String(r)+","+String(g)+","+String(bl)+",0.2)";
        a1.innerText="RGB("+String(r).substring(0,String(r).indexOf("."))+","+String(g).substring(0,String(g).indexOf("."))+","+String(bl).substring(0,String(bl).indexOf("."))+")";
    }

    if(f2!=1){
        randoma();
        b.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        b1.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        b2.style.backgroundColor="rgba("+String(r)+","+String(g)+","+String(bl)+",0.2)";
        b1.innerText="RGB("+String(r).substring(0,String(r).indexOf("."))+","+String(g).substring(0,String(g).indexOf("."))+","+String(bl).substring(0,String(bl).indexOf("."))+")";
    }

    if(f3!=1){
        randoma();
        c.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        c1.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        c2.style.backgroundColor="rgba("+String(r)+","+String(g)+","+String(bl)+",0.2)";
        c1.innerText="RGB("+String(r).substring(0,String(r).indexOf("."))+","+String(g).substring(0,String(g).indexOf("."))+","+String(bl).substring(0,String(bl).indexOf("."))+")";
    }

    if(f4!=1){
        randoma();
        d.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        d1.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        d2.style.backgroundColor="rgba("+String(r)+","+String(g)+","+String(bl)+",0.2)";
        d1.innerText="RGB("+String(r).substring(0,String(r).indexOf("."))+","+String(g).substring(0,String(g).indexOf("."))+","+String(bl).substring(0,String(bl).indexOf("."))+")";
    }

    if(f5!=1){
        randoma();
        e.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        e1.style.backgroundColor="rgb("+String(r)+","+String(g)+","+String(bl)+")";
        e2.style.backgroundColor="rgba("+String(r)+","+String(g)+","+String(bl)+",0.2)";
        e1.innerText="RGB("+String(r).substring(0,String(r).indexOf("."))+","+String(g).substring(0,String(g).indexOf("."))+","+String(bl).substring(0,String(bl).indexOf("."))+")";
    }
}



function changer(bad){
    if(bad==1){
        return 0;
    }
    else 
        return 1;
}

a2.onclick=()=>{
    f1=changer(f1);
}

b2.onclick=()=>{
   f2=changer(f2);
}

c2.onclick=()=>{
   f3=changer(f3);
}

d2.onclick=()=>{
    f4=changer(f4);
}

e2.onclick=()=>{
    f5=changer(f5);
}