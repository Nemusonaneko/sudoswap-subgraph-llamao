import {
  CreatePairETHCall,
  NewPair as NewPairEvent,
} from "../generated/LSSVMPairFactory/LSSVMPairFactory";
import { LSSVMPairEnumerableETH } from "../generated/templates";
import { NewPair, NFT, Pair } from "../generated/schema";

export function handleCreatePairETH(event: CreatePairETHCall): void {
  let nft = NFT.load(event.inputs._nft.toHexString());
  if (!nft) {
    nft = new NFT(event.inputs._nft.toHexString());
    nft.address = event.inputs._nft;
    nft.pairIds = [];
    nft.createdBlock = event.block.number;
    nft.createdTimestamp = event.block.timestamp;
  }

  let newPair = new NewPair(event.transaction.hash.toHexString());
  newPair.txHash = event.transaction.hash;
  newPair.nft = nft.id;
  newPair.initialBondingCurve = event.inputs._bondingCurve;
  newPair.initialDelta = event.inputs._delta;
  newPair.initialFee = event.inputs._fee;
  newPair.initialSpot = event.inputs._spotPrice;
  newPair.createdBlock = event.block.number;
  newPair.createdTimestamp = event.block.timestamp;

  nft.save();
  newPair.save();
}

export function handleNewPair(event: NewPairEvent): void {
  LSSVMPairEnumerableETH.create(event.params.poolAddress);
  let pair = new Pair(event.params.poolAddress.toHexString());
  pair.address = event.params.poolAddress;
  pair.initialAttributes = event.transaction.hash.toHexString();
  pair.createdBlock = event.block.number;
  pair.createdTimestamp = event.block.timestamp;
  
  pair.save();
}
