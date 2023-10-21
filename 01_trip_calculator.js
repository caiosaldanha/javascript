//This is a simple program to calculate the planned expense of a trip
//Written by Caio Saldanha

//start the program
console.log('3 questions to calculate the trip:');

//variables collection
var fuel_price = prompt("1/3 - What is the fuel price per liter?");
var car_consumption = prompt("2/3 - What's KM per liter car consumption?");
var distance_km = prompt("3/3 - What is the distance in KMs?");

//calculation
var result = (distance_km / car_consumption) * fuel_price;

//print out the result
console.log("You will need ${result} for the trip.");
 