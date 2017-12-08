const expect = chai.expect


describe("reset", function () {
  it("reset returns false", function () {
     expect(reset()).to.equal(false);
  })
})


describe("toggleStartStop", function () {
  it("start stop returns string", function () {
     expect(toggleStartStop()).to.equal('button');
  })
})



describe("textColorChange", function () {
  it("returns string color to string", function () {
     expect(textColorChange(colors)).to.deep.equal('color: #F00');
  })
})
