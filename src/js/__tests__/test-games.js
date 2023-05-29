import Magician from "../Magician";
import Daemon from "../Daemon";

describe("Magician and Daemon", () => {
  let magician;
  let daemon;

  beforeEach(() => {
    magician = new Magician("Merlin");
    daemon = new Daemon("Gorrg");
  });

  describe("stoned", () => {
    test("should be stoned if set to true", () => {
      magician.stoned = true;
      daemon.stoned = true;
      expect(magician.stoned).toBe(true);
      expect(daemon.stoned).toBe(true);
    });

    test("should not be stoned if set to false", () => {
      magician.stoned = false;
      daemon.stoned = false;
      expect(magician.stoned).toBe(false);
      expect(daemon.stoned).toBe(false);
    });

    test("should convert non-boolean value to boolean", () => {
      magician.stoned = 1;
      daemon.stoned = "";
      expect(magician.stoned).toBe(true);
      expect(daemon.stoned).toBe(false);
    });
  });

  describe("distance", () => {
    test("should set distance with valid values", () => {
      magician.distance = 3;
      daemon.distance = 4;
      expect(magician.distance).toBe(3);
      expect(daemon.distance).toBe(4);
    });

    test("should set minimum distance to 1", () => {
      magician.distance = -1;
      daemon.distance = -2;
      expect(magician.distance).toBe(1);
      expect(daemon.distance).toBe(1);
    });

    test("should set maximum distance to 5", () => {
      magician.distance = 6;
      daemon.distance = 7;
      expect(magician.distance).toBe(5);
      expect(daemon.distance).toBe(5);
    });
  });
});
