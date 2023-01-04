//First Way In One Code But For Num >= 100 Not Working Properly
        
// Test Case 1
let num = 998; // "009"
if (num <= 9) {
    num = `00${num}`;
}else if (num > 10 || num <= 99) {
    num = `0${num}`;
}else if (num >= 100) {
    num = num;
}
console.log(num);

//Second Way

// Test Case 1
let num1 = 9; // "009"
if (num1 <= 9) {
    console.log(`00${num1}`); 
}

// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 || num2 <=99) {
    console.log(`0${num2}`);
}

// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) {
    console.log(num3);
}