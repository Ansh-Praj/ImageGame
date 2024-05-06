const body = document.querySelector('body')
const image = document.querySelector('#character')
const ground = document.querySelector('.ground')
const ball = document.querySelector('.ball')
const score = document.querySelector('.score')


 //image set
let rightImage = ['assets/right_/leftLeg.png', 'assets/right_/idle.png', 'assets/right_/rightLeg.png']
let leftImage = ['assets/left/leftLeg.png', 'assets/left/idle.png', 'assets/left/rightLeg.png']
let upImage = ['assets/up/leftLeg.png', 'assets/up/idle.png', 'assets/up/rightLeg.png']
let downImage = ['assets/down/leftLeg.png', 'assets/down/idle.png', 'assets/down/rightLeg.png']

//image change using index
let rightIndex = 0
let leftIndex = 0
let upIndex = 0
let downIndex = 0

let rightPx = 50 //position
let upPx = 50 //position

let rightCount = 0 //iamge changes only when rightCount % 10
let leftCount = 0 //iamge changes only when leftCount % 10
let upCount = 0 //iamge changes only when upCount % 10
let downCount = 0 //iamge changes only when downCount % 10

let bgPosX = 50
let bgPosY = 50

/* 
    var pixels = 100;
    var screenWidth = window.screen.width;
    var percentage = ( screenWidth - pixels ) / screenWidth ; // 0.92%
*/

/* const groundWidth = image.getBoundingClientRect().width
const groundHeight = image.getBoundingClientRect().height */

//-ve +ve values
/*Number(Math.random().toFixed(1)) < 0.5 ? ballPosX *= (-1): ballPosX *= 1
Number(Math.random().toFixed(1)) < 0.5 ? ballPosY *= (-1): ballPosY *= 1 */

function ballRand(){
    let ballPosX = (Math.floor(Math.random() * 90 + 10))
    let ballPosY = (Math.floor(Math.random() * 90 + 10))
    ball.style.top = ballPosY + '%'
    ball.style.left = ballPosX + '%'
}

ballRand()

function checkOverlap(){

    const rectBall = ball.getBoundingClientRect()
    const rectImage = image.getBoundingClientRect()

    if(!(rectBall.right < rectImage.left ||
        rectBall.left > rectImage.right ||
        rectBall.bottom < rectImage.top ||
        rectBall.top > rectImage.bottom)){

            ballRand()
            score.innerHTML = Number(score.innerHTML) + 1
        }

}    

document.addEventListener('keydown', checkOverlap)

// prevents key scrolling
window.addEventListener('keydown', (e) => {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"].indexOf(e.key) > -1)
        e.preventDefault()
})

function rightWalk(e){

    const rect = image.getBoundingClientRect()

    if(rect.right < (window.innerWidth - 50)){
        rightPx += 1;
        image.style.left = rightPx + '%'
    }
    rightCount++

    // movement if keeping the key pressed 
    if (e.repeat) {
        if(rightCount % 2 == 0){
            rightIndex = 0
            image.setAttribute('src', rightImage[rightIndex])
        }
        if(rightCount % 3 == 0){
            rightIndex = 1
            image.setAttribute('src', rightImage[rightIndex])
        }
        if(rightCount % 5 == 0){
            rightIndex = 2
            image.setAttribute('src', rightImage[rightIndex])
        }
    }
    
    //movement if key is being pressed
    else {
        rightIndex == 0 ? rightIndex = 2 : rightIndex = 0;
        image.setAttribute('src', rightImage[rightIndex])
    }
    checkBackgroundPosition('right')
}
function leftWalk(e){

    const rect = image.getBoundingClientRect()

    if(rect.left > 50){
        rightPx -= 1;
        image.style.left = rightPx + '%'
    }
        leftCount++
    
    // movement if keeping the key pressed 
    if (e.repeat) {
        if(leftCount % 2 == 0){
            leftIndex = 0
            image.setAttribute('src', leftImage[leftIndex])
        }
        if(leftCount % 3 == 0){
            leftIndex = 1
            image.setAttribute('src', leftImage[leftIndex])
        }
        if(leftCount % 5 == 0){
            leftIndex = 2
            image.setAttribute('src', leftImage[leftIndex])
        }
    }
    
    //movement if key is being pressed
    else {
        leftIndex == 0 ? leftIndex = 2 : leftIndex = 0;
        image.setAttribute('src', leftImage[leftIndex])
    }
    checkBackgroundPosition('left')
}
function upWalk(e){
    const rect = image.getBoundingClientRect()

    if(rect.top > 10){
        upPx -= 1;
        image.style.top = upPx + '%'
    }
        upCount++

    // movement if keeping the key pressed 
    if (e.repeat) {
        if(upCount % 2 == 0){
            upIndex = 0
            image.setAttribute('src', upImage[upIndex])
        }
        if(upCount % 3 == 0){
            upIndex = 1
            image.setAttribute('src', upImage[upIndex])
        }
        if(upCount % 5 == 0){
            upIndex = 2
            image.setAttribute('src', upImage[upIndex])
        }
    }
    
    //movement if key is being pressed
    else {
        upIndex == 0 ? upIndex = 2 : upIndex = 0;
        image.setAttribute('src', upImage[upIndex])
    }
    checkBackgroundPosition('top')
}

