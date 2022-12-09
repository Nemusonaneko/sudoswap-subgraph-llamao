import {
  DeltaUpdate,
  FeeUpdate,
  SpotPriceUpdate,
} from "../generated/templates/LSSVMPairEnumerableETH/LSSVMPairEnumerableETH";
import { NewPair, NFT, Pair, UpdateEvent } from "../generated/schema";

export function updatePair(pair: Pair): void {
  if (pair.nft && pair.bondingCurve && pair.delta && pair.fee && pair.spot)
    return;

  const newPair = NewPair.load(pair.initialAttributes)!;
  pair.nft = newPair.nft;
  pair.bondingCurve = newPair.initialBondingCurve;
  pair.delta = newPair.initialDelta;
  pair.fee = newPair.initialFee;
  pair.spot = newPair.initialSpot;

  let nft = NFT.load(pair.nft!)!;
  let newPairIds = nft.pairIds;
  newPairIds.push(pair.address.toHexString());
  nft.pairIds = newPairIds;

  let updateEvent = new UpdateEvent(
    `${pair.address.toHexString()}-${newPair.txHash.toHexString()}`
  );
  updateEvent.pair = pair.id;
  updateEvent.txHash = newPair.txHash;
  updateEvent.event = "UpdatePair";
  updateEvent.newDelta = pair.delta!;
  updateEvent.newFee = pair.fee!;
  updateEvent.newSpot = pair.spot!;
  updateEvent.createdBlock = newPair.createdBlock;
  updateEvent.createdTimestamp = newPair.createdTimestamp;

  pair.save();
  nft.save();
  updateEvent.save();
}

export function handleDeltaUpdate(event: DeltaUpdate): void {
  let pair = Pair.load(event.address.toHexString())!;
  updatePair(pair);
  pair.delta = event.params.newDelta;

  let updateEvent = new UpdateEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}`
  );
  updateEvent.pair = pair.id;
  updateEvent.txHash = event.transaction.hash;
  updateEvent.event = "DeltaUpdate";
  updateEvent.newDelta = pair.delta!;
  updateEvent.newFee = pair.fee!;
  updateEvent.newSpot = pair.spot!;
  updateEvent.createdBlock = event.block.number;
  updateEvent.createdTimestamp = event.block.timestamp;

  pair.save();
  updateEvent.save();
}

export function handleFeeUpdate(event: FeeUpdate): void {
  let pair = Pair.load(event.address.toHexString())!;
  updatePair(pair);
  pair.fee = event.params.newFee;

  let updateEvent = new UpdateEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}`
  );
  updateEvent.pair = pair.id;
  updateEvent.txHash = event.transaction.hash;
  updateEvent.event = "FeeUpdate";
  updateEvent.newDelta = pair.delta!;
  updateEvent.newFee = pair.fee!;
  updateEvent.newSpot = pair.spot!;
  updateEvent.createdBlock = event.block.number;
  updateEvent.createdTimestamp = event.block.timestamp;

  pair.save();
  updateEvent.save();
}

export function handleSpotPriceUpdate(event: SpotPriceUpdate): void {
  let pair = Pair.load(event.address.toHexString())!;
  updatePair(pair);
  pair.spot = event.params.newSpotPrice;

  let updateEvent = new UpdateEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}`
  );
  updateEvent.pair = pair.id;
  updateEvent.txHash = event.transaction.hash;
  updateEvent.event = "SpotPriceUpdate";
  updateEvent.newDelta = pair.delta!;
  updateEvent.newFee = pair.fee!;
  updateEvent.newSpot = pair.spot!;
  updateEvent.createdBlock = event.block.number;
  updateEvent.createdTimestamp = event.block.timestamp;

  pair.save();
  updateEvent.save();
}
