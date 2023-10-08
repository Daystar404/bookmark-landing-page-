const menu =  document.querySelector('.menu')
const close = document.querySelector('.close')
const mob =   document.querySelector('.mob-menu')
const e_m =   document.querySelector('.email')
const btb =   document.querySelector('.valEmail')
const err =   document.querySelector('.err')
const icon =  document.querySelector('.eIcon')
const feat =  document.querySelectorAll('.feat')
const fH =    document.querySelectorAll('.fH')
const indic = document.querySelectorAll('.indic')
const ft =    document.querySelectorAll('.ft')
const qs =    document.querySelectorAll('.Qs')
const ans =   document.querySelectorAll('.ans')
const chev =  document.querySelectorAll('.chev')

const gloWidth = document.body.clientWidth

let ID = 0
menu.addEventListener('click', ()=>{
  mob.classList.toggle('open')
})

close.addEventListener('click', ()=>{
  mob.classList.toggle('open')
})

function togggle() {
  console.log(document.body.clientWidth)
  indic.forEach((indi) =>{
    indi.classList.remove('active')
    })
  ft.forEach((f) =>{
    f.style.display = 'none'
  })
  indic[ID].classList.add('active')
  //fH[ID].style.color = 'var(--very-dark-blue)'
  gloWidth <= 360 ? ft[ID].style.display = 'block' : ft[ID].style.display = 'flex'
  console.log(ID)
  
}
for(let i=0; i<feat.length; i++) {
  feat[i].addEventListener('click', ()=>{
    ID = i
    togggle()
  })
} 
for(let i=0; i<qs.length; i++) {
  qs[i].addEventListener('click', ()=>{
    ID = i
    toggleQA()
  })
}
let c = 0 //tracks no of times clicked..
function toggleQA(){
  c +=1
  ans[ID].style.display = 'block'
  chev[ID].style.transform = 'rotate(180deg)'
  chev[ID].style.color = 'var(--soft-red)'
  if(c > 1){
    ans[ID].style.display = 'none'
    chev[ID].style.transform = 'rotate(360deg)'
    chev[ID].style.color = 'var(--soft-blue)'
    c = 0
  }
}

const emailRegx = /^[\w\d][\w\d\.\_\-]+@[\w\d]{2,}\.[\w\d]{2,}$/

function valEmail(){
  if(e_m.value.match(emailRegx)){
    err.style.display = 'none'
    icon.style.visibility = 'hidden'
  }else if(e_m.value == ''){
    err.style.display = 'block'
    icon.style.visibility = 'visible'
  }else{
    err.style.display = 'block'
    icon.style.visibility = 'visible'
  }
}