import sinon from "sinon"

import {asyncActionNames, asyncActions, asyncRequest} from "../../src/util/asyncUtils"

describe("asyncUtils", () => {
  describe.only("asyncActionNames", () => {
    it("returns correct values", () => {
      expect(asyncActionNames("TEST").loading).toEqual("TEST_LOADING")
      expect(asyncActionNames("TEST").failure).toEqual("TEST_FAILURE")
      expect(asyncActionNames("TEST").success).toEqual("TEST_SUCCESS")
    })
  })

  describe.only("asyncActions", () => {

    describe.only("loadingAction", () => {
      const loadingAction = asyncActions("FILE").loading(true)

      expect(loadingAction.type).toEqual("FILE_LOADING")
      expect(loadingAction.data).toBeTruthy()
    })

    describe.only("successAction", () => {
      const successAction = asyncActions("FILE").success({fullname: "Jane Doe"})

      expect(successAction.type).toEqual("FILE_SUCCESS")
      expect(successAction.data.fullname).toEqual("Jane Doe")
    })

    describe.only("failureAction", () => {
      it("returns correct values", () => {
        const failureAction = asyncActions("FILE").failure(true, {message: "Oops!", status: true})

        expect(failureAction.type).toEqual("FILE_FAILURE")
        expect(failureAction.data.error.message).toEqual("Oops!")
        expect(failureAction.data.status).toBeTruthy()
      })
    })
  })

  describe.only("asyncRequest", () => {
    it("dipatches correct actions", async () => {
      const dispatchStub = sinon.stub()
      await asyncRequest("FILE", {filename: "doe.doc"}, 500)(dispatchStub)
      const dispatchArgs = dispatchStub.args

      expect(dispatchStub.called).toBeTruthy()
      expect(dispatchArgs).toHaveLength(3)
      expect(dispatchArgs[0][0].type).toEqual("FILE_LOADING")
      expect(dispatchArgs[2][0].type).toEqual("FILE_SUCCESS")
      expect(dispatchArgs[2][0].data.filename).toEqual("doe.doc")
    })
  })
})
