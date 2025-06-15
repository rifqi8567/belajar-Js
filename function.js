//FUNCTION

function addName(){
    return 'Rifqi Thufail'  // kalo tdk di retrun maka akan jadi undifained
}

alert(addName())
//kalo kita memanggil alert(addName) maka itu memanggil semua yg ada di dlm addname
//tapi kalo kita tambah buka - tutup kurung bisa maka hanya akan memanggil yg di retrunnya saja

function addName1(firstName, lastName){
    console.log(firstName, lastName)
    console.log('Nama :', firstName)
    console.log('Nama Marga :', lastName)
}


alert(addName1('Ahmad', 'Syafiq'))


function addName2(){
    console.log(arguments)
}


alert(addName2('Ahmad', 'Syafiq'))