### Write two tests for the following functions

#### Get full name

1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.
2. After writing the function write two tests for above function
3. Make the first test fail and look at the output
4. After making the first test fail do you see the output of the second test?

function fullName(firstName = "",lastName= "") {
    return firstName + " " + lastName;
}
let name = fullName("Himanshu","Motiani");
console.log(name);
let userName = "Himanshu Motia"
if(name != userName){
throw new Error(`${name} is not expected as ${userName}`)
}
else{
    console.log(`${name} is  expected as ${userName}`)
}
#### Calculate total amount

1. Write a function that takes two input `amount` and `taxRate` and returns the total amount by `amount + (amount * taxRate) `
2. Write two tests for the above function
3. Make the first test fail and look at the output
4. After making the first test fail do you see the output of the second test?
function calculate(amount = 0,taxRate=0) {
    return `${amount + (amount * taxRate)} `
}
let result = calculate(1000,5);
console.log(result);
let expected = 6000
if(name != userName){
throw new Error(`${result} is not expected as ${expected}`)
}
else{
    console.log(`${result} is  expected as ${expected}`)
}