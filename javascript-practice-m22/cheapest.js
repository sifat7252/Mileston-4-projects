const laptops = [
    { brand : 'Acer', Processor: "intel i5", Ssd : '256gb', Backup : '5h', Review : 72, Prize : 45000 },
    { brand : 'Hp', Processor: "Ryzen 5", Ssd : '256gb', Backup : '7h', Review : 82, Prize : 55000 },
    { brand : 'Lenevo', Processor: "intel i3", Ssd : '256gb', Backup : '8h', Review : 90, Prize : 65000 },
    { brand : 'Dell', Processor: "intel i7", Ssd : '256gb', Backup : '4h', Review : 62, Prize : 40000 },
    { brand : 'Walton', Processor: "intel i5", Ssd : '256gb', Backup : '3h', Review : 52, Prize : 38000 }
]

/* WRITE A CODE TO FIND THE CHEAPEST LAPTOP FROM HERE */

function cheapestLaptops (laptops){
    let cheapest = laptops; 
    for(let i = 0; i < laptops.length; i++){
        const laptop = laptops[i];
        if(laptop.Prize < cheapest.Prize){
            che
        }
    }
}
const myLaptop = cheapestLaptops(laptops);
