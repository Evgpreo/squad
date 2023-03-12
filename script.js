const arr1 = [7, 4, 5, 6, 8]; //подготовили массив

function squad(item) {
    return item**2;
}
const arr2 = arr1.map(squad);
console.log(arr2)


//переделываем в анонимную функцию

// const arr2 = arr1.map(item => item**2);
// console.log(arr2)
// showArr(arr2, out3);
