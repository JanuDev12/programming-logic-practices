/* During Halloween night 🎃, a witch 🧙‍♀️ is preparing a magical brew. She has a list of potions, each with an associated power, and she wants to combine two of them to achieve a specific total power.

Given a list of integers where each number represents the power of a potion 🧪 and an integer representing the target power, you must find the index of the first two potions that add up to exactly the target power. 

In the case that there is more than one possible combination, select the combination whose second potion appears first in the list.

*/

// My first Solution

function createMagicPotion(potions, target) {
  let sum;
  let potionNext = 1;

  for (let i = 0; i < potions.length; i++, potionNext++) {
    sum = potions[i] + potions[potionNext];

    if (sum === target) return [i, potionNext];
    for (let j = i - 1; j >= 0; j--) {
      sum = potions[i] + potions[j];
      if (sum === target) return [j, i];
    }
  }
}


/* The code can be optimized by using a hash map to store previously seen potions, allowing for O(n) time complexity instead of O(n^2). This reduces the need for nested loops. in other words, nested loops reduce perfomance. especially as the size of the input increases */


// Optimized Version

function optimizedCreateMagicPotion(potions, target) {
  // Input validation for more robutness
  if (!Array.isArray(potions) || potions.length === 0) {
    console.warn("Input must be a non-empty array of numbers.");
    return undefined;
  }

  if (typeof target !== "number") {
    console.warn("Target must be a number.");
    return undefined;
  }

  for (let i = 0; i < potions.length; i++) {
    if (typeof potions[i] !== "number") {
      console.warn("All elements in the potions array must be numbers.");
      return undefined;
    }
  }


  const seenPotions = {}; // Hash map to store potion.

  for (let i = 0; i < potions.length; i++) {
    const currentPower = potions[i];
    const neededPower = target - currentPower; // Calculate implement

    // Check if neededPower is in the hash map
    if (neededPower in seenPotions) {
      return [seenPotions[neededPower], i]; // return indices of the two potions
    }

    // Store the current potion and its index in the hash map
    seenPotions[currentPower] = i;
  }

  // if no pair is found, return undefined
  return undefined;
}


console.log(createMagicPotion([1, -2, 3, -4, 5], -1));

console.log(createMagicPotion([5, 1, 4, 6, 2], 9));


console.log(createMagicPotion([10, 20, 30, 40], 50));


console.log(optimizedCreateMagicPotion([1, -2, 3, -4, 5], -1));

console.log(optimizedCreateMagicPotion([5, 1, 4, 6, 2], 9));

console.log(optimizedCreateMagicPotion([10, 20, 30, 40], 50));