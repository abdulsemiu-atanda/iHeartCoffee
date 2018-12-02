import {affordability} from "../../src/util/helpers"

describe("Helper Functions", () => {
  describe.only("affordability", () => {
    it("returns correct value when input has a length of one", () => {
      expect(affordability("$$")).toEqual("Bargain")
    })
  })
})
