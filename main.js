let crossout = document.querySelectorAll("#crossout-ol li")
let opacity = document.querySelectorAll("#opacity-ul li")
let images = document.querySelectorAll("#row img")


for (let i = 0; i < crossout.length; i++){
    let dino = crossout[i]
    dino.addEventListener('click', function(event){
        if (dino.style.textDecoration === 'line-through'){
            dino.style.textDecoration = 'none'
        } else {
            dino.style.textDecoration = 'line-through'
        }
        {
            event.target.style.textDecoration = 'line-through'
        }
        
            console.log(event.target)
        
    })
   
}


for (let i = 0; i < opacity.length; i++){
    let opaque = opacity[i]
    opaque.addEventListener('click', function(event){
        if (opaque.style.opacity > 0.0){
            opaque.style.opacity = 0.5
        } else{ 
            opaque.style.opacity = 0.0
        }
        {
            event.target.style.opacity = 0
        }
        
            console.log(event.target)
    })
}

for (let i = 0; i < images.length; i++){
    let pics = images[i]
    pics.addEventListener('click', function(event){
        if (pics.style.width === '162px'){
            pics.style.width = '20px'
        } else{ 
            pics.style.width = '162px'
        }
        {
            event.target.style.width = '20px'
        }
        
            console.log(event.target)
    })
}

let destroy = document.querySelector("#burn")


destroy.addEventListener('click', function(){
for (let one of crossout){
    one.style.textDecoration = 'line-through'}
for (let two of opacity){
    two.style.opacity = 0.5}
for (let three of images){ 
    three.style.width = '20px'}
    
})

