//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, tests) => {
  const letters = word.toLowerCase().split("")
  const anagrams = []

  for(let i = 0; i < tests.length; i++){
  let breakdown = tests[i].toLowerCase().split("")

    for(let i2 = 0; i2 < letters.length; i2++){
      if(breakdown.includes(letters[i2])){
        breakdown.splice(breakdown.indexOf(letters[i2]), 1)

        if((i2 == letters.length-1) && (breakdown.length == 0) && (tests[i].toLowerCase() != word.toLowerCase())){
          anagrams.push(tests[i])
          break
        }
      } else {
        break
      }
    }
  }
  return anagrams
}
