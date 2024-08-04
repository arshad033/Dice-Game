//we selected all the elements
var dice1 = document.querySelector("#dice1");
var dice2 = document.querySelector("#dice2");
var winner1 = document.querySelector("#winner-1");
var winner2 = document.querySelector("#winner-2");
// we created a random number for the dice
var x = Math.floor(Math.random()*6 + 1);
var y = Math.floor(Math.random()*6 + 1);
//dice-1
if (x==1) {
    dice1.style.backgroundImage = "url('images/one.png')";
}
else if (x==2) {
    dice1.style.backgroundImage = "url('images/two.png')";
}
else if (x==3) {
    dice1.style.backgroundImage = "url('images/three.png')";
}
else if (x==4) {
    dice1.style.backgroundImage = "url('images/four.png')";
}
else if (x==5) {
    dice1.style.backgroundImage = "url('images/five.png')";
}
else if (x==6) {
    dice1.style.backgroundImage = "url('images/six.png')";
}
// dice-2
if (y==1) {
    dice2.style.backgroundImage = "url('images/one.png')";
}
else if (y==2) {
    dice2.style.backgroundImage = "url('images/two.png')";
}
else if (y==3) {
    dice2.style.backgroundImage = "url('images/three.png')";
}
else if (y==4) {
    dice2.style.backgroundImage = "url('images/four.png')";
}
else if (y==5) {
    dice2.style.backgroundImage = "url('images/five.png')";
}
else if (y==6) {
    dice2.style.backgroundImage = "url('images/six.png')";
}
// for winner selection..
if(x>y){
    winner1.style.opacity = '1'
}
if(x<y){
    winner2.style.opacity = '1'
}
else if(x==y){
    alert("both are winners🥳")
}

/*
! this can be also done with concatination lets see-
? set name dice images name to 1,2,3...
var x = Math.floor(Math.random() *6)+1; // 1-6
var randomedice = "dice" + x;
var randomedicesource = "images/" + randomedice; //store the address

dice1.setAttritube("src", randomedicesource);
*/