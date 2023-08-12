/* string output in forwarding method or simple method*/ 

// function forwordString(text){
    
//     for(let i = 0; i < text.length; i++ ){
//         const element = text[i];
        
//         console.log(element);
//     }
    
// }
// const myString = "i am a good boy";
// let forword = forwordString(myString);

/*  string output in backwards method or reverse method */ 

// function reverseString (text){
    
//     for(let i = text.length-1 ; i >= 0; i-- ){
//         const element = text[i];
         
//         console.log(element)

//     }
     
// }
// const myString = "i am a good boy"
// const result = reverseString(myString);


/*  let the output string to an array  */ 

function reverseString (text){
    let reverse = " "; 
    for(let i = text.length-1 ; i >= 0; i-- ){
        const element = text[i];
        reverse = reverse + element; 
        console.log(element, reverse)

    }
    return reverse; 
}
const myString = "i am a good boy"
const result = reverseString(myString);
console.log("Reversed output : ", result);


