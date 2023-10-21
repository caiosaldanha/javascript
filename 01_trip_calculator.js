/*
===================================================================
This is a simple program to calculate the planned expense of a trip
Written by Caio Saldanha
===================================================================
*/

//What is the fuel price per liter?
let fuel_price = 5;

//What's KM per liter car consumption?
let car_consumption = 10;

//What is the distance in KMs?
let distance_km = 100;

//result calculation
let result = (distance_km / car_consumption) * fuel_price;

//print out the result
console.log(`You will need ${result} bucks for the trip.`);