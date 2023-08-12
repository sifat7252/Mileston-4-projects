/* get a string into a array output */ 

// function reverseWord(text){
//     const words = text.split(" ");
//     console.log(words);
// }
// const myString = 'i am a good boy';
// reverseWord(myString);

/*  get a forwarded string array to backward string array */

// function reverseWord(text){
//     const words = text.split(" ");
//     const result= []; 
//     for(let i = words.length-1; i >= 0; i--){
//         const element = words[i];
//         result.push(element);
//     }
//     console.log(result); 
// }
// const myString = 'i am a good boy';
// reverseWord(myString);

/*  joining some string in a sentence */ 

function reverseWord(text){
    const words = text.split(" ");
    const result= []; 
    for(let i = words.length-1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    const reverse = result.join(" "); 
    return reverse; 
}
const myString = 'i am a good boy';
const finalResult = reverseWord(myString);
console.log(finalResult);

