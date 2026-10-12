const dogru= true;
const yanlis= false;
/*console.log(dogru);

const bos= null;
const tanimsiz= undefined;

console.log(bos);
console.log(tanimsiz);*/

//dizi(array)
const dizi = [1, 2, 3, 4];
console.log(dizi[0]);
// obje (object)
const kisi= {
    ad:"ceren",
    yas: 20,
    meslek: "ögrenci",
};
//console.log(kisi.yas);
//console.log(kisi["yas"]);

//const a=elma;
//const b=armut;
/*function(fonksiyon)
function birlestir(a,b) {
const c= a + " " + b;
return c;
}*/
//console.log(birlestir("armut","elma"));

function f(x) {
    const b=Number(x);
   const sonuc = 3*b + 1;
    return sonuc;
}
//c*=5 -> c = c * 5;
//console.log(f("x"));

function tiklanincaCalis( ) {
    const girdi= document.getElementById("input").value;
    const sonuc= f(girdi);
    //console.log(sonuc);
}

function degisinceCalis() {
    const input = document.getElementById("input");
    const deger = input.value;

    //input.value= Number(deger) + 300;
    console.log("değişti");
}
let isim="ceren yurt";
console.log(isim.length);

console.log(isim.charAt(2));
console.log(isim.startsWith("ceren"));
console.log(isim.endsWith("yurt"));

isim= "  ceren yurt  ";
console.log(isim);
console.log(isim.trim());
console.log(isim.trimStart());
console.log(isim.trimEnd());

isim = "ceren YUrt";

console.log(isim.substring(2,6));

const email="cerenny9@gmail.com";

//@'in yerini bul
const index= email.indexOf("@");

const uzanti= email.substring(index+1);

console.log(uzanti);

console.log(email.indexOf("@"));
console.log(email.indexOf("A"));


document.getElementById("tikla").addEventListener("click", function() {
    const girdi = document.getElementById("input").value;

    const sonuc= f(girdi, "x");
    //console.log(sonuc);
});
//Alıştırma
function isimDegisti() {
    //İsim değişince çalışacak
    const isim =  document.getElementById("isim").value;
    const soyisim = document.getElementById("soyisim").value;

    const yeniIsim = isim.trim().toLowerCase();
    const yenisoyIsim= soyisim.trim().toUpperCase();
    const yeni = yeniIsim + " " +yenisoyIsim;
    document.getElementById("cikti").innerText = yeni;
}
//function soyisimDegisti() {
    //Soyisim değişince çalışacak
    //const soyisim= document.getElementById("soyisim").value;
    // const isim =  document.getElementById("isim").value;
    //document.getElementById("soyisim").value.trim;
   // }

//document.getElementById("cikti").innerText = "a";
