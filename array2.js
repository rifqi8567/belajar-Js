// ARRAY

//cara 1
const arraySaya = ['>', '|', '~']
console.log(arraySaya)

// cara 2
const arrayKamu = []

arrayKamu[0] = '?'
arrayKamu[1] = '/'
arrayKamu[2] = '&'
arrayKamu[8] = '@'  // arrray yg di ururtan 3 - 7 itu empty / undifained
console.log(arrayKamu)


// cara 3
const arrayKIta = new Array ('}', '_')
// arrayKIta[7] = '{'
console.log(arrayKIta)
// cara pemanggilan array ke 2 
console.log(arrayKIta[7])  // hasil nya undifained



const buahSaya = ['Alpukat', 'Pisang', 'Semangka', 'Buah Naga']
const semangka = buahSaya.includes('Semangka') // apakah dalam buah saya ada semangka ??
console.log(semangka)


if(semangka) {    // versi pengkondisian 
    const posisiSemangka = buahSaya.indexOf('Semangka') // utk mengetahui sebuah data dlm variable itu di urutan ke brp
    const indexBefore = posisiSemangka - 1
    const indexAfter = posisiSemangka + 1
    const before = buahSaya[indexBefore]
    const after = buahSaya[indexAfter]
    console.log(`buah sebelum semangka adalah ${before} dan posisi setelah semangka adalah ${after}`)
    console.log(`buah semangka itu ada di posisi ${posisiSemangka}`)
     const buahAwal = buahSaya.shift() //sama aja dengan yang buahAwal = [0]
    const buahAkhir = buahSaya.pop()   // yg membedakan ini dan ini lebih mudah
    console.log(`buah awal adalah buah ${buahAwal} dan akhir adalah  ${buahAkhir}`)

}else {
    console.log('Saya Tidak Tahu')
}


// merubah key / index dlm variable 

const buahKamu = []

buahKamu['alpukat'] = 'alpukat'
buahKamu['jeruk'] = 'jeruk'
// hasil length tetap 0 karna Kamu menambahkan properti 'alpukat' dan 'jeruk' ke array sebagai objek, bukan sebagai elemen array dengan indeks
console.log(buahKamu['jeruk'])




//array & copy

const buahKita = ['Alpukat', 'Pisang', 'Semangka', 'Buah Naga']
const buahAnda = buahKita  //copy data array yg ada di buahKita
// const buahAnda = [...buahKita]  //sprred operator = membuat agar data awal tdk berubah
// const buahAnda = buahKita.slice() sama seperti spreed operator
// const buahAnda = Array.from(buahKita) sama jg
// const buahAnda = JSON.parse(JSON.stringify(buahKita)) sama jg
 
buahAnda[0] = 'durian' // kalo kek gini ke 2 variable data array nya akan mengalami perubahan

console.log(buahKita)
console.log(buahAnda)


//Buah & Sayur

// maksud nya jika dalam sebuah variable ada lebih dari 1 jenis data array nya

const arrayCampuran = 
    ['pisang',
     10,
    {tomato: function(){
         console.log('Ini tomat')}
        },
    ['eat', 'food']]

console.log(arrayCampuran[3][0])
console.log(arrayCampuran[2].tomato) //.tomato → ambil function itu tanpa mengeksekusinya
arrayCampuran[2].tomato() //Ini mengeksekusi fungsi yang ada di tomato


//Menggabungkan 2 buah array
const array1 = ['Alpukat', 'Pisang']
const array2 = ['Semangka', 'Buah Naga']

const array3 = array1.concat(array2)  // menggabungkan 2 buah array dengan .concat
console.log(array3)

//memecahnya lagi

for (list of array3) console.log(list) //menjadikannya LIST
for (list in array3) console.log(list) //menjadikannya LIST dlm bentu key / index

//atau bisa jg dengan kode yg lebih singkat gabungan dari list name dan index
array3.map((Value, index) => console.log(Value, index))



const datas = [
  {
    name: 'dea afrizal',
    stack: 'js react dll',
    age: 50,
  },
  {
    name: 'afrizal',
    stack: 'js react dll',
    age: 35,
  },
  {
    name: 'rafi',
    stack: 'js react dll',
    age: 20,
  },
  {
    name: 'ubay',
    stack: 'js react dll',
    age: 30,
  }
];

datas.map((value, index) => console.log(index, value))
datas.map((value, index) => {
    console.log(value)   // memunculkan nama saja
})

datas.sort((a, b) => b.age - a.age).map((value) =>  console.log(value)) // mengurutkan umur dari yg terbesar

datas.sort((a, b) => a.age - b.age).map((value) =>  console.log(value)) // mengurutkan umur dari yg terkecil

datas.filter((x) => x.age >= 30).map((value) =>  console.log(value)) // memfilter yg lebih dari 30

datas.sort((a, b) => a.age - b.age).filter((x) => x.age >= 30).map((value) =>  console.log(value)) // memfilter dan mengurutkan
