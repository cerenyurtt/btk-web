 const islemler = JSON.parse(localStorage.getItem("islemler"));

 const liste=document.getElementById("liste");

 for(let i=0;islemler!==null && i<islemler.lenght;i++) {
 //li elementi oluştur.
 const listItem = document.createElement("li");
 //li'nin içindeki yazıyı ayarla
 listItem.innerText = islemler[0];
 //li'yi ol'ye ekle
 liste.appendChild(listItem);
 }





