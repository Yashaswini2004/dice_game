
var randomNumber1=Math.floor(Math.random()*6)+1;
var img="dice"+randomNumber1+".png";
var imgsrc="images/"+img;
var x=document.querySelectorAll("img")[0];
x.setAttribute("src",imgsrc);
var randomNumber2=Math.floor(Math.random()*6)+1;
var img1="dice"+randomNumber2+".png";
var imgsrc1="images/"+img1;
var y=document.querySelectorAll("img")[1];
y.setAttribute("src",imgsrc1);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 wins!!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}