const canvas = document.querySelector('canvas')
const brush = document.querySelector('#brush-ID')
const width = document.querySelector('#Width-ID')
const Width_btn = document.querySelector('#Width-btn-ID')
const Error_Input = document.querySelector('#Error-Input')
const ctx = canvas.getContext('2d')
console.log(ctx);
//error input value
let isClick = false
let isClick2 = false

Width_btn.addEventListener('click', () => {
    const regEx = /^[0-9]{0,100}$/
    if ((regEx.test(width.value))) {
        ctx.lineWidth = width.value
    } else {
        Error_Input.textContent = "Wrong Value 0 / 100 don't string"
        setTimeout(() => {
            Error_Input.textContent = ""
        }, 3000);
    }
    localStorage.getItem(width.value)
})

// brush change width

let color_black = document.querySelector('.color-black'),
    color_red = document.querySelector('.color-red'),
    color_blue = document.querySelector('.color-blue'),
    color_green = document.querySelector('.color-green'),
    color_orange = document.querySelector('.color-orange');
function color(wehere, value) {
    wehere = value
    ctx.strokeStyle = wehere
}
color_black.addEventListener('click', () => {
    color(color_black, 'black')
})
color_red.addEventListener('click', () => {
    color(color_red, 'red')
})
color_green.addEventListener('click', () => {
    color(color_green, 'green')
})
color_blue.addEventListener('click', () => {
    color(color_blue, 'blue')
})
color_orange.addEventListener('click', () => {
    color(color_orange, 'orange')
})
// change Brush_color
let isDrawing = false
window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})
const startDraving = () => {
    isDrawing = true
    ctx.beginPath()
}
function drawing1() {
    const drawing = (e) => {
        if (!isDrawing) return
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        ctx.shadowOffsetX = 100
    }
    canvas.addEventListener('mousemove', drawing)
    canvas.addEventListener('mousedown', startDraving)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    brush.style.width = '30px'
}

brush.addEventListener('click', () => {
    isClick = !isClick
    if (isClick) {
        brush.style.width = '30px'
        drawing1()
    } else {
        brush.style.width = '15px'
    }
})
//dalete item
const Eraser_ID = document.querySelector('#Eraser-ID')

Eraser_ID.addEventListener('click', () => {
    isClick2 = !isClick2
    if (isClick2) {
        color(Eraser_ID, 'white')
        ctx.lineWidth = 5
        Eraser_ID.style.width = '30px'
    }else{
        Eraser_ID.style.width = '15px'
    }
})