function Character(name, ability_scores, classname, race, sex, level, feats) {
	this.name = name;
	this.scores = ability_scores;
	this.classname = classname;
	this.race = race;
	this.sex = sex;
	this.feats = feats;
	this.level = level;
}

//Helper functions

var bonus = function(score){
	a = Math.floor((score-10)/2);
	if(a>=1){
		return "+" + a;
	}else{
		return a;
	}
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++){
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

//Databases
var fnames = ["Emily", "Isabelle", "Samantha", "Alice", "Jessica", "Mary", "Kristen", "Kirsten", "Taylor"];
var mnames = ["William", "Finn", "Luke", "Robert", "Max", "Matthew", "Chandler", "Joseph", "Stephen", "Kenneth", "Christian", "Mason", "James", "Theodore", "Franklin", "Nicholas"];
var surnames = ["Carter", "Taylor", "Grant", "Knight", "Shaw", "Mason", "Mann", "Burnett", "Kinglover", "Nailo", "Chandlerson", "Kenson", "Balsiger", "Smith", "Fischer", ];
var races = ["Human", "Elf", "Dwarf", "Halfling", "Half-orc", "Half-elf", "Gnome"];
var classes = ["Barbarian", "Fighter", "Rogue", "Cleric", "Druid", "Ranger", "Paladin", "Monk", "Wizard", "Sorcerer", "Bard"];

var mySex = function(){
	var a = (Math.floor(Math.random()*2)+1);
	if(a == 1){
		return "Female";
	}else{
		return "Male";
	}
};

var myName = function(sex) {
	if (sex=="Female"){
		return fnames[Math.floor(Math.random()*fnames.length)] + " " + surnames[Math.floor(Math.random()*surnames.length)];
	}else{
		return mnames[Math.floor(Math.random()*mnames.length)] + " " + surnames[Math.floor(Math.random()*surnames.length)];
	}
};

//generating ability scores
var myAbilities = [];
while(myAbilities.length < 6){
  var randomnumber=Math.floor((Math.random()*10)+8);
  var found=false;
  myAbilities[myAbilities.length]=randomnumber;
}
//myAbilities = myAbilities.sort(function(a, b){return b-a});
//generating ability scores

var myClass = function(){
	return classes[Math.floor(Math.random()*classes.length)];
};
var myRace = function(){
	return races[Math.floor(Math.random()*races.length)];
};	//this can just be a string literal

//redoing ability scores to match class
var charClass = myClass();
var finalAbilities = function(){
	var sortAbilities = myAbilities.concat();
	sortAbilities.sort(function(a, b){return b-a});
	var highest = myAbilities.indexOf(Math.max(...myAbilities)); //Position in abilities array of highest value
	switch(classes.indexOf(charClass)){
		case 0: //Barbarian: Prioritize strength, con, dex. Mental abilities randomized among lowest.
			var a = (Math.floor(Math.random()*3)+1);
			switch(a){
				case 1:
					myAbilities = myAbilities.swap(highest, 0);
					myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[1]), 1); // Oh god fix this
					myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[2]), 2);
					break;
				case 2:
					myAbilities = myAbilities.swap(highest, 1);
					myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[1]), 0);
					myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[2]), 2);
					break;
				case 3:
					myAbilities = myAbilities.swap(highest, 0);
					myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[1]), 2);
					myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[2]), 1);
				}
			return myAbilities;
			break;
		case 1: //Fighter: Prioritize either strength or dex, then second into con. All others randomized among lowest.
			var a = (Math.floor(Math.random()*2)+1);
			if(a == 1){
				myAbilities = myAbilities.swap(highest, 0);
				myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[1]), 2);
			}else{
				myAbilities = myAbilities.swap(highest, 1);
				myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[1]), 2);
			}
			return myAbilities;
			break;
		case 2: //Rogue: Prioritize either dex or int, second going into the one that was unchosen. All others random.
			var a = (Math.floor(Math.random()*2)+1);
			if(a == 1){
				myAbilities = myAbilities.swap(highest, 1);
				myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[1]), 3);
			}else{
				myAbilities = myAbilities.swap(highest, 3);
				myAbilities = myAbilities.swap(myAbilities.indexOf(sortAbilities[1]), 1);
			}
			return myAbilities;
			break;
		case 3: //Cleric: Prioritize Wis, then con.
			myAbilities = myAbilities.swap(4, highest);
			return myAbilities;
			break;
		case 4: //Druid: Prioritize wis.
			myAbilities = myAbilities.swap(4, highest);
			return myAbilities;
			break;
		case 5: //Ranger: Prioritize dex, then wis or strength, then the unchosen.
			return myAbilities;
			break;
		case 6: //Paladin: Str, con, wis, cha.
			return myAbilities;
			break;
		case 7: //Monk: Four important abilities, ergo it can be totally random.
			return myAbilities;
			break;
		case 8: //Wizard: int
			myAbilities = myAbilities.swap(3, highest);
			return myAbilities;
			break;
		case 9: //Sorcerer: cha
			myAbilities = myAbilities.swap(5, highest);
			return myAbilities;
			break;
		case 10: //Bard: cha
			myAbilities = myAbilities.swap(5, highest);
			return myAbilities;
			break;
	}
};

