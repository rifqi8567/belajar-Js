// prompt utk mengetahui saldo akhir dari user

// let saldo =  Number(prompt('berapa saldo anda sekarang ?'))
// let saldoTambahan = Number(prompt('berapa saldo tambahan anda ?'))
// let hutang =  Number(prompt('berapa hutang anda ?'))
// let saldoAkhir = saldo + saldoTambahan - hutang 
// alert(`saldo terakhir anda adalah Rp.${saldoAkhir}`)

//menentuykan hari dari tanggal yg  ada saat ini di pc kalian

let hari = new Date().getDay()
let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
alert(`hari ini adalah hari ${namaHari[hari]}`)