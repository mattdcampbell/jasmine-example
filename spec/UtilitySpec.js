describe("utility functions", function() {
  describe("fullName()", function() {
    it("concatenates two name parts with a space", function() {
      expect(fullName("Billy", "Bob")).toEqual("Billy Bob");
    });
  });
});

describe("ageInYears()", () => {
  it("returns the age from the birthday", () => {
    expect(ageInYears("1980-05-17")).toEqual(37);
  })
});
