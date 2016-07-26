class Spaceship {
  constructor(input) {
    this.id = input.id;
    this.name = input.name;
    this.phasers = input.phasers;
    this.phasersCharge = 'uncharged';
    this.shields = input.shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = true;
    Store.data.spaceships.push(this);
  }
}