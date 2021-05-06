let A = 10;
let B = 2.1;

console.log("A = ", A);
console.log("B = ", B);

A = A - B;
B = B + A;
A = B - A;

console.log("A = ", A);
console.log("B = ", B);


// node v8.10.0

// A =  10
// B =  2.1
// A =  2.0999999999999996
// B =  10
