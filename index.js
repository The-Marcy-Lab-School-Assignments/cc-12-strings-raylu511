//write your code here


// p: declare f reverseString(string) 
//   returns the reversed version of the string without using js reverse methods

// e: "ray" -> "yar" 

// d: string

// algo: 
//   //declare the variable reversedString and initialize empty string
//   //iterate through string starting from the end
// 	 //concat reversedString with the value of string[index] 


function reverseString(string){
    let reversedString = '';
    for(let i = string.length-1 ; i>=0; i--){
        reversedString+=string[i];
    }
    
    return reversedString;
}


console.log(reverseString('ray'));
console.log(reverseString("hello"))//"olleh"
console.log(reverseString("oo"))//"oo"
console.log(reverseString(""))//""