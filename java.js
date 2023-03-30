son =  0
function line(son,c,j){
    let a = document.querySelector('.line3')
    let  b  = document.querySelectorAll('#items div')
    let d = document.querySelectorAll('#content div')
    a.style.marginLeft=  son+`px`
for(let i =0; i<b.length; i++){
    b[i].style.color = 'rgb(49, 49, 49)'

}
    b[c].style.color = 'white'
for(let i =0; i<d.length; i++){
    d[i].style.color = 'rgb(49, 49, 49)'

}
    d[j].style.color = 'white'
    
}
let index=  0
let c = document.querySelectorAll('.container section')
function yur(a,j,k,l){
    index = a 
    let b = document.querySelector('.bar');
     b.style.marginTop = index*- 685+'px'
     b.style.transition = `0.5s`
     let  e = document.getElementsByTagName('span')
     for(let i = 0; i<e.length; i++){
        e[i].style.marginLeft = '8px'
        e[i].style.color= 'rgb(112, 112, 112)'
        
     }
     e[j].style.marginLeft =  '-33px'
     e[j].style.color = 'white'
     let d = document.getElementsByClassName('dot');
     for(let i = 0; i<d.length; i++){
         d[i].style.color = 'white'
     }
     d[k].style.color= 'blue'
     let f = document.getElementsByClassName('home');
     for(let i = 0; i<f.length; i++){
        f[i].style.color = 'black'
     }
     f[l].style.color = 'white'
}

// let d = setInterval(()=>{
//     index++
//     yur(index)
// },4000)
let h = document.querySelector('.line')
let  k = document.querySelector('.main')
h.onclick = function(){
    k.style.display = 'block';
    // k.style.opacity= 0.9;
    k.style.backgroundColor= 'black'
    k.style.borderColor = 'black'
    k.style.zIndex = 3
}
let  b  = document.querySelector('.button')
b.onclick = function(){
k.style.display = 'none'
}
let home_1 = document.querySelector('#home_1')
let home_2 = document.querySelector('#home_2')
let home_3 = document.querySelector('#home_3')
let home_4 = document.querySelector('#home_4')
let home_5 = document.querySelector('#home_5')

home_1.onclick = function(){
    let b = document.querySelector('.bar');
    b.style.marginTop =0*-685+'px'
    b.style.transition = '0.5s'
    
}
home_2.onclick= function(){
    let b = document.querySelector('.bar');
    b.style.marginTop =-685+'px'
    b.style.transition = '0.5s'
}
home_3.onclick= function(){
    let b = document.querySelector('.bar');
    b.style.marginTop =2*-685+'px'
    b.style.transition = '0.5s'
}
home_4.onclick= function(){
    let b = document.querySelector('.bar');
    b.style.marginTop =3*-685+'px'
    b.style.transition = '0.5s'
}
home_5.onclick= function(){
    let b = document.querySelector('.bar');
    b.style.marginTop =4*-685+'px'
    b.style.transition = '0.5s'
}
// let b= document.querySelectorAll('.all2 div')
// function active(h){
// for(let i =0; i<c.length; i++){
//     b[i].classList = 'home_1'
//     b[i].classList = 'home_2'
//     b[i].classList = 'home_3'
//     b[i].classList = 'home_4'
//     b[i].classList = 'home_5'
// }
// b[h].classList  = 'home_1_active'
// }
