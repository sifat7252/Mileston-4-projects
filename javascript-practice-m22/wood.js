/* 
fixed: per item wood requirements 
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/
/* let we have to make some furniture there some fixed cft. now you have to calculate total wood requirement   */ 

function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10; 
    const perBedWood = 50; 

    const chairWood = chairQuantity * perChairWood; 
    const tableWood = tableQuantity * perTableWood; 
    const bedWood = bedQuantity * perBedWood;
    
    const totalWood = chairWood + tableWood + bedWood; 

    let WoodPrize = 1200; 
    let totalWoodPrize = WoodPrize * totalWood; 

    const woodObject = {
        totalWood, 
        totalWoodPrize
    }
    return woodObject;

    // return [totalWood, totalWoodPrize]; 
    // return totalWood;
    


}
const totalWoodNeed = woodCalculator(6, 1, 1);
console.log('Total wood needs : ', totalWoodNeed.totalWood);
console.log('Total cost should be : ', totalWoodNeed.totalWoodPrize);

// console.log('Total cost should be :', totalWoodPrize);