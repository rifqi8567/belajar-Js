document.title ='belajar Js'

const btn1 = document.getElementById('btn1')
const body = document.body
const btn2 = document.querySelector('.btn2')
console.log(btn1)
console.log(btn2)

const defaultText = 'Kerja baik'
btn1.textContent = defaultText
btn1.style.border = 'none'
btn1.style.padding= '8px'
btn1.style.fontSize = '24px'
btn1.style.backgroundColor = 'tomato'

function clickButton() {
    // console.log('aman')
    // alert('aman')
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'HELLO BUNG APA KABAR !'
    body.append(newText)
}

function ubahText() {
    // console.log('ubah text')
    btn1.textContent = 'kerja bagus'
    
}

function oriText() {
    btn1.textContent = 'kerja baik'
}

btn2.style.padding = '10px'
btn2.style.backgroundColor = 'red'
btn2.style.fontSize = '24px'


function gantiWarna() {
    // alert('aman')
    btn2.style.background = 'aqua'
    textBaru = document.createElement('h3')
    textBaru.textContent = 'MUHAMMAD RIFQI'
    body.append(textBaru)
}

function munculText() {
    // alert('aman')
  btn2.textContent = 'yapink'
}
function warnaText() {
    btn2.textContent = 'bagus'
    textBaru.style.color = 'pink'
}
