let foods = document.getElementById("foods");
let tracks = document.getElementById("tracks");
let bests = document.getElementById("bests");

let btn = document.getElementById("btn");

foods.addEventListener("click",function(){
    foods.style.color="red";
    tracks.style.color="white";
    bests.style.color="white";
})

tracks.addEventListener("click",function(){
    tracks.style.color="red";
    foods.style.color="white";
    bests.style.color="white";
})

bests.addEventListener("click",function(){
    bests.style.color="red";
    tracks.style.color="white";
    foods.style.color="white";
});



btn.addEventListener("click", function(){
    document.getElementById("loginPage").style.display="block"
})

let loged =  document.getElementById("loged");

loged.addEventListener("click", function(){

    let name = document.getElementById("name");
    let pass = document.getElementById("pass");

    if(name.value == "" || pass.value ==""){
        alert("please enter email password")
    }
    else{
        alert("you Loged In");
        document.getElementById("loginPage").style.display="none"
    }
})



let trackbtn = document.getElementById("trackbtn");

trackbtn.addEventListener("click", function(){
    document.querySelector(".tracking").style.display="flex";
    document.getElementById("food").style.display="none";
    document.getElementById("best").style.display="none";
    document.getElementById("track").style.display="none";
    document.querySelector(".main").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("card2").style.display="none";
})