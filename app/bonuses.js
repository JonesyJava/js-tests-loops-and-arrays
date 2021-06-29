// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
    let sorted = str.split('').sort().join('')
    let charCode = sorted.charCodeAt(0)
    for (let i = 0; i < str.length; i++) {
        console.log(sorted.charCodeAt(i), sorted.charAt(i));
        if (charCode != sorted.charCodeAt(i)) {
            return String.fromCharCode(charCode)
        }
        charCode++
    } return "no missing letters"
}
characters(str)


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
    let pastNums = []
  for(i=0; i<= arr.length; i++){
    pastNums.forEach(n => {
      if(n + arr[i] === target){
        return true
      }
    })
    pastNums.push(arr[i])
  }
  return false
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
}