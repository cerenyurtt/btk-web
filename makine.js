let ifade="";

function ekraniGuncelle() {
 document.getElementById("ifade").innerText=ifade;
}

function tusaBas(tus) {
ifade+=tus;

ekraniGuncelle();
}

function sil() {
  ifade = ifade.substring(0,ifade.length-1);
 ekraniGuncelle();
}

function sifirla() {
  ifade = "";
  ekraniGuncelle();
}

function esittir() {
    const parcalar = parcala();
    console.log("parcalanmis ifade",parcalar);

    if(parcalar==null) {
      alert("hatali girdi!");
      return;
    }

    const postfix = donustur(parcalar);
    console.log("postfix",postfix);

    const sonuc=hesapla(postfix);
    console.log("sonuç",sonuc);
// ifade 1+2
//sonuc 3
//ifade + "=" + sonuc -> "1+2=3"

const yeniIslem=ifade+ "=" + sonuc;
const mevcutIslemler=localStorage.getItem("islemler");

if(mevcutIslemler===null) {
  //eğer hiç işlem yapılmamışsa
    localStorage.getItem("islemler",JSON.stringify([yeniIslem]));
} else {
  //yapılmış işlemler var
  const islemDizisi = JSON.parse(mevcutIslemler);
  islemDizisi.push(yeniIslem);
  localStorage.setItem("islemler",JSON.stringify([islemDizisi]));
}
    ifade=sonuc;
    ekraniGuncelle();
}

function parcala() {
    let parcalar=[];
    let oncekiSayi="";

    if(operatorMu(ifade[ifade.length-1])) {
      return null;
    }
    if(operatorMu(ifade[0]) && ifade[0]!==0) {
      return null;
    }

   for(let i=0;i<ifade.length;i++) {
     const incelenenKarakter = ifade[i];

     //karakter rakamsa
     if(!isNaN(incelenenKarakter)) {
       oncekiSayi+=incelenenKarakter;
     } else  if(incelenenKarakter===".") { 
      if(oncekiSayi.includes(".")) {
        //hata vermesi lazım
        return null;
      }
      oncekiSayi+="."
      if(incelenenKarakter==="-" && operatorMu(ifade[i-1])) {
        if(operatorMu(ifade[i-2])) {
          return null;
        }
        oncekiSayi="-";
      } else {
        if(operatorMu(ifade[i-1])) {
          return null;
        }
        parcalar.push(Number(oncekiSayi));
        parcalar.push(incelenenKarakter);
        oncekiSayi="";
      }
   }
 }
        parcalar.push(Number(oncekiSayi));
        return parcalar;
}

function operatorMu(karakter) {
switch(karakter) {
  case "+":
  case "-":
  case "*":
  case "/":
     return true;
     default:
      false;
}

 /*return(
     karakter === "+" || karakter==="-" || karakter==="*" || karakter==="/");*/
}
function donustur(parcalar) {
const cikti =[];
const yigin =[];

for(let i=0; i<parcalar.length; i++) {
  const parca= parcalar[i];
  if(typeof parcalar[i]==="number") {
    cikti.push(parca);
  } else {
    //operatör olduğunu biliyoruz: +,-,/,*//
    
    //eğer yığın boşsa direkt yığına ekle.

    //en üstteki operatörün derecesi benden düşükse yığına ekle. 

    // yığın boş olmadığı sürece ve en tepedeki eleman benim önceliğimden daha büyükse veya en tepedeki eleman benim önceliğime eşitse yığının tepesinden eleman alınır çıktıya eklenir.//
    yigin.length===0;

    // yigin dolu oldugu sürece ve en tepedeki eleman,karsilastirdigim elemandan güclü veya denk oldugu sürece

    while( yigin.length!==0 && dahaGucluVeyaDenkMi(yigin[yigin.length-1],parca) ) {
      cikti.push(yigin.pop());
    }

    yigin.push(parca);
  }
}

//yigin dolu oldugu sürece
while ( yigin.length !==0 ) {
cikti.push(yigin.pop());

}
  return cikti;


}

function hesapla(postfix) {
  const yigin = [];
for (let i=0;i< postfix.length;i++) {
const parca = postfix[i];

 if(typeof parca ==="number") {
  yigin.push(parca);
 } else {
  const sag=yigin.pop();
  const sol=yigin.pop();
  
 /* if (parca === "+") {
   yigin.push( sol + sag);
  } else if(parca==="-") {
    yigin.push(sol-sag);
  } else if(parca==="/") {
    yigin.push(sol*sag);
  } else {
    yigin.push(sol/sag);
  }*/
  
  switch (parca) {
    case "+": {
      yigin.push(sol+sag);
      break;
    }
    case "-": {
      yigin.push(sol-sag);
      break;
    }
    case "*": {
      yigin.push(sol*sag);
      break;
    }
    case "/": {
      yigin.push(sol/sag);
      break;
    }
  }
 }
}
}
function dahaGucluVeyaDenkMi(ilk,ikinci) {
 //dahaGucluVeyaDenkMi("*","+") -> true
    //dahaGucluVeyaDenkMi("*","-") -> true
    //dahaGucluVeyaDenkMi("+","-") -> true
    //dahaGucluVeyaDenkMi("-","/") -> false

if(ilk==="*" || ilk==="/") {
  return true;
} else {
  //  + veya - ise çalışır. //
  if(ikinci==="+" || ikinci==="-") {
    return true;
  }

  return false;
}
} 
function ac() {
 alert("100.yilimiz kutlu olsun.");
} 