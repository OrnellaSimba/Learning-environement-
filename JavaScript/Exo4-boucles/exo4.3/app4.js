// var i=0
//
// for (score=0; score<100; score++){
//    console.log(score);
// if (score>=90){
//    console.log("rang a");
// }
// else if (score>=80) {
//    console.log('Pour le'+ score +'vous avez le rang b');
// }
// else if (score>=70 && score<=80) {
//    console.log('Pour le'+ score +'vous avez le rang c');
// }
// else if (score>=65 && score<70) {
//    console.log('Pour le'+ score +'vous avez le rang d');
// } else {
//    console.log('Pour le'+ score +'vous avez le rang f');
// }
// }

for (var i = 0; i < 7; i++) {
  for (var j = 0; j <i ; j++) {
    document.write(j);
  }
  document.write('<br>');
}
