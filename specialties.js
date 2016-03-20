/*
  Specialist wizards:
  Get an extra spell slot per level, lose 2 schools.

  Gods for Clerics:
  F L U F F
*/
var specialists = ["Abjurer", "Conjurer", "Seer", "Enchanter", "Evoker", "Illusionist", "Necromancer", "Transmuter"];
//var pantheon = ["Wee-Jas", "Tritherion", "Pholtus", "Myhriss"];

var generateSpecialtyOrGod = function(cclass, calign){
  if(Math.floor(Math.random()*2)+1 == 1){
      return specialists[Math.floor(Math.random()*specialists.length)];
  }else{
    return "Wizard";
  }
}

var generateBannedSchools = function(specialty){
  var schools = ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"];
  schools.splice(specialists.indexOf(specialty), 1);
  var bannedSchoola = schools[Math.floor(Math.random()*schools.length)];
  var bannedSchoolb = schools[Math.floor(Math.random()*schools.length)];
  while(bannedSchoolb == bannedSchoola){
    bannedSchoolb = schools[Math.floor(Math.random()*schools.length)];
  }
  return "(Banned Schools: " + bannedSchoola + ", " + bannedSchoolb + ")";
}
