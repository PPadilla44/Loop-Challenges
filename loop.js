console.log("Print Odds")
for (let i = 1; i < 20; i++){
    if(i%2!=0){
        console.log(i);
    }
}

console.log("Print Sequence")
for(let i = 4.0; i>=-3.5; i-=1.5) {
    console.log(i);
}

console.log("Sigma")
var sum = 0;
for(let i = 1; i<=100; i++) {
    sum+=i;
}
console.log(sum);

console.log("Factorial")
var prod = 1;
for(let i = 1; i <= 100000000; prod++){
    i *= prod
}
console.log(prod-1);
