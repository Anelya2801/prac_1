
const Dragon = {
  hp: 2000,
  defense: 120,
  str: 150,
  weapon: 0,
  showHP() {
    console.log(`Дракон: ${this.hp} HP`);
  },
  HPofCharacter: HPofCharacter                      
};
  
const Hero = {
  hp: 1000,
  defense: 100,
  str: 120,
  weapon: 250,
  shield: 150,
  showHP() {
    console.log(`Герой: ${this.hp} HP`);
  },
  HPofCharacter: HPofCharacter 
};

function HPofCharacter (amount) {
  this.hp += amount;
  if (this.hp < 0) {
    this.hp = 0;
  }
}

function heroAttackDragon() {
  const hitAttackAmunt = Math.random();
  
  if (hitAttackAmunt <= 0.75) {
    const damage = Hero.str + Hero.weapon - Dragon.defense;
    Dragon.HPofCharacter(-damage);
    console.log(`Герой наносит дракону урон в размере ${damage}!`);
    Dragon.showHP();
  } else {
    console.log('Герой упустил Дракона!');
  }
  
  if (Dragon.hp <= 0) {
    console.log('Герой побеждает Дракона!');
    return true;
  }
  console.log('=======================================================')
  return false; 
}
  

while (true) {
  if (heroAttackDragon()) {
    break; 
  }
}
    