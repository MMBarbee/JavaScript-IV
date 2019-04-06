/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor (attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
  }

  class CharacterStats extends GameObject{
    constructor (stats){
        super(stats);
        this.healthPoints = stats.healthPoints;
        this.name = stats.name;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }

  }

  class Humanoid extends CharacterStats {
    constructor (about){
        super(about);
        this.team = about.team;
        this.weapons = about.weapons;
        this.language = about.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
  }
