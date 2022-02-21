// if (time >= 0 && time <= 15) {
//     console.log('Перша чверть')
// } else if (time >= 15 && time <= 29) {
//     console.log('Друга чверть')
// } else if (time > 30 && time <= 44) {
//     console.log('Друга чверть')
// } else if (time>=45 && time <=59){
//     console.log('Четверта чверть')
// } else{
//     console.log('некоректно введені дані')}
//
// let day = +prompt('введіть число місяця')
// if (day >= 1 && day <= 10) {
//     console.log('Перша декада')
// }
// if (day >= 11 && day <= 20) {
//     console.log('Друга декада')
// }
// if (day>=21 && day<=31){
//     console.log('Третя декада')
// } else {
//     console.log("Некоректно введені дані")}
// let test = 'asf';
// if (test === true) {
//     console.log('Вірно')
// } else {
//     console.log("Невірно")}
// let test = !!'' ? 'Невірно' : 'Вірно'
// console.log(test);

// let a = +prompt('Введіть число')
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')};
// (a!=0) ? 'Вірно' : 'Невірно';
// let dayOfWeeks = +prompt('Введіть день тижня')
// switch (dayOfWeeks) {
//     case 1:
//         console.log('Понеділок');
//         break;
//     case 2:
//         console.log('Вівторок');
//         break;
//     case 3:
//         console.log('Середа');
//         break;
//     case 4:
//         console.log('Четвер');
//         break;
//     case 5:
//         console.log('Пятниця');
//         break;
//     case 6:
//         console.log('Субота');
//         break;
//     case 7:
//         console.log('Неділя');
//         break;
//     default:
//         console.log('Щось не то');
// }

// let year = +prompt('Скільки днів у цьому році?');
// if (year % 5 === 0){
//     console.log('рік звичайний')}
// else{
//     console.log('рік високосний')}
// (+prompt('введіть ксть днів у році') % 5 ===0)? console.log('рік звичайний') :
//     console.log('Високосний')

let oficialName = prompt('яка офіційна назва js?');
if (oficialName === 'ecmascript') {
    alert('чудово');
} else {
    alert('невірно, офіційна назва - ECMAscript')
}