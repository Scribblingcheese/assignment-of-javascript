// function uppercase(event){
//     event.preventDefault();

//     const form = document.forms["convert"];
//     const task = form["string"].value;
//     let uppercaseString = task.toUpperCase();
//     console.log("Uppercase string:", uppercaseString);
//     let wordCount = task.length;
//     console.log("Number of words:", wordCount);
// }

//String manipulation
//converting to uppercase
function convertUppercase(string){
    return string.toUpperCase()
}

console.log("Uppercase",convertUppercase("apple"))

//string length
function slength(strings){
    return strings.length
}

console.log("Length",slength("apple"))

//reversing string
function reverse(strin){
    return strin.split("").reverse().join("");

}

console.log("Reverse",reverse("apple"))

//to check the palindrome
function palindrome(strin){
    if(strin==reverse(strin))
        console.log(strin,"is a palindrome");
    else
        console.log(strin,"is not a palindrome");

}
console.log(palindrome("palap"))

//to remove vowels
function removeVowels(str) {
    
    let vowelRegex = /[aeiou]/gi;
    let result = str.replace(vowelRegex, '');
    return result;
}

console.log("String without vowels:", removeVowels("apple"));

//Number Manipulation
//to check whether the given number is prime or not
function isPrime(num) {
    if (num <= 1) {
        console.log(num," is not a prime number.");
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num, " is not a prime number."); 
        }
    }

    console.log(num," is a prime number.");
}
isPrime(4)

// to calculate the sum of numbers in an array
function sumArray(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum = sum+ numbers[i];
    }
    return sum;
}

console.log("Sum of numbers:", sumArray([1, 2, 3]));

// to calculate the factorial of numbers in an array
function fact(numbers) {
    let f = 1;
    
    for (let i = 1; i <= numbers; i++) {
        f = f * i;
    }
    return f;
}

console.log("Factorial of number 3:", fact(3));

//to check if a number is a perfect square
function isPerfectSquare(num) {
    let sqr= Math.sqrt(num);
    if (Math.floor(sqr) == Math.sqrt(num))
        console.log(num + " is a perfect square.");
    else
        console.log(num + " is not a perfect square.");
}
isPerfectSquare(16)

//to check if a number is a Fibonacci number
function isFibonacci(num) {
    // Fibonacci sequence starts with 0 and 1
    let a = 0;
    let b = 1;

    while (a <= num) {
        if (a === num) {
            return true
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false
}

if(isFibonacci(8))
console.log(8 + " is a Fibonacci number.");
else
console.log(8 + " is not a Fibonacci number.");

// To merge two arrays into a single array
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log("Merged array:", mergeArrays([1,2,3],[4,5,6]));

// To find the largest number in an array
function findLargestNumber(numbers) {
    
    let largestNumber = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    
    return largestNumber;
}

console.log("Largest number:", findLargestNumber([6,42,24,57]));

// To sort an array of strings alphabetically
function sortStringsAlphabetically(strings) {
    return strings.sort();
}

console.log("Sorted array:", sortStringsAlphabetically(["d", "e", "f", "a"]));

// To remove duplicates from an array of numbers
function removeDuplicates(numbers) {
    let uniqueNumbers = new Set(numbers);
    
    let uniqueArray = Array.from(uniqueNumbers);
    
    return uniqueArray;
}

console.log("Array with duplicates removed:", removeDuplicates(['a', 'a', 'b', 'd', 'e', 'e', 'f']));

//To filter even numbers from an array
function filterEvenNumbers(numbers) {
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    
    return evenNumbers;
}

console.log("Array with only even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Object Manipulation
const person ={
        name:"Shushrusha",
        age :77,
        gender: "female",
    };
  console.log("Person:",person.name,person.age,person.gender);

  function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// merging 2 objects:
let obj1 = { name: "sudarshan", address: "gairidhara" };
let obj2 = { phone: 1234567890 };

let mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);

function extractNames(students) {
    return students.map(student => student.name);
}

// takes an array of objects representing students and returns an array of their names.:
let students = [{ name: "sudarshan" }, { name: "nikesh" }];
let names = extractNames(students);
console.log(names);


//
function calculateAverageGrade(students) {
    let totalMarks = students.reduce((total, student) => total + student.marks, 0);
    let average = totalMarks / students.length;
    return average;
}

// Example usage:
let student = [
    { name: "sudarshan", marks: 40 },
    { name: "suraj", marks: 100 },
    { name: "simran", marks: 100 }
];

let averageGrade = calculateAverageGrade(student);
console.log("Average is", averageGrade);

//
function sortBooksByTitle(books) {
    return books.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
}

// Example usage:
let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];

let sortedBooks = sortBooksByTitle(books);
console.log(sortedBooks);
