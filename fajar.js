const input = require('readline-sync')

var masukannilai = input.questionInt('masukan nilai :')
if(isNaN(masukannilai))
console.log('ini bukan nilai')

if(masukannilai %2){
    console.log('ini bilangan  ganjil')
}else{
    console.log('ini bilangan genap')
}