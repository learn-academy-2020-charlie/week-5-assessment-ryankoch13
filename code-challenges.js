// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// First I'll make a function that accepts a string as an argument

const l33tC0d3r = string => {

    // Now I'm going to setup an object that will act as a decoder. Hopefully this should function somewhat like our friend ActiveRecord. 

    let key = { 'a':4, 'e':3, 'i':1, 'o':0 }

    // I'll have to convert the string that is accepted as an argument into an array

    let strArr = string.split("")

    // Here I'll use a map method to access all the array values, converting the values if they match a property of the key
    let codedArr = strArr.map(value => {
        // I had to look up a good way to check if the key exists before running the code or else the function would just throw an error for all the characters that don't need to be converted.
        if (value.toLowerCase() in key){return value = key[value.toLowerCase()]}
        else {return value}
        
    })
    return codedArr.join("")
}

console.log(l33tC0d3r(secretCodeWord1))
console.log(l33tC0d3r(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// Declare  a function that accepts an array as an argument

const onlyA = (array) => {

    // Setup a filter that will only return values that include an a

    words = array.filter(value => value.toLowerCase().includes('a'))

    // Return those words joined with a space

    return words.join(" ")
}


console.log(onlyA(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// Okay, so putting together this one was a mess so I had to redo my comments a litle bit for them to make sense. Bare with me. I started with a function that takes in an array as an argument. 

const fullHouse = (array) => {

// Now I'm going to use a map function to look at each value in the array. It took some trouble shooting, but I knew I was going to want to passs the value and the array through the map function. Once inside, I would want to look at the original array and figure out how many times that value occurs in the array. I opted with a filter method, originally thinking I would have an array of arrays that had each value listed inside the number of times they occured. But then I realized I could just chain a length method at the end to output an array of the number of times each value shows up. 

    counts = array.map((value, i, array) =>{
        return array.filter(val => (val === value)).length
    })

    // This last part is a bit unelegant compared to the above logic, but I figured if the counts array has both a 3 and a 2 it must be a full house

    if (counts.includes(3) && counts.includes(2)){
        return true
    } else {
        return false
    }
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))