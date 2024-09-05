//! Alqoritm 2

// Semestr nəticəsi və imtahan balını daxil edin
const semestrErzinde = Number(prompt("Semestr ərzində yığılan balı daxil et:"));
const imtahanErzinde = Number(prompt("İmtahan ərzində yığılan balı daxil et:"));

// Yekun balı hesablayın
const yekunBal = semestrErzinde * 0.4 + imtahanErzinde * 0.6;

//* Variant 1
yekunBal < 51 ? alert("Kəsr") : alert("Keçdi");
alert(yekunBal)

//* Variant 2
if (yekunBal < 51) {
    alert("Kəsr");
} else {
    alert("Keçdi");
}

alert(yekunBal)


//! Alqoritm 3

// For dövrü istifadə edərək mesajı 6 dəfə ekrana yazdırırıq
for (let i = 0; i < 6; i++) {
    console.log("MƏN JAVASCRIPTDƏ MASTER OLACAM");
}

// While dövrü istifadə edərək mesajı 6 dəfə ekrana yazdırırıq
let i = 0;
while (i < 4) {
    console.log("MƏN JAVASCRIPTDƏ MASTER OLACAM");
    i++;
}

// Do-while dövrü istifadə edərək mesajı 6 dəfə ekrana yazdırırıq
i = 1;
do {
    console.log("MƏN JAVASCRIPTDƏ MASTER OLACAM");
    i++;
}
while (i < 6);

//! Alqoritm 4

let cem = 0;
for (let i = 1; i < 100; i++) {
    cem = cem + i;
}
console.log("1-dən 100-ə qədər olan ədədlərin cəmi:", cem);

//! Alqoritm 5

// Yan-yana ədədləri saxlamaq üçün dəyişən yaradın
let ededlerinYanYanaDuzulushu = "";

// Dövrü başlatmaq üçün 'for' operatorundan istifadə edin
for (let i = 1; i < 11; i++) {
    // Əgər cari ədəd 10-dan kiçikdirsə, vergül əlavə edin
    if (i < 10) {
        ededlerinYanYanaDuzulushu = ededlerinYanYanaDuzulushu + i + " , ";
    } else {
        // Əks halda yalnız ədədi əlavə edin
        ededlerinYanYanaDuzulushu = ededlerinYanYanaDuzulushu + i;
    }
}

// Nəticəni konsola yazdırın
console.log(ededlerinYanYanaDuzulushu);


//! Alqoritm 6

// Faktorial hesablayan funksiyanı yaradın.
function calculateFactorial(number) {
    // Faktorialı saxlamaq üçün dəyişən.
    let factorial = 1;
    
    // `number` ədədinə qədər olan bütün ədədləri vururuq.
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    // Hesablanmış faktorialı qaytarır.
    return factorial;
}

// İstifadəçidən ədəd alınır.
const inputNumber = Number(prompt("Faktorialını tapmaq istədiyiniz ədədi daxil edin:"));

// Faktorial hesablanır.
const result = calculateFactorial(inputNumber);

// Nəticəni konsola çap edirik.
console.log(inputNumber + "! = " + result);


//! Alqoritm 7

const x =parseInt(prompt("x ededini daxil et"))
const y=parseInt(prompt("y ededini daxil et"))

if(x>0 && y<0){
console.log(4*x+2*y+4)
}
else if(x>0 && y==0){
    console.log(2*x-y+3)
}

else if(x<0 && y>0){
    console.log(3*x+4*y+3)
}

// Funksiya

// İki ədəd daxil edildikdə müəyyən şərtlərə uyğun nəticəni çap edən funksiya
// İki ədəd daxil edildikdə müəyyən şərtlərə uyğun nəticəni qaytaran funksiya
function hesapla(x, y) {
    if (x > 0 && y < 0) {
        return 4 * x + 2 * y + 4;
    } else if (x > 0 && y === 0) {
        return 2 * x - y + 3;
    } else if (x < 0 && y > 0) {
        return 3 * x + 4 * y + 3;
    } else {
        return "Şərtlərə uyğun heç bir nəticə yoxdur.";
    }
}

// Misal istifadə
const x = 5; // Burada istədiyiniz x dəyərini daxil edə bilərsiniz
const y = -3; // Burada istədiyiniz y dəyərini daxil edə bilərsiniz

const nəticə = hesapla(x, y);
console.log(nəticə);

//! Alqoritm 8

const imtahanbali=parseInt(prompt("imtahanbalinidaxiledin"))
switch(true){
    case(imtahanbali>=91 && imtahanbali<=100):
        console.log("A");
        break;

        case(imtahanbali>=81 && imtahanbali<=90):
        console.log('B');
        break;
        case(imtahanbali>=71 && imtahanbali<=80):
        console.log('C');
        break;
        case(imtahanbali>=61 && imtahanbali<=70):
        console.log('D');
        break;

        case(imtahanbali>=51 && imtahanbali<=60):
        console.log('E');
        break;

       default:console.log("F")
    
    
}

//! Alqoritm 9
for (let i = 1; i <= 10; i++) {
    console.log(Array.from({ length: 10 }, (_, j) => (i * (j + 1)) + "\t").join(''));
}