myAbilities = finalAbilities();

var modifyAbilitiesOnRace = function(race){
	switch(races.indexOf(race)){
		case 0:	//Human
			return myAbilities;
			break;
		case 1: //Elf
			myAbilities[1] = myAbilities[1]+2;
			myAbilities[2] = myAbilities[2]-2;
			return myAbilities;
			break;
		case 2: //Dwarf
			myAbilities[2] = myAbilities[2]+2;
			myAbilities[5] = myAbilities[5]-2;
			return myAbilities;
			break;
		case 3: //Halfling
			myAbilities[1] = myAbilities[1]+2;
			myAbilities[0] = myAbilities[0]-2;
			return myAbilities;
			break;
		case 4: //Half-orc
			myAbilities[0] = myAbilities[0]+2;
			myAbilities[3] = myAbilities[3]-2;
			myAbilities[5] = myAbilities[5]-2;
			return myAbilities;
			break;
		case 5: //Half-elf
			return myAbilities;
			break;
		case 6: //Gnome
			myAbilities[2] = myAbilities[2]+2;
			myAbilities[0] = myAbilities[0]-2;
			return myAbilities;
			break;
	}
}
//Feats will be added at some point in the future when I am less lazy
var feats = [];

var getNumFeats = function(Characterclass, level, race){
	if (classes.indexOf(Characterclass) == 1){
		return ((math.floor((5*level))/6)+2);
	}else if(classes.indexOf(Characterclass)==8){
		return math.floor(level/3)+math.floor(level/5)+1;
	}else{
		return math.floor(level/3);
	}
}

var myFeats = function(){

}
/**/
var charrace = myRace();
var charsex = mySex();
var myLevel = 1;
var myCharacter = new Character(myName(charsex), modifyAbilitiesOnRace(charrace), charClass, charrace, charsex, myLevel, myFeats());

//JQUERY
$(document).ready(function(){
	$("#name_field").html(myCharacter.name);
	$("#racesex_field").html(myCharacter.sex + " " + myCharacter.race);
	$("#class_field").html(myCharacter.classname + " " + myCharacter.level);
	$("#Abilitiesstr").html("<td>Strength</td>" + "<td>" + myCharacter.scores[0] + "</td><td>" + bonus(myCharacter.scores[0]) + "</td>");
	$("#Abilitiesagi").html("<td>Dexterity</td>" + "<td>" + myCharacter.scores[1] + "</td><td>" + bonus(myCharacter.scores[1]) + "</td>");
	$("#Abilitiescon").html("<td>Constitution</td>" + "<td>" + myCharacter.scores[2] + "</td><td>" + bonus(myCharacter.scores[2]) + "</td>");
	$("#Abilitiesint").html("<td>Intelligence</td>" + "<td>" + myCharacter.scores[3] + "</td><td>" + bonus(myCharacter.scores[3]) + "</td>");
	$("#Abilitieswis").html("<td>Wisdom</td>" + "<td>" + myCharacter.scores[4] + "</td><td>" + bonus(myCharacter.scores[4]) + "</td>");
	$("#Abilitiescha").html("<td>Charisma</td>" + "<td>" + myCharacter.scores[5] + "</td><td>" + bonus(myCharacter.scores[5]) + "</td>");
	$().html();
});
