// DOM daalaha cara utk update element html
console.log(document.title)    //memanggil element dari html

document.title = 'Fikri'  //menambahakan data ke dlm element html 

console.log(document.title)

console.log(document.body)

const body = document.body

body.append('BELAJAR JAVA SCRIPT') // appaned = mengisikan sesuatu ke sebuah elemenet

const h1 = document.createElement('h1')  // menentukan element
h1.textContent = "<marquee>Hello world</marquee>" // isi element dan hanya menampilkan text biasa

body.append(h1)  //pemanggilan variable

const namaSaya = document.createElement('h2')
namaSaya.innerHTML = "<marquee>Rifqi Thufail</marquee>" //akan dirender sebagai HTML aktif. Maka <marquee> akan membuat teks “Rifqi Thufail” bergerak.

body.append(namaSaya)


const namaKamu = document.createElement('p')
namaKamu.innerText = '<marquee>Rafi Fajar</marquee>'  //hanya menampilkan text biasa

body.append(namaKamu)