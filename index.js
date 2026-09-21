// ============================================================================== //
// ============================================================================== //
// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.
// ============================================================================== //
// function sum(a,b) {
//     return a + b;
// };
// console.log(sum(12,12))
// ============================================================================== //
// ============================================================================== //
// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.
// ============================================================================== //
// function minuteToSeconds(min) {
//     return min * 60;
// }
// console.log(minuteToSeconds(1));
// ============================================================================== //
// ============================================================================== //
// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.
// ============================================================================== //
// function nextNum(num) {
//     return num+1;
// };
// console.log(nextNum(2));
// ============================================================================== //
// ============================================================================== //
// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchbur-
// chak yuzini topish formulasi: S = (asos * balandlik) / 2
// ============================================================================== //
// function getTriangleS (a,b) {
//     return (a*b)/2
// }
// console.log(getTriangleS(2,5));
// ============================================================================== //
// ============================================================================== //
// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.
// ============================================================================== //
// function ageToDays(age) {
//     return age * 365;
// }
// console.log(ageToDays(18));
// ============================================================================== //
// ============================================================================== //
// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.
// ============================================================================== //
// function getCube(num) {
//     return num*3;
// }
// console.log(getCube(7))
// ============================================================================== //
// ============================================================================== //
// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.
// ============================================================================== //
// function getFirstElement(nums) {
//     return nums[0]
// };
// console.log(getFirstElement([1,2,3,4,5,6]));
// ============================================================================== //
// ============================================================================== //
// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
// ============================================================================== //
// function power(a,b) {
//     return a*b
// }
// console.log(power(2,2));
// ============================================================================== //
// ============================================================================== //
// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.
// ============================================================================== //
// function hourToSeconds(hour) {
//     return hour*3600;
// }
// console.log(hourToSeconds(4));
// ============================================================================== //
// ============================================================================== //
// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
// ============================================================================== //
// function uchunchiTomon(a,b) {
//     return (a + b) - 1;
// }
// console.log(uchunchiTomon(3,5))
// ============================================================================== //
// ============================================================================== //
// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni bir-
// inchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.
// ============================================================================== //
// function qoldiq(a,b) {
//     return a%b;
// }
// console.log(qoldiq(3,4));
// ============================================================================== //
// ============================================================================== //
// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni
// ============================================================================== //
// function turtburchakYuzi(h, w) {
//     return h * w;
// };
// console.log(turtburchakYuzi(2,2));
// ============================================================================== //
// ============================================================================== //
// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.
// ============================================================================== //
// function stringQoshish(a) {
//     return "something "+a; 
// }
// console.log(stringQoshish("wrong"))
// ============================================================================== //
// ============================================================================== //
// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// ============================================================================== //
// function kvadrat (num) {
//     return num * num;
// };
// console.log(kvadrat(5));
// ============================================================================== //
// ============================================================================== //
// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.
// ============================================================================== //
// function noldan(num) {
//     if(num<=0) return true;
//     else return false;
// }
// console.log(noldan(-1))
// ============================================================================== //
// ============================================================================== //
// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180
// ============================================================================== //
// function ichkiBurchaklar(n) {
//     return (n-2) * 180;
// }
// console.log(ichkiBurchaklar(10));
// ============================================================================== //
// ============================================================================== //
// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki 
// ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami 
// ochkosini qaytaradigan funksiya yasang.
// ============================================================================== //
// function ochkolar(x,y) {
//     return (x*2)+(y*3);
// }
// console.log(ochkolar(1,1));
// ============================================================================== //
// ============================================================================== //
// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// ============================================================================== //
// function nameString(name) {
//     return name+"Edabit";  
// }
// console.log(nameString("Mubashir"));
// ============================================================================== //
// ============================================================================== //
// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.
// ============================================================================== //
// function ikkitaSon(x,y) {
//     if((x+y)<100) return true;
//     else return false;
// }
// console.log(ikkitaSon(49,50));
// ============================================================================== //
// ============================================================================== //
// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladi-
// gan funksiya yasang.
// ============================================================================== //
// function printArray(count) {
//     const res = [];
//     for(let i = 0; i < count; i++) {
//         res[i]=i+1;
//     };
//     return res;
// };
// console.log(printArray(12))
// ============================================================================== //
// ============================================================================== //
// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.
// ============================================================================== //
// function oyoqlar(tovuq,qoy,sigir) {
//     return (tovuq*2)+(qoy*4)+(sigir*4);
// }
// console.log(oyoqlar(100,250,125));
// ============================================================================== //
// ============================================================================== //
// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu oper-
// ator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foy-
// dalangan holda!
// function and(a,b) {
//     if(a&&b) return true;
//     else return false;
// }
// console.log(and(true,true));
// ============================================================================== //
// ============================================================================== //
// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.
// ============================================================================== //
// function tengMi(x,y) {
//     if(x==y) return true;
//     else return false;
// }
// console.log(tengMi(2,2));
// ============================================================================== //
// ============================================================================== //
// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.
// ============================================================================== //
// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//     return (yutishlar*3) + duranglar;
// }
// console.log(futbolOchko(0,0,1))
// ============================================================================== //
// ============================================================================== //
// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.
// ============================================================================== //
// function sekundlar(soat, minut) {
//     return (soat * 3600) + (minut * 60);
// }
// console.log(sekundlar(1,3));
// ============================================================================== //
// ============================================================================== //
// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ᔍ false
// fun(9) ᔍ false
// fun(7) ᔍ true
// ============================================================================== //
// function fun(num) {
//     if(num>=4&&num<=9) return true;
//     else return false;
// }
// console.log(fun(7));
// ============================================================================== //
// ============================================================================== //
// 27.Funskiya 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.
// ============================================================================== //
// function checkEquality(x, y) {
//     if(x===y) return true;
//     else return false;
// }
// console.log(checkEquality("Aziz","Aziz"));
// ============================================================================== //
// ============================================================================== //
// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.
// ============================================================================== //
// function booleanToString(bool) {
//     return String(Boolean(bool));
// }
// console.log(booleanToString(true));
// ============================================================================== //
// ============================================================================== //
// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.
// ============================================================================== //
// const arrowFunction = (a) => {
//     console.log(this);
// };
// ============================================================================== //
// ============================================================================== //
// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni
// aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.
// ============================================================================== //
// function framelarSoni(minut,frame) {
//     return ((minut*60)*frame);
// }
// console.log(framelarSoni(10,30));
// ============================================================================== //
