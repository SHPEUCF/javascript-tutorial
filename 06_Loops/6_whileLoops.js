/*
6. WHILE LOOPS

for loops are great, but they have a
limitation: you have to know how many
times you want the loop to run.


while (condition) {
  // code block that loops until
  condition is false
}



*/


// --- On Codecademy ---

/*

 1. create let currentCard = 'Spade'; right
 below what's there

 2. create while loop to check currentCard is
 NOT 'spade'
 while (currentCard !== 'Spade') {

}

3. inside loop console.log currentCard
also add this code to body

currentCard =
cards[Math.floor(Math.random() * 4)];
// this generates a # 0-3 to get value from
array

4. console.log(currentCard); outside of
while loop

- change currentCard value to 'Heart'
- Run the program multiple times to see how
it works

 */

// Example

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(currentCard);
