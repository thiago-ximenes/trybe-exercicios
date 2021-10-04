const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragon) =>
  Math.floor(Math.random() * (dragon.strength - 15) + 15);

const warriorDamage = (warrior) =>
  Math.floor(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
      warrior.strength
  );

const mageDamage = (mage) => {
  const damage = Math.floor(
    Math.random() * mage.intelligence + mage.intelligence
  );
  if (mage.mana >= 15) {
  mage.mana -= 15 
  return { damage, remainingMana: mage.mana }
  } else {
    return { damage: 'Não possui mana suficiente', remainingMana: mage.mana };}
};

mageDamage(mage);
mageDamage(mage);
mageDamage(mage);
mageDamage(mage);
mageDamage(mage);
mageDamage(mage);
mageDamage(mage);
mageDamage(mage);
console.log(mageDamage(mage))
console.log(mage.mana)