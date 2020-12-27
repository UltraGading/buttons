var bruh, bruhSound
var nut, nutSound
var bruhText, nutText

function preload(){
bruhSound = loadSound('BruhSoundEffect2.mp3')
nutSound = loadSound('NutButtonSoundEffect.mp3')
}

function setup() {
createCanvas(1366,768);
bruh = createButton('')
bruh.position(455,256)
bruh.mousePressed(playBruh)
bruh.style('color:blue')
bruh.size(200,200)
nut = createButton('')
nut.position(910,256)
nut.mousePressed(playNut)
nut.style('color:blue')
nut.size(200,200)
bruhText = createElement('h1', 'BRUH')
bruhText.position(505,306)
bruhText.style('color:blue')
nutText = createElement('h1', 'NUT')
nutText.position(970,306)
nutText.style('color:blue')
}

function draw() {
background(136,228,68);
}

function playBruh(){
bruhSound.play()
}

function playNut(){
nutSound.play()
}