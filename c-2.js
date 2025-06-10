/* In an epic battle between zombies 🧟 and humans 👮‍♂️, both sides have a list of fighters with specific attack powers.

The battle unfolds in rounds, and each round pits each fighter against their opponent.

The side with the greater attack power wins the round, and their power is added to the next fighter on their team.

In case of a tie, both fighters fall and do not affect the next round.

Given two strings zombies and humans, where each digit (from 1 to 9) represents a fighter's attack power, determine who is left at the end and with how much attack power.

Important: Both strings will always have the same length.

The output is a string representing the final result of the battle.

If a zombie is left, return its power followed by "z", for example "3z".
If a human is left, return its power followed by "h", for example "2h".
If there's a tie and neither is left with power at the end, return "x". 

*/


// My first solution

function battleHorde(zombies, humans) {
  // Code here

  let z = 0
  let h = 0
  let addedP
  let humansWinning = false 

   for(; z < zombies.length; z++, h++) {

    let zN = Number(zombies[z])
    let hN = Number(humans[h])

    if(zN < hN){
      console.log("humans wins round:", zN, "VS", hN);
      addedP = hN - zN
      sum = addedP + Number(humans[h + 1])
      console.log("+", addedP)
      console.log("Next Num:", sum)
    } else{
       console.log("zombies wins round:", zN, "VS", hN);
       addedP = zN - hN;
       console.log("+", addedP);
    }


     /* if (humansWinning && addedP > 0) {
       console.log("Sumando +", addedP, "a los humanos");
       addedP = 0;
     } else {
       console.log("Sumando +", addedP, "a los zombies");
       addedP = 0;
     }


    if(zombies[z] < humans[h]){
      console.log("humanos ganan esta ronda:" , zombies[z], "VS", humans[h])
      addedP = humans[h] - zombies[z]
      humansWinning = true
      console.log("+", addedP)
    } else{
      console.log("zombies ganan esta ronda:", zombies[z], "VS", humans[h]);
      addedP = zombies[z] - humans[h];
      console.log("+", addedP);
      humansWinning = false;
    } */

   

    
  }
  /* if("242" < "334") {
    return true
  } else {
    return false
  } */
}



console.log(battleHorde("242", "334")); // 2h

/* console.log(battleHorde("444", "282"));  */// x
