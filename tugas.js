// prompt utk mengetahui saldo akhir dari user

// let saldo =  Number(prompt('berapa saldo anda sekarang ?'))
// let saldoTambahan = Number(prompt('berapa saldo tambahan anda ?'))
// let hutang =  Number(prompt('berapa hutang anda ?'))
// let saldoAkhir = saldo + saldoTambahan - hutang 
// alert(`saldo terakhir anda adalah Rp.${saldoAkhir}`)

//menentuykan hari dari tanggal yg  ada saat ini di pc kalian

// let hari = new Date().getDay()
// let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
// alert(`hari ini adalah hari ${namaHari[hari]}`)


// MEMBUAT PERHITUNGAN MATEMATIKA

// Luas lingkaran
// Luas segitiga
// Luas persegi panjang
// Luas jajargenjang
// Menghitung total gaji yang didapat dalam satu bulan dengan input minimal:

// Nama karyawan
// Gaji per hari
// Jumlah hari masuk kerja

//luas lingkaran
function luasLingkaran(phi, r) {
    console.log (phi * r * r)
}

luasLingkaran(22/7, 7)

//luas segitiga
function luasSegiTiga(a,t,b) {
    console.log(a * t / b)
}

luasSegiTiga(4,8,1/2)


//luas segi panjang
function luasSegiPanjang(p,l) {
    if(p * l == 32){
        console.log("selamat anda benar")
    }else {
        console.log("jawaban anda salah")
    }
}


luasSegiPanjang(4, 8)

//luas jajar genjang

// function luasJajarGenjang(a,t) {
//     console.log(a * t)
// }

// luasJajarGenjang(8, 5)

const luasJajarGenjang = (a, t) => {
    console.log(a * t)
}

luasJajarGenjang(8, 5)

function hitungGajiKaryawan(nama, gajiPerHari, jumlahHariMasuk) {
    const totalGaji = gajiPerHari * jumlahHariMasuk
    console.log("Nama Karyawan:", nama)
    console.log("Gaji per Hari:", gajiPerHari)
    console.log("Jumlah Hari Masuk:", jumlahHariMasuk)
    console.log("Total Gaji:", totalGaji)
}

hitungGajiKaryawan('Rifqi', 120000, 30)
