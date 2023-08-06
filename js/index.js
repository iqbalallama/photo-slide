document.getElementById('menubar').addEventListener('click',function(e){
    const nav = document.getElementsByClassName('nav');
    for(let i = 0; i< nav.length; i++){
        if(nav[i] === e.target){
            nav[i].classList.add('active')
        }else{
            nav[i].classList.remove('active')
        }
    } 
})
const image = document.getElementById('image')
const photos = ['images/312858982_2165078280340079_1312798471102825984_n.jpg','images/299575249_2110903625757545_977256294951969626_n.jpg','images/IMG-20230508-WA0028.jpg','images/241978717_1861351027379474_5269879980480437950_n.jpg'];
let count = -1;
function imageSlide(){
    count++
    if(count >= photos.length){
        count = 0
        image.src = photos[count]
    }else{
        image.src = photos[count]
    }
    setTimeout('imageSlide()',2000)
} 
window.onload = imageSlide() 
