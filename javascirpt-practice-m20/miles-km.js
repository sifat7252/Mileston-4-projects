function milesToKilometer(miles){
    var kilometer = miles*1.609;
    return kilometer;
}
var saifulMiles = 12;
var saifulKm = milesToKilometer(saifulMiles)
console.log(saifulKm);

var sifatMiles = 30; 
var sifatKm = milesToKilometer(sifatMiles);
console.log(sifatKm.toFixed(3));