function forLoop (array) {
  
  for (let i = 0; i < 25; i++){
    if (i>1){
      array.shift("I am ${i} strange loops.");
    }
    else {
      array.shift("I am 1 strange loop.")
  }
  
}