import {assert} from "chai";

describe("Array", () => {
  describe("#indexOf()", () => {
    it("a dummy test as a first CI/CD configuration: -1 is expected when searching for non-existent element",
      () => {
        const res = [1, 2, 3].indexOf(4);
          assert(res === -1);
      });
  });
});
