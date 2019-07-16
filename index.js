function theBeatlesPlay(musicians, insutruments) {
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++) {
    allMusicians.push(musicians[i] + " plays " + insutruments[i])
  }
  return allMusicians
}

function johnLennonFacts(facts) {
  var allFacts = [];
  for (var i=0; i < facts.length; i++) {
    allFacts.push(facts[i]+"!!!")
  }
  return allFacts
}

function iLoveTheBeatles(n) {
  var i = 0;
 function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("I love the Beatles!");
} while (incrementVariable() < 8);
}