function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    /// And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
//  var arr = [2, 11, 37, 42];
//  arr = shuffle(arr);
//  console.log(arr);

const parts = ["a", "b", "return", "+", " "];
// , "=>", "{", "}", "(", ")"];

const shuffleUntilWin = () => {
  try {

    let func = "";
    let x = "";

    const shuffleAndTest = () => {
      const shuffledParts = shuffle(parts);
      const x = parts.join("").replace(",", "");
      console.log(x);
      func = new Function("a", "b", x);
    };

    shuffleAndTest();

    console.log(func(1, 6) == 7);
    console.log(func(1, 2) != 4);
  } catch (err) {
    shuffleUntilWin();
  }
};


const deleteRandomPart = () => {
  const randomIndex = Math.floor(Math.random()*parts.length);

  parts.splice(randomIndex, 1)

}




shuffleUntilWin();
