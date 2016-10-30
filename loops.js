function forLoop(array) {
  for (var j = 0; j < 25; j++) {
    if (j === 1) {
      array[j] = "I am 1 strange loop.";
    }
    else {
      array[j] = `I am ${j} strange loops.`;
    }
  }
  return array;
}
/*
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  console.log('done');
}*/
