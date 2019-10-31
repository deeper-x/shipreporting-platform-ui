import assert from "assert";

describe("Array", () => {
	describe("#indexOf()", () => {
		it("a dummy test as a first CI/CD configuration: -1 is expected when searching for non-existent element", function() {
			let expectedStatus = -1;
			assert.equal([1, 2, 3].indexOf(4), expectedStatus);
		});
	});
});