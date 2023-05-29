export default class Daemon {
  constructor(name) {
    this.name = name;
    this._distance = 1;
    this._attack = 100;
    this._stoned = false;
  }

  get attack() {
    let attackPower = this._attack;
    if (this._stoned) {
      attackPower -= Math.log2(this._distance) * 5;
    }
    return Math.round(Math.max(0, attackPower - 10 * (this._distance - 1)));
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = Boolean(value);
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = Math.max(1, Math.min(5, value));
  }
}