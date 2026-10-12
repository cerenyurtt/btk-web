const elma= 123;
const armut= 456;

if(elma===armut) {
    console.log("elma armuda eşittir.");
}
if(elma!==armut) {
    console.log("elma armuda eşit değildir.");
}

if( 5>2) {
    console.log("5 2'den büyüktür.");
}

if(5>=5) {
    console.log("5,5'ten büyük veya eşittir.");
}

const hiz=70;
const plaka="SCA";
const gun=17;
/*if(hiz>80 && plaka!=="AA") {
console.log("ceza yaz.");
}*/
/*if(hiz>80 || plaka==="SCA" && gun!==17)  {
console.log("ceza yaz");
}*/ 

/*if(gun!==17 && hiz > 80 || plaka==="SCA") {
    console.log("ceza yaz.");
}

const sicaklik=20;
if(sicaklik > 25) {
    console.log("sicak.");
} 
else if( sicaklik>15) {
    console.log("ilik");
} else { 
    console.log("soğuk");
}*/

 
const yil=2400;
/*if( yil%4 === 0 && (yil%100 !==0 || yil%400===0)) {
    console.log("artık yıl");
} else {
    console.log("artık yıl değil");
}*/

/*if(yil % 400===0) {
    console.log("artik yil");
} else if (yil%100===0) {
    console.log("artik yil değil");
} else if (yil%4===0) {
    console.log("artik yil");}
else {
    console.log("artik yil değil");
}*/ 

/*const eposta="ceren@gazi.edu.tr";
if(eposta.endsWith("@gazi.edu.tr")) {
    console.log("GAZİ");
} else if(eposta.endsWith("@metu.edu.tr")) {
    console.log("ODTÜ");
} else {
    console.log("Diğer");
} */

for (let i=1, j=1; i<15; i+=j, j+=1) {
    //console.log(i);
}

 /*for(let i=0;true;i++) {
    if(i === 5){
        continue;
    }

    if(i === 10) {
        break;
    }
    console.log(i);
 }*/

 let sayi=4;
 let asalk=0;
 for(let i=2;i<sayi/2;i++) {   
   if(sayi%i === 0) {
        asalk++;
    }
 }
 if(asalk=0 && sayi>1) {
    console.log("sayınız asaldır.");
 } else {
    console.log("sayınız asal değildir.");
 }
 
 function hesapla() {
    const sayi = Number(document.getElementById=("sayi").value);
    asalMi(sayi);
 }
 function asalMi(sayi) {
    let asal = true;
    for(let i=2;i<=Math.sqrt[sayi];i++) {
        if(sayi%i===0) {
            asal = false;
        } 
    }

 if(sayi>=2 && asal) {
    alert("asal");
  } else {
    alert("asal degil");
  }

 } 