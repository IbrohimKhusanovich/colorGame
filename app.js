const startBtn =document.querySelector('.start-btn');
const colors=document.querySelector('.colors')
let colored=document.querySelectorAll('.color')
let colorNum=document.querySelector('.color-num')
startBtn.addEventListener('click', ()=>{
 startBtn.remove()
 renderColor()
})

function renderColor (){

 for(let i=0;i<28;i++){
  let random = '#'+Math.floor(Math.random()*16777215).toString(16);
  let ran =random.length==6 ? random+'1' :random.length<6 ? random+'14':random;
  colors.innerHTML+=`
  <div class='color' onclick='currentColor(this.children[0].textContent,this)'  style='background:${ran}; box-shadow:0 0 5px 4px ${ran}'>
  <p class='color-num' >${ran}</p>
  </div>
  `
}
}
function currentColor(item,item2){
 for(let i=0;i<28;i++){
  colors.children[i].style.background=item;
  colors.children[i].style["boxShadow"]=`0 0 5px 4px ${item}`;
  colors.children[i].style.border='none'
 }
 console.log(item2);
 item2.style.border='4px solid #2f4'
}