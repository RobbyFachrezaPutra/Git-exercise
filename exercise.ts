// 1. Write a code to display the multiplication table of a given integer.

const n: number = 9;
const jumlahPerkalian: number = 10;
let hasil: string = "";

for ( let i = 1; i <= jumlahPerkalian; i++) {
    hasil += ` ${n} x ${i} = ${n * i}` 
}
console.log(hasil)

// 2. Write a code to check wheter a string is a palindrome or not.

let nama: string = "katak";
let kebalikanNama: string = "";

for ( let i = nama.length - 1; i >= 0; i--)  {
    kebalikanNama += nama[i];
}

if (nama === kebalikanNama) {
    console.log(" Ini adalaha Palindrome")
} else{
    console.log("Ini bukan Palindrome")
}

//3. Write a code to convert centimeter to kilometer.

const cm: number = 200000;
const km: number = cm / 100000;

console.log(`${cm} Centimeter adalah ${km} Kilometer`);

//4. Write a code to format number as currency (IDR)

// let a: number = 50000;
// let rupiah: string = `Rp. ${a},00`

// console.log(rupiah)

let uang: number = 50000;
let rupiah: string =  "Rp. " + uang.toLocaleString('id-ID') +",00";


console.log(rupiah);

//5. Write a code to remove the first occurrence of a given “search string” from a string

let kalimat: string = "Hello world";
let cariHuruf: string = "ell";

console.log(kalimat.replace(cariHuruf, ""));


//6. Write a code to capitalize the first letter of each word in a string

let kalimat1: string = "hello world";
let hasil1 = kalimat1.split(" ");
let hurufDepan = hasil1.map( item => item [0].toUpperCase()+ item.substring(1));


console.log(hurufDepan.join(" "));

//7. Write a code to swap the case of each character from string 

let namaKarakter: string = "The QuiCk BrOwN Fox";
let hasil5 = namaKarakter.split("").map( char => {
    if (char === char.toUpperCase()){
        return char = char.toLowerCase()
    } return char.toUpperCase()
 });


console.log(hasil5.join(""));

//8. Write a code to find the largest of two given integers

const num1: number = 6;
const num2: number = 5;

if ( num1 > num2) {
    console.log(`Bilangan terbesar adalah ${num1}`)
} else if ( num2 > num1){
    console.log(`Bilangan terbesar adalah ${num2}`)
} else {
    console.log(`Kedua bilangan tersebut sama besar`)
}

//9. Write a conditional statement to sort three numbers

let num3 = [9, 6, 5, 10, 1, 2];
num3.sort((a, b) => a - b);

console.log(num3);

// 10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data

let char1: number = 8;
let jawaban;

if (typeof char1 === 'string'){
    jawaban = 1;
} else if(typeof char1 === 'number'){
    jawaban = 2;
} else {
    jawaban = 3;
}
console.log(jawaban)

// 11. Write a code to change every letter a into * from a string of input

let kalimat2: string = "Saya akan pergi bekerja"; 
let char4;
let hasilKalimat;

for(let i = 0; i < kalimat2.length; i++) {
    char4 = kalimat2[i];
    switch(char4){
        case "a":
            hasilKalimat += "*";
            break;
        default:
            hasilKalimat += char4;

            break;
    }
}
console.log(hasilKalimat)


