import {
  BondingCurveStatusUpdate as BondingCurveStatusUpdateEvent,
  CallTargetStatusUpdate as CallTargetStatusUpdateEvent,
  NFTDeposit as NFTDepositEvent,
  NewPair as NewPairEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProtocolFeeMultiplierUpdate as ProtocolFeeMultiplierUpdateEvent,
  ProtocolFeeRecipientUpdate as ProtocolFeeRecipientUpdateEvent,
  RouterStatusUpdate as RouterStatusUpdateEvent,
  TokenDeposit as TokenDepositEvent
} from "../generated/LSSVMPairFactory/LSSVMPairFactory"
import {
  BondingCurveStatusUpdate,
  CallTargetStatusUpdate,
  NFTDeposit,
  NewPair,
  OwnershipTransferred,
  ProtocolFeeMultiplierUpdate,
  ProtocolFeeRecipientUpdate,
  RouterStatusUpdate,
  TokenDeposit
} from "../generated/schema"

export function handleBondingCurveStatusUpdate(
  event: BondingCurveStatusUpdateEvent
): void {
  let entity = new BondingCurveStatusUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bondingCurve = event.params.bondingCurve
  entity.isAllowed = event.params.isAllowed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCallTargetStatusUpdate(
  event: CallTargetStatusUpdateEvent
): void {
  let entity = new CallTargetStatusUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.target = event.params.target
  entity.isAllowed = event.params.isAllowed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTDeposit(event: NFTDepositEvent): void {
  let entity = new NFTDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolAddress = event.params.poolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewPair(event: NewPairEvent): void {
  let entity = new NewPair(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolAddress = event.params.poolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolFeeMultiplierUpdate(
  event: ProtocolFeeMultiplierUpdateEvent
): void {
  let entity = new ProtocolFeeMultiplierUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMultiplier = event.params.newMultiplier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolFeeRecipientUpdate(
  event: ProtocolFeeRecipientUpdateEvent
): void {
  let entity = new ProtocolFeeRecipientUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipientAddress = event.params.recipientAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRouterStatusUpdate(event: RouterStatusUpdateEvent): void {
  let entity = new RouterStatusUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.router = event.params.router
  entity.isAllowed = event.params.isAllowed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenDeposit(event: TokenDepositEvent): void {
  let entity = new TokenDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolAddress = event.params.poolAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
