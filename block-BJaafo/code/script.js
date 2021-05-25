function fullName(firstName = "",lastName= "") {
    return firstName + " " + lastName;
}
let name = fullName("Himanshu","Motiani");
console.log(name);
let userName = "Himanshu Motia"
if(name != userName){
throw new Error(`${name} is not expected as ${userName}`)
}
