// ===benner===//
let benner = document.getElementById('banner')
let bennerimg = src = "https://img.freepik.com/free-psd/gaming-concept-banner-design_23-2148538416.jpg?w=1380&t=st=1682562559~exp=1682563159~hmac=55aaa31032638d873b5818f492d48730c1d44ab4d65ce3dd8ec0f33bff3f741f";
//==========//

//===OptionGame===//
let mobileLegend = document.getElementById('mobileLegend')
let valorant = document.getElementById('valorant')
let dota2 = document.getElementById('dota2')

let optionGameImg = {
   mobileLegend: src = "https://dl.memuplay.com/new_market/img/com.mobile.legends.sc0.2022-08-02-19-44-47.png",
   valorant: src = "https://wallpapercave.com/wp/wp11876803.jpg",
   dota2: src = "https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/11/dota-2-wallpaper.jpg"
};

mobileLegend.src = optionGameImg.mobileLegend;
dota2.src = optionGameImg.dota2;
valorant.src = optionGameImg.valorant;

//==========//



//===preniumGame===//
let mobileLegendPrem = document.getElementById('mobileLegendPrem')
let valorantPrem = document.getElementById('valorantPrem')
let dota2Prem = document.getElementById('dota2Prem')


let optionGamePrenium = {
   mobileLegend: src = "https://images.prismic.io/rivalryglhf/36c76530-419c-47ee-8cf0-8843a9528c15_mobile-legends-diamonds.webp?auto=compress,format&rect=98,0,533,280&w=1200&h=630",
   valorant: src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBrGtu6pH3R2QXFCmhiQDWg91a8d3J899bw&usqp=CAU",
   dota2: src = "https://gumlet.assettype.com/afkgaming%2F2023-04%2F6b4c62da-83e1-4517-bbee-0d31618f027f%2FUntitled_design__57___1_.png?compress=true&dpr=1&w=480"
};

mobileLegendPrem.src = optionGamePrenium.mobileLegend;
dota2Prem.src = optionGamePrenium.dota2;
valorantPrem.src = optionGamePrenium.valorant;

//==========//

//===deskriptionGame===//
let mobileLegendDeskription = document.getElementById('mobileLegendDeskription')
let dota2Deskription = document.getElementById('dota2Deskription')
let valorantDeskription = document.getElementById('valorantDeskription')

let deskriptionPreniumGame = {
   mobileLegendDeskriptionPrem: "Game MOBA epik 5v5 Mobile Legends!",
   dota2DeskriptionPrem: "Game strategi multiplayer online terbaik, mainkan Dota 2 sekarang!",
   valorantDeskriptionPrem: "Game FPS seru dan kompetitif, mainkan Valorant sekarang!"
};

mobileLegendDeskription.innerHTML = deskriptionPreniumGame.mobileLegendDeskriptionPrem;
dota2Deskription.innerHTML = deskriptionPreniumGame.dota2DeskriptionPrem;
valorantDeskription.innerHTML = deskriptionPreniumGame.valorantDeskriptionPrem;

//==========//



//===userProfil===//

let userProfil1 = document.getElementById('userProfil1')
let userProfi2 = document.getElementById('userProfi2')
let userProfi3 = document.getElementById('userProfi3')


let userProfilimg = {
   profil1: src = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
   profil2: src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJzyQcBu_7EH0wSSW14L4Edxsj3X8AJKcy3UBpQE33iMrZ8Z3SNXmPpEZyqsl898vYwI&usqp=CAU",
   profil3: src = "https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg"

}
userProfil1.src = userProfilimg.profil1;
userProfil2.src = userProfilimg.profil2;
userProfil3.src = userProfilimg.profil3;
//==========//


//===gamePrice===//
let mobileLegendPrice = document.getElementById('mobileLegendPrice')
let dota2Price = document.getElementById('dota2Price')
let valorantPrice = document.getElementById('valorantPrice')


let priceGame = {
   mobileLegend: "RP  375.000,00",
   dota2: "Rp  650.000,00",
   valorant: "Rp  750.000,00"
}

mobileLegendPrice.innerHTML = priceGame.mobileLegend;
dota2Price.innerHTML = priceGame.dota2;
valorantPrice.innerHTML = priceGame.valorant;
//==========//

benner.src = bennerimg;







let nextgame = document.getElementById('nextgame')
nextgame.src = optionGamePrenium.dota2;