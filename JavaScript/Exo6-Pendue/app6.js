


var montableau=['B','O','U','L','O','I','R',]
var pendue=['','','','','','','']
var compteurvictoire= 0

function guessMot() {
  var message= prompt('veuillez introduire une lettre');
  message = message.toUpperCase();
  if (message.length != 1) {
    alert('Entrez un seul caractère');
    console.log('Entrez un seul caractère');
    console.log(message.length);
  } else {
    if (montableau.indexOf(message)== -1) {
      console.log('introuvable');
    }else {
      console.log('trouvé');
        }
    for (var i = 0; i < montableau.length; i++) {
          if (message == montableau[i]) {
            compteurvictoire++;
            console.log("Yeah, tu as trouvé la lettre à l'index "+i);
            pendue.splice(i,1,message);
            console.log(pendue);
      }
    }
  }
if (compteurvictoire == montableau.length) {
  console.log('Tu as gagné!');
} else {
  guessMot()
}
}
guessMot()
