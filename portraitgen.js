var portrait = function(cclass, crace, csex, calign){
  switch (cclass) {
    case 0: //barbarian
      switch (Math.floor(Math.random()*2)) {
        case "Barbarian":
          return "images/barbarian1.png";
          break;
        case 1:
          return "images/barbarian2.png";
          break;
        case 2:
            return "images/barbarian3.png";
            break;
      }
      break;
    case "Fighter": //Fighter
       if(csex == "Female"){
         return "images/fighter_female.png";
       }else{
         var mfighters = ["images/fighter_male.png", "images/cleric_heronius_male.png", "images/male_fighter.png", "images/dwarf_fighterpng.png"];
         return mfighters[Math.floor(Math.random()*2)];
       }
       break;
    case "Rogue": //rogue
      var thieves = ["images/thief_halfling_female.png", "images/human_monk.png"];
      return thieves[Math.floor(Math.random()*thieves.length)];
      break;
    case "Cleric": //Cleric
      var mclerics = ["images/cleric_heronius_male.png", "images/cleric_human_female.png", "images/cleric_myhriss_male.png"];
      var fclerics = ["images/cleric_tritherion_female.png", "images/cleric_human_female.png"];
      if(csex == "Female"){
        return fclerics[Math.floor(Math.random()*fclerics.length)];
      }else{
        return mclerics[Math.floor(Math.random()*mclerics.length)];
        if(contains("Evil", calign)){
          return "images/cleric_weejas.png";
        }
      }
      break;
    //oh fuck I don't have any druids
    case "Ranger": //rangers
      if(csex == "Female"){
        return "images/human_ranger_female.png";
      }else{
        var mbarbs = ["images/barbarian1.png", "images/barbarian2.png", "images/barbarian3.png"];
        return mbarbs[Math.floor(Math.random()*mbarbs.length)];
      }
      break;
    case "Paladin": //think I got a paladin somewhere here...
      var mpals = ["images/cleric_heronius_male.png", "images/dwarf_fighterpng.png"];
      var fpals = ["images/fighter_female.png"];
      if(csex == "Female"){
        return fpals[Math.floor(Math.random()*fpals.length)];
      }else{
        return mpals[Math.floor(Math.random()*mpals.length)];
      }
      break;
    case "Monk": //Monk
      var mmonks = ["images/human_monk.png"];
      return mmonks[Math.floor(Math.random()*mmonks.length)];
      break;
    case "Abjurer":
    case "Conjurer":
    case "Seer":
    case "Enchanter":
    case "Evoker":
    case "Illusionist":
    case "Necromancer":
    case "Transmuter":
    case "Sorcerer": //magic users
    case "Wizard":
      var mmagic_users = ["images/magic_user_male.png", "images/magic_user_male2.png", "images/magic_user_male3.png", "images/magic_user_male4.png", "images/wizard_human_male.png"];
      var fmagic_users = ["images/cleric_tritherion_female.png", "images/magic_user_female.png"];
      if(csex == "Female"){
        return fmagic_users[Math.floor(Math.random()*fmagic_users.length)];
      }else{
        return mmagic_users[Math.floor(Math.random()*mmagic_users.length)];
      }
      break;
    case "Bard":
      var mbards = ["images/bard.png"];
      return mbards[Math.floor(Math.random()*mbards.length)];
    default:
      return "images/default_image.png";
  }
}
