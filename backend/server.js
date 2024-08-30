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

const eded = Number(prompt("Faktorialını tapmaq istədiyiniz ədədi daxil edin:"));

let faktorial = 1;

for (let i = 1; i <= eded; i++) {
    faktorial *= i;
}

console.log(eded + "! = " + faktorial);


//! Alqoritm 7



//! Alqoritm 9
for (let i = 1; i <= 10; i++) {
    let sətir = "";
    for (let j = 1; j <= 10; j++) {
        sətir += i * j + "\t";
    }
    console.log(sətir);
}
