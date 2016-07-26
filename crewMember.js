class CrewMember {
  constructor(input) {
    this.id = input.id;
    this.position = input.position;
    this.spaceshipId = null;
    this.currentShip = 'Looking for a Rig';
    Store.data.crewMembers.push(this);
  }

  assignShip(ship) {
    this.spaceshipId = ship.id;
    this.currentShip = ship;
    ship.docked = false;
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.spaceshipId != null) {
      this.currentShip.warpDrive = 'engaged!'
    } else {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.spaceshipId != null) {
      this.currentShip.cloaked = true;
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.spaceshipId != null) {
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return "had no effect";
    }
  }
}