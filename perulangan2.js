// ! PERULANGAN DI JAVA SCRIPT

// ? for, for in, forech, for of
// * while & do while

//**
// for(kondisi1; kondisi2, kondisi3) 
// for(kondisi awal; kondisi ke 2,penambahan nilain pada kondisi awal) 
// 
// */

// ! for of
// ! berfungsi utk mencetak mapping nya satu persatu
const warnaSaya = ['Biru', 'Merah', 'Kuning', 'hijau']

for(let warna of warnaSaya){
    console.log(warna)
    // break; berfungsi memberhentikan proses setelah 1 langkah
}

// ? for in
// ?berfungsi utk mencetak mapping nya satu persatu dlm bentuk index

const warnaSaya1 = ['Biru', 'Merah', 'Kuning', 'hijau']

for(let warna in warnaSaya1){
    console.log(warna)
    // break; berfungsi memberhentikan proses setelah 1 langkah
}

// ** foreach
// ** foreach berfungsi utk me mindmapping index dan text nya secara bersamaan
// ** foreach == map

const warnaSaya2 = ['Biru', 'Merah', 'Kuning', 'hijau']
warnaSaya2.forEach((warna, index) => {
    console.log(warna, index + 1)
    
});