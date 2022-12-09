import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BondingCurveStatusUpdate } from "../generated/schema"
import { BondingCurveStatusUpdate as BondingCurveStatusUpdateEvent } from "../generated/LSSVMPairFactory/LSSVMPairFactory"
import { handleBondingCurveStatusUpdate } from "../src/lssvm-pair-factory"
import { createBondingCurveStatusUpdateEvent } from "./lssvm-pair-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let bondingCurve = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let isAllowed = "boolean Not implemented"
    let newBondingCurveStatusUpdateEvent = createBondingCurveStatusUpdateEvent(
      bondingCurve,
      isAllowed
    )
    handleBondingCurveStatusUpdate(newBondingCurveStatusUpdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BondingCurveStatusUpdate created and stored", () => {
    assert.entityCount("BondingCurveStatusUpdate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BondingCurveStatusUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bondingCurve",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BondingCurveStatusUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isAllowed",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
