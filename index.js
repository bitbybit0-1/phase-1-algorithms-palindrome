function isPalindrome(word){
  const copyOfWord=word
  let paliCal=word.split('').reverse().join("").toString()
  if(paliCal===copyOfWord){
    return true

  }else return false
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*///self explanatory

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
