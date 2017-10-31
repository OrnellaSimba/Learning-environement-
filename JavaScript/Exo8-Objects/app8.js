// var character =
// {
//   name:"daniel",
//   age:32,
//   items_to_give:['chaise','assiette','mirroir'],
//   giveItem: function() {
//     var randominfo = Math.random()*(this.items_to_give.length);
//     randominfo=Math.floor(randominfo);
//     return this.items_to_give[randominfo];
//   }
// }
// for (a in character) {
//   if (a !="items_to_give" && a!= "giveItem") {
//     console.log(character[a]);
//   }
//   else if (a=='giveItem') {
//     var item = character.giveItem();
//     console.log(item);
//   }
// }


 var epee={
   title:'epée',
   physic:8,
   magic:1,
   minLevel:10,
   available:true
 }

var poison={
  title:'poison',
  physic:1,
  magic:10,
  minLevel:1,
  available:true
}

var baton ={
  title:'baton',
  physic:9,
  magic:5,
  minLevel:7,
  available:true
}

var hache={
  title:'hache',
  physic:3,
  magic:4,
  minLevel:1,
  available:false
}

var shop=[epee,poison,baton,hache];
//
// function affichageShop(){
//   for (x in shop) {
//     console.log(shop[x].title);
//   }
// }
// affichageShop();
//
// function Availaibility() {
//   for (x in shop) {
//     if (shop[x].available == true) {
//       console.log(shop[x].title);
//      }
//   }
// } Availaibility();
//
// function Minimumlevel() {
//   for (x in shop) {
//     if (shop[x].minLevel>5) {
//       console.log(shop[x].title);
//       console.log(shop[x].minLevel);
//      }
//   }
// }
// // Minimumlevel();
// let Personnage={
//   name: 'MrGold',
//   level:4,
//   life:8,
//   weapon:{
//     'name':"gun",
//     'damage':5
//   },
//
//   attack : function(){
//     let attaqueEffect= this.level*this.weapon.damage;
//     console.log(this.name+ "attaque avec l'arme"+this.weapon.name+"les effets sont"+attaqueEffect);
//     return this.name+ "attaque avec l'arme"+this.weapon.name+"les effets sont"+attaqueEffect;
//   }
// };
// Personnage.attack();
