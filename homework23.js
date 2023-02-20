// // Task 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // function sumArray(arr) {
    //     if (arr.length === 0) {
    //         return 0;
    //     } else {
    //         return arr[0] + sumArray(arr.slice(1));
    //     }
    // }

const sumArray = arr => arr.length === 0 
    ? 0
    : arr[0] + sumArray(arr.slice(1));
let sum = sumArray(arr);
console.log(sum);

// // Task 2
function deepCount(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        // if (Array.isArray(arr[i])) {
        //     sum += deepCount(arr[i]) + 1;
        // } else {
        //     sum++;
        // }

        Array.isArray(arr[i]) ? sum += deepCount(arr[i]) + 1 : sum++;
    }
    return sum;
}
console.log(deepCount([]));
console.log(deepCount([1, 2 , 3]));
console.log(deepCount(["x", "y" , ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));

// Task 3
let employees = {
    development: {
        backend: [{ name: 'Mike', salary: 2000 }, { name: 'Nikola', salary: 2500 }],
        frontend: [{ name: 'Artem', salary: 3000 }, { name: 'Alex', salary: 2700 }],
    },
    sales: {
        marketing: {
            internet_marketers: [{ name: 'Nina', salary: 1000 }, { name: 'Olena', salary: 1300 }],
            promotion: [{ name: 'Oleg', salary: 1400 }, { name: 'Masha', salary: 1700 }],
        },
        sellers: [{ name: 'Max', salary: 900 }, { name: 'Donald', salary: 700 }, { name: 'Joe', salary: 1100 }]
    },
    designer: [{ name: 'Kate', salary: 1800 }]
};

function subSum (){
    let sum = 0;
    return function sumSallary(obj){
        for(let key in obj){
            Array.isArray(obj[key])
            ? obj[key].forEach(employee => sum += employee.salary)
            : sumSallary(obj[key]);
        }
        return sum;
    }
}
let salary = subSum();
console.log(salary(employees));

// Task 4
let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 9];
let arr3 = [6, 11, 16, 15, 11];
function maxNumber () {
    return Math.max(...arr1, ...arr2, ...arr3);
}
console.log(maxNumber());