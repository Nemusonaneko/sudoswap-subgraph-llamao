import {
  DeltaUpdate,
  FeeUpdate,
  SpotPriceUpdate,
} from "../generated/templates/LSSVMPairEnumerableETH/LSSVMPairEnumerableETH";
import { NewPair, NFT, Pair, UpdateEvent } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function updatePair(pair: Pair): void {
  if (pair.nft && pair.bondingCurve && pair.delta && pair.fee && pair.spot)
    return;

  const newPair = NewPair.load(pair.initialAttributes)!;
  pair.nft = newPair.nft;
  pair.bondingCurve = newPair.initialBondingCurve;
  pair.delta = newPair.initialDelta;
  pair.fee = newPair.initialFee;
  pair.spot = newPair.initialSpot;
  pair.sellPrice = calculateSellPrice(pair);

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
  updateEvent.newSellPrice = pair.sellPrice!;
  updateEvent.createdBlock = newPair.createdBlock;
  updateEvent.createdTimestamp = newPair.createdTimestamp;

  pair.save();
  nft.save();
  updateEvent.save();
}

export function calculateSellPrice(pair: Pair): BigInt | null {
  const bondingCurve = pair.bondingCurve!.toHexString().toLowerCase();
  /// Exponential
  if (bondingCurve.includes("0x432f962d8209781da23fb37b6b59ee15de7d9841")) {
    // The new spot price would become (S * delta), so selling would also yield (S * delta) ETH.
    const buySpotPrice = pair.spot!.times(pair.delta!);
    // buySpotPrice * (delta^n - 1) / (delta - 1)
    // = buySpotPrice
    let inputValue = buySpotPrice
    // Account for the protocol fee, a flat percentage of the buy amount
    let protocolFee = inputValue.times(BigInt.fromI64(5000000000000000));
    protocolFee = protocolFee.div(BigInt.fromI64(10 ** 18));
    // Account for the trade fee, only for Trade pools
    let tradeFee = inputValue.times(pair.fee!);
    tradeFee = tradeFee.div(BigInt.fromI64(10 ** 18));

    inputValue = inputValue.plus(protocolFee);
    inputValue = inputValue.plus(tradeFee);
    return inputValue;
  }
  /// Linear
  else if (
    bondingCurve.includes("0x5b6ac51d9b1cede0068a1b26533cace807f883ee")
  ) {
    // The new spot price would become (S+delta), so selling would also yield (S+delta) ETH.
    const buySpotPrice = pair.spot!.plus(pair.delta!);
    // This is equal to n*(buy spot price) + (delta)*(n*(n-1))/2
    // = buySpotPrice
    let inputValue = buySpotPrice;
    // Account for the protocol fee, a flat percentage of the buy amount
    let protocolFee = inputValue.times(BigInt.fromI64(5000000000000000));
    protocolFee = protocolFee.div(BigInt.fromI64(10 ** 18));
    // Account for the trade fee, only for Trade pools
    let tradeFee = inputValue.times(pair.fee!);
    tradeFee = tradeFee.div(BigInt.fromI64(10 ** 18));

    inputValue = inputValue.plus(protocolFee);
    inputValue = inputValue.plus(tradeFee);
    return inputValue;
  }
  /// XYK
  else if (
    bondingCurve.includes("0x7942e264e21c5e6cbba45fe50785a15d3beb1da0")
  ) {
    // get the pair's virtual nft and eth/erc20 reserves
    let tokenBalance = pair.spot!;
    let nftBalance = pair.delta!;
    // calculate the amount to send in
    // (n * tokenBalance) / (nftBalance - n)
    // = tokenBalance/nftBalance
    nftBalance = nftBalance.minus(BigInt.fromI32(1));
    let inputValueWithoutFee = tokenBalance.div(nftBalance);
    // Account for the protocol fee, a flat percentage of the buy amount
    let protocolFee = inputValueWithoutFee.times(BigInt.fromI64(5000000000000000));
    protocolFee = protocolFee.div(BigInt.fromI64(10 ** 18));
    // Account for the trade fee, only for Trade pools
    let tradeFee = inputValueWithoutFee.times(pair.fee!);
    tradeFee = tradeFee.div(BigInt.fromI64(10 ** 18));

    inputValueWithoutFee = inputValueWithoutFee.plus(protocolFee);
    inputValueWithoutFee = inputValueWithoutFee.plus(tradeFee);
    return inputValueWithoutFee;
  }

  return null;
}

export function handleDeltaUpdate(event: DeltaUpdate): void {
  let pair = Pair.load(event.address.toHexString())!;
  updatePair(pair);
  pair.delta = event.params.newDelta;
  pair.sellPrice = calculateSellPrice(pair);

  let updateEvent = new UpdateEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}`
  );
  updateEvent.pair = pair.id;
  updateEvent.txHash = event.transaction.hash;
  updateEvent.event = "DeltaUpdate";
  updateEvent.newDelta = pair.delta!;
  updateEvent.newFee = pair.fee!;
  updateEvent.newSpot = pair.spot!;
  updateEvent.newSellPrice = pair.sellPrice!;
  updateEvent.createdBlock = event.block.number;
  updateEvent.createdTimestamp = event.block.timestamp;

  pair.save();
  updateEvent.save();
}

export function handleFeeUpdate(event: FeeUpdate): void {
  let pair = Pair.load(event.address.toHexString())!;
  updatePair(pair);
  pair.fee = event.params.newFee;
  pair.sellPrice = calculateSellPrice(pair);
  let updateEvent = new UpdateEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}`
  );
  updateEvent.pair = pair.id;
  updateEvent.txHash = event.transaction.hash;
  updateEvent.event = "FeeUpdate";
  updateEvent.newDelta = pair.delta!;
  updateEvent.newFee = pair.fee!;
  updateEvent.newSpot = pair.spot!;
  updateEvent.newSellPrice = pair.sellPrice!;
  updateEvent.createdBlock = event.block.number;
  updateEvent.createdTimestamp = event.block.timestamp;

  pair.save();
  updateEvent.save();
}

export function handleSpotPriceUpdate(event: SpotPriceUpdate): void {
  let pair = Pair.load(event.address.toHexString())!;
  updatePair(pair);
  pair.spot = event.params.newSpotPrice;
  pair.sellPrice = calculateSellPrice(pair);

  let updateEvent = new UpdateEvent(
    `${event.address.toHexString()}-${event.transaction.hash.toHexString()}`
  );
  updateEvent.pair = pair.id;
  updateEvent.txHash = event.transaction.hash;
  updateEvent.event = "SpotPriceUpdate";
  updateEvent.newDelta = pair.delta!;
  updateEvent.newFee = pair.fee!;
  updateEvent.newSpot = pair.spot!;
  updateEvent.newSellPrice = pair.sellPrice!;
  updateEvent.createdBlock = event.block.number;
  updateEvent.createdTimestamp = event.block.timestamp;

  pair.save();
  updateEvent.save();
}
