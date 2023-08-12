/*  find the tallest person from a friend circle array */

function findTallest (numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i; 
        const element = numbers[index];
        if( element > largest){
            largest = element;
        }
        
    }
    return largest;
}
const height = [120, 165, 180, 200, 356];
const tallest = findTallest(height);
console.log('The tallest person is :', tallest);

/*  find the shortage person from a friend circle array */

function findShortage (numbers){
    let shortage = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index2 = i; 
        const element2 = numbers[index2];
        if(element2 < shortage){
            shortage = element2;
        }
    }
    return shortage;
}
const shortage = findShortage(height);
console.log('The shortage person is :', shortage);