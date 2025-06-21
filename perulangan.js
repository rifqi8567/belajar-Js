// ! PERULANGAN DI JAVA SCRIPT

// ? for, for in, forech, for of
// * while & do while

//**
// for(kondisi1; kondisi2, kondisi3) 
// for(kondisi awal; kondisi ke 2,penambahan nilain pada kondisi awal) 
// */

for(z = 1;z <= 5; z++){
    // if( z % 2 == 0)   // yg muncul hanya yg genap
    // if( z % 2 == 1)  // yg muncul hanya yg ganjil
    console.log('data z ke -', z)
}


//while

let x = 1
while(x <= 5){
    // if(x % 2 == 1) {
    console.log('data x ke -', x)
    // }
    x++
}

//do while

let y = 1
do{
    // if( y % 2 == 0){
    console.log('data y ke -', y)
    // }
    y++
}while(y <= 5)



//for
const b = [3, 5, 12];
let total = 0;

for(let i = 0; i < b.length; i++){
    console.log('data ke -', i + 1, ':', b[i]);
    total += b[i];
}

console.log('total nilai adalah', total);


//while
const w = [3, 5, 12];
let total1 = 0;
let i1 = 0;

while( i1 < w.length){
    console.log('data ke -', i1 + 1, ':', w[i1]);
    total1 += w[i1];
    i1++
} 
console.log('total nilai adalah', total);

// do while

const u = [3, 5, 12];
let total2 = 0;
let i2 = 0;

do{
    console.log('data ke -', i2 + 1, ':', w[i2]);
    total2 += u[i2]
    i2++
}while(i2 < u.length);
    console.log('total nilai adalah', total);