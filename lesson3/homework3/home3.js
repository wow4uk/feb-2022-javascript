// let numbers = [1,2,3,4,5];
// let text = ['ab','ra','ca','da','bra'];
// let all = [false,'two',1996,true,'okten'];
// console.log(numbers);
// console.log(text);
// console.log(all);
// let array = [];
// array[0] = 'happy';
// array[1] = 'new';
// array[2] = '2022';
// array[3] = 'year';
// console.log(array);
// document.write(array);

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>empty text</div>`);
// }
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}-empty text with index array for</div>`);
// }
// let j = 0;
// while (j <= 20) {
//     document.write(`<h1>empty text while</h1>`)
//     j++;
// }
// let g = 0;
// while (g<=20){
//     document.write(`<h2>${g}- empty text with index array while</h2>`);
//     g++
// }

// let numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
// for (let i = 0; i < numarray.length; i++) {
//     console.log(numarray[i]);
// }
// let stringarray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let i = 0; i < stringarray.length; i++) {
//     console.log(stringarray[i])
// }
// let allArray = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
// for (let i = 0; i < allArray.length; i++) {
//     console.log(allArray[i]);
// }
let allBoolean = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (let i = 0; i < allBoolean.length; i++) {
    if (typeof allBoolean[i] === 'boolean') {
        console.log(allBoolean[i]);
    }
}