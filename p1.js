var colors =['white', 'red','blue','green','yellow','voilet'];
var len =colors.length-1;
var btnControl =  document.getElementById('btn');
var spanControl = document.querySelector('.color');
btnControl.addEventListener('click',() => {
    var index = generateRandomNumber();
     document.body.style.backgroundColor=colors[index];
     spanControl.textContent=colors[index];
         });
function generateRandomNumber(){
 return Math.round(Math.random() * len);
}