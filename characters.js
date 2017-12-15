/* Created by paulcharles on 12/14/17. */
// Character Creation
let name = prompt("What is the name of your character?");
let gender = prompt("What gender is your character?");
let race = prompt("What race is your character? (Human, Elf, Dwarf, Halfling)");
let characterRole = prompt("What is your character? (Warrior, Ranger, Rogue");

const mainHero = new Hero(name, 10, gender, race, characterRole);

checkRace(mainHero, mainHero.race);
checkClass(mainHero, mainHero.characterRole);

console.log(mainHero);


const hero = {
  name:           "Manly Hero",
  equippedWeapon: {
    maxDamage: 0,
    minDamage: 0,
  },
  skills:         {
    attack:     0,
    persuasion: 0,
    sneak:      0,
  },
  equippedArmor:  {
    name:        "",
    attackBarrierBonus: 0,
  },
  maxHealth:      0,
  currentHealth:  0,
  barriers:       {
    attack:   0,
    sneak:    0,
    persuade: 0,
  }
};

const checkClass = (hero, characterClass) => {
  let lowerCharacterClass = characterClass.toLowerCase();

  switch(lowerCharacterClass) {
    case "warrior":
      hero.skills.attack += 3;
      hero.skills.sneak--;
      break;
    case "ranger":
      hero.skills.attack++;
      hero.skills.persuasion++;
      hero.skills.sneak++;
      break;
    case "rogue":
      hero.skills.sneak += 3;
      hero.skills.attack--;
      break;
    default:
      characterClass = prompt("${characterClass} is not a valid option. Please choose one of these values. Warrior," +
        " Ranger or Rouge");
      checkClass(hero, characterClass);
      break;
  }
};
