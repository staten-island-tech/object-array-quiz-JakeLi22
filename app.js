const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democrats = presidents.filter((president) =>
  president.party.includes("D")
);
console.table(democrats);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const republicans1 = presidents.filter(function (president) {
  if (president.terms < 2 && president.party.includes("R")) {
    return true;
  }
});

console.table(republicans1);

//3) return only the last three presidents
const last3 = presidents.slice(9);
console.log(last3);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const democrats2 = presidents.filter(
  (president) => president.party.includes("D") && president.terms === 2
);

console.log(democrats2);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
//LBJ has an index of 10\

/* presidents.filter(function (president) {
  if (president.name.includes("Lyndon Johnson") && president.terms === 2) {
    alert("LBJ served two terms");
  } else {
    alert("LBJ was one and done");
  }
}); */

const LBJ = presidents[10];
function termChecker(LBJ) {
  if (LBJ.terms === 2) {
    alert("LBJ served two terms");
  } else {
    alert("LBJ was one and done");
  }
}

termChecker(LBJ);
