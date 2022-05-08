import helloWorld from './hello-world'
import imgsrc from './assets/1.png'
import svgsrc from './assets/webpack.svg'
import exTxt from './assets/2.txt'
import jpgsrc from './assets/3.jpg'

helloWorld()
const img =document.createElement('img')
img.style.cssText='width:600px'
img.src=imgsrc
document.body.appendChild(img) 

const img2 =document.createElement('img')
img2.style.cssText='width:600px'
img2.src=svgsrc
document.body.appendChild(img2) 

const block =document.createElement('div')
block.style.cssText='width:200px;height:200px;background:aqua'
block.textContent=exTxt
document.body.appendChild(block)

const img3 =document.createElement('img')
img3.style.cssText='width:600px'
img3.src=jpgsrc
document.body.appendChild(img3) 

