let light = prompt("Enter light") ;
if (light === "red") {

    console.log(`light is ${light} . please stop`)  
} else if (light === "yellow") {
    console.log(`light is ${light}. please wait`)
}
else if (light === "green"){
    console.log(`light is ${light}. please go`)
}
else{
    console.log("enter valid input")
}