function downWalk(e){

    const rect = image.getBoundingClientRect()
    //stops image from moving
    if(rect.bottom < (window.innerHeight - 10)){
        upPx += 1;
        image.style.top = upPx + '%'
    }
        downCount++

    // movement if keeping the key pressed 
    if (e.repeat) {
        if(downCount % 2 == 0){
            downIndex = 0
            image.setAttribute('src', downImage[downIndex])
        }
        if(downCount % 3 == 0){
            downIndex = 1
            image.setAttribute('src', downImage[downIndex])
        }
        if(downCount % 5 == 0){
            downIndex = 2
            image.setAttribute('src', downImage[downIndex])
        }
    }
    
    //movement if key is being pressed
    else {
        downIndex == 0 ? downIndex = 2 : downIndex = 0;
        image.setAttribute('src', downImage[downIndex])
    }
    checkBackgroundPosition('bottom')
}


body.addEventListener('keydown', (e) => {
    //console.log(e.key); which key is being pressed
    if (e.key == 'ArrowRight') {
        rightWalk(e)
    }
    if (e.key == 'ArrowLeft') {
        leftWalk(e)
    }
    if (e.key == 'ArrowUp') {
        upWalk(e);
    }
    if (e.key == 'ArrowDown' || e.key === 's'){
        downWalk(e);
    }

    
})

function checkBackgroundPosition(direction){
    const rect = image.getBoundingClientRect();
    if(direction === 'left'){
        if(rect.left < 50){
            bgPosX += 1;
            ground.style.left = bgPosX + '%'
            
            /* ballPosX += 1;
            ball.style.left = ballPosX + '%' */
        }
    } 

    if(direction === 'right'){
        if(rect.right > (window.innerWidth - 50)){
            bgPosX -=1;
            ground.style.left = bgPosX + '%'
            
            /* ballPosX -=1;
            ball.style.left = ballPosX + '%' */
        }
    }

    if(direction === 'top'){
        if(rect.top < 10){
            bgPosY += 1;
            ground.style.top = bgPosY + '%'
            
            /* ballPosY += 1;
            ball.style.top = ballPosY + '%' */
        }
    }
     if(direction === 'bottom'){
        if(rect.bottom > (window.innerHeight - 10)){
            bgPosY -= 1;
            ground.style.top = bgPosY + '%'
            
            /* ballPosY -= 1;
            ball.style.top = ballPosY + '%' */
        }
    } 
    
}

//idle photo 
body.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowRight') {
        image.setAttribute('src', 'assets/right_/idle.png')
    }
    if (e.key == 'ArrowLeft') {
        image.setAttribute('src', 'assets/left/idle.png')
    }
    if (e.key == 'ArrowUp') {
        image.setAttribute('src', 'assets/up/idle.png')
    }
    if (e.key == 'ArrowDown' || e.key == 's') {
        image.setAttribute('src', 'assets/down/idle.png')
    }
})