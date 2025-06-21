alert('heyho') 

console.log('hello') 
prompt('masukkan usia anda?')

Variable

let usia = 20 

var usia1 = 2  
usia = 30
console.log('usia kamu adalah ' + usia)
alert(usia)

let usia2 = prompt('berapa usia anda ?')
alert('usia anda adalah ' + usia)


// // type data

// let usia = 20 //int
// let nama = 'rifqi' //string
// let tinggiBadan = 168.5 // double/ float
// let beratBadan
// let pacar = null

// beratBadan = 80

// pengcondisian
if (pacar == null){
    pacar =  'belum punya'
} else {
    pacar = 'sudah punya'
}

// switch(pacar){
//     case 1:
//         pacar = 'punya 1 pacar'
//         break
//     case 2:
//         pacar = 'punya 2 pacar'
//         break
//     default :
//         pacar = 'blm punya pacar'
//         break
// }


let saldoAwal = 50000
let saldoTambahan = 20000
const hutang = 10000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

const x = 16
const y = 8
const z = x / y
alert(`jika x bernilai ${x} dan y bernilai ${y} maka hasil nya jika di kali adala ${z}`)

// alert('nama anda adalah ' + nama + ' dan usia anda adalah ' + usia + ' dan tinggi bandan anda adalah ' + tinggiBadan)
alert(`nama saya ${nama} dan usia saya ${usia} dan tinggi saya ${tinggiBadan} dan berat saya ${beratBadan} dan pacar saya ${pacar}`)
alert(`saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan saya sebesar Rp.${saldoTambahan} tapi saya punya hutang sebesar Rp.${hutang}jadi total saldo saya adalah Rp.${saldoAkhir}`)


