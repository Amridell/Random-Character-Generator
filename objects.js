//objects.js
//FEATS
function feat(prerequisiteCheck, name, effect){
  this.prerequisiteCheck = prerequisiteCheck;
  this.name = name;
  this.effect = effect;
}

var powerAttack = new feat(
    function(strength){
      if(strength>13){
        return true;
      }else{
        return false;
      }
    },
    "Power Attack",
    "Allows you to hit HARD"
);

var acrobatic = new feat(
  function(){
    return true;
  },
  "Acrobatic",
  "+2 on Jump and Tumble checks."
);

var agile = new feat(
  function(){
    return true;
  },
  "Agile",
  "+2 on Balance and Escape Artist checks."
);

var alertness = new feat(
  function(){
    return true;
  },
  "Alertness",
  "+2 on Listen and Spot checks."
);

var animalAffinity = new feat(
  function(){
    return true;
  },
  "Animal Affinity",
  "+2 on Handle Animal and Ride checks."
);

var lightArmorProficiency = new feat(
  function(){
    return true;
  },
  "Light Armor Proficiency",
  "Use light armor without penalty."
);

var mediumArmorProficiency = new feat(
  function(featsList){
    if(contains("lightArmorProficiency", featsList)){
      return true;
    }else{
      return false;
    }
  },
  "Medium Armor Proficiency",
  "Use medium armor without penalty."
);

var heavyArmorProficiency = new feat(
  function(featsList){
    if(contains("mediumArmorProficiency", featsList)){
      return true;
    }else{
      return false;
    }
  },
  "Heavy Armor Proficiency",
  "Use heavy armor without penalty."
);

var athletic = new feat(
  function(){
      return true;
  },
  "Athletic",
  "+2 on Handle Animal and Ride checks."
);

var toughness = new feat(
  function(){
      return true;
  },
  "Toughness",
  "+3 hitpoints."
);

var weaponFocus = new feat(
  function(character){
      if(character.ability_scores[0] >= 13){
        return true;
      }else{return false;}
  },
  "Weapon Focus",
  "+1 to hit rolls with one weapon."
);

//alert(fnames);
