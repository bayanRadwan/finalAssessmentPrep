//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")


  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....function each(coll, func) {
	function each(coll, func) {
     if (Array.isArray(coll)) {
         for (var i = 0; i < coll.length; i++) {
                func(coll[i], i);
         }
     } else {
         for (var key in coll) {
                func(coll[key], key);
         }
     }
}
              function reduce(array, f, acc) {
            if (acc === undefined) {
              acc = array[0];
              array = array.slice(1);
            }
            each(array, function(element, i) {
              acc = f(acc, element, i);
            });
            return acc;
          }
          function filter(array, predicate) {
     var acc = [];
     each(array, function(element, i) {
          if (predicate(element, i)) {
                acc.push(element);
          }
     });
     return acc;
}
function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function(element, key) {
    acc[key] = f(element, key);
    });
    return acc;
}

 	// a - we need to create the players using OOP the player declaration
  //   should take the name of the player  	==> var player1 = Player("jony")

function players (initial){
	var counter {};
	counter.player=player;
	counter.addInfo=addInfo;
	counter.increaseLeve=increaseLeve;
	counter.isAvailable=isAvailable;
	counter.decrease=decrease;
	counter.sortPalyersAge=sortPalyersAge;
	counter.sortPalyersName=sortPalyersName;
	return counter;
}
var player =function (name){
return name
} 

  // b - after that we need function to add the other info for the player with addInfo function
		// ==> player1.addInfo(age, position, level, availability );
var addInfo =function (age,position,level,availability){
	return this.player{
		age:age,
		position:position,
		level:level,
		availability:availability
		 };
}
// c- and create another function to increase the the level for the player by n value 
// 		==> player1.increaseLevel(4);
 var increaseLevel =function(n){
 	var x=this.player[level];
 	return x+=n
 }
 // d - we need another function to check if the player is available or not it should return true or false
	// 	==> player1.isAvailable();  true / false
	var isAvailable = function(){
		var x=this.player(name)
		if(name===undefined){
			return false;
		}
		return true;
	}

// e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers
var player1=this.player("bayan");
var player2=this.player("aya");
var player3=this.player("mohammad");
var player4=this.player("ahmad");


// f - write function to iterate over the all players to decrease the level for the player if age larger the 30

var decrease=function(){
var x=this.player
each(X,function(elem,key){
	if (elem[age]>30){
		elem[level]-1
	}
})
}


  // g - sort the players in the arrayOfPlayers by the key
		// sortPalyerBy(arrayOfPlayers, "age");
		// sortPalyerBy(arrayOfPlayers, "name");
		var sortPalyersAge=function(){
			var x=this.player[age]
			x.sort(function(a,b){
				return list[a]-list[b]})
		}
		var sortPalyersName=function(){
			var x=this.player[name]
			x.sort(function(a,b){
				return list[a]-list[b]})
		}
