//FUNCTION

function addName(){
    return 'Rifqi Thufail'  // kalo tdk di retrun maka akan jadi undifained
}

alert(addName())
//kalo kita memanggil alert(addName) maka itu memanggil semua yg ada di dlm addname
//tapi kalo kita tambah buka - tutup kurung bisa maka hanya akan memanggil yg di retrunnya saja

function addName1(firstName, lastName){
    console.log(firstName, lastName)
    console.log(firstName + lastName)
    console.log('Nama :', firstName)
    console.log('Nama Marga :', lastName)
}


alert(addName1('Ahmad', 'Syafiq'))


function addName2(){
    console.log(arguments)
    console.log('nama',arguments[0])
    console.log('marga',arguments[1])

}


alert(addName2('Ahmad', 'Syafiq'))


function addName3(){
    for(let i = 0; i < arguments.length; i++){
        console.log('nama lengkap :', arguments[i])
    }

}


alert(addName3('Ahmad', 'Syafiq'))


//cara ke 2 di dlm variable

const fullName = function(name1, name2){
    console.log(name1, name2)
}

fullName('zaki', 'ahmad')


const sum = new Function('x', 'y', 'return x+y')
console.log(sum(1, 2))

//cara1 keyword new function
const sum1 = new Function('console.log("ini adalah sum")')
sum1()


// cara2 standar function

function sum5(j, l){
    if (j + l == 15){
        console.log("mantap")
    }
}
sum5(9, 6)



function sum5(x, y){
    console.log(x + y)
}
sum5(4, 6)

//cara3 arrow function
const sum3 = (x,y) => {
    console.log(x+y)
}

sum3(4,7)


//hoisting

console.log(data)    //kalo di panggil dulu baru pengkondisian bakal undifained
var data = 1   


sum2(4,9)     
function sum2(x, y){
    console.log(x+y)
}


//function rendom
function rendomize() {
    console.log(~~(Math.random() * 1000))
}

rendomize()


//function rendom + pengkondisian
function rendomize1() {
    const randomNumber = ~~(Math.random() * 1000) // simpan dulu nilai random ke variable
    // console.log(randomNumber) // baru cetak angka randomnya
    if( randomNumber > 200){
        console.log("wow lebih dari 200", randomNumber)
    } else {
        console.log("nilai kurang dari atau sama dengan 200")
    }
}

rendomize1()





