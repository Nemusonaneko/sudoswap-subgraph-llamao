// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BondingCurveStatusUpdate extends ethereum.Event {
  get params(): BondingCurveStatusUpdate__Params {
    return new BondingCurveStatusUpdate__Params(this);
  }
}

export class BondingCurveStatusUpdate__Params {
  _event: BondingCurveStatusUpdate;

  constructor(event: BondingCurveStatusUpdate) {
    this._event = event;
  }

  get bondingCurve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isAllowed(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class CallTargetStatusUpdate extends ethereum.Event {
  get params(): CallTargetStatusUpdate__Params {
    return new CallTargetStatusUpdate__Params(this);
  }
}

export class CallTargetStatusUpdate__Params {
  _event: CallTargetStatusUpdate;

  constructor(event: CallTargetStatusUpdate) {
    this._event = event;
  }

  get target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isAllowed(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class NFTDeposit extends ethereum.Event {
  get params(): NFTDeposit__Params {
    return new NFTDeposit__Params(this);
  }
}

export class NFTDeposit__Params {
  _event: NFTDeposit;

  constructor(event: NFTDeposit) {
    this._event = event;
  }

  get poolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewPair extends ethereum.Event {
  get params(): NewPair__Params {
    return new NewPair__Params(this);
  }
}

export class NewPair__Params {
  _event: NewPair;

  constructor(event: NewPair) {
    this._event = event;
  }

  get poolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProtocolFeeMultiplierUpdate extends ethereum.Event {
  get params(): ProtocolFeeMultiplierUpdate__Params {
    return new ProtocolFeeMultiplierUpdate__Params(this);
  }
}

export class ProtocolFeeMultiplierUpdate__Params {
  _event: ProtocolFeeMultiplierUpdate;

  constructor(event: ProtocolFeeMultiplierUpdate) {
    this._event = event;
  }

  get newMultiplier(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProtocolFeeRecipientUpdate extends ethereum.Event {
  get params(): ProtocolFeeRecipientUpdate__Params {
    return new ProtocolFeeRecipientUpdate__Params(this);
  }
}

export class ProtocolFeeRecipientUpdate__Params {
  _event: ProtocolFeeRecipientUpdate;

  constructor(event: ProtocolFeeRecipientUpdate) {
    this._event = event;
  }

  get recipientAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RouterStatusUpdate extends ethereum.Event {
  get params(): RouterStatusUpdate__Params {
    return new RouterStatusUpdate__Params(this);
  }
}

export class RouterStatusUpdate__Params {
  _event: RouterStatusUpdate;

  constructor(event: RouterStatusUpdate) {
    this._event = event;
  }

  get router(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isAllowed(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class TokenDeposit extends ethereum.Event {
  get params(): TokenDeposit__Params {
    return new TokenDeposit__Params(this);
  }
}

export class TokenDeposit__Params {
  _event: TokenDeposit;

  constructor(event: TokenDeposit) {
    this._event = event;
  }

  get poolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LSSVMPairFactory__createPairERC20InputParamsStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get nft(): Address {
    return this[1].toAddress();
  }

  get bondingCurve(): Address {
    return this[2].toAddress();
  }

  get assetRecipient(): Address {
    return this[3].toAddress();
  }

  get poolType(): i32 {
    return this[4].toI32();
  }

  get delta(): BigInt {
    return this[5].toBigInt();
  }

  get fee(): BigInt {
    return this[6].toBigInt();
  }

  get spotPrice(): BigInt {
    return this[7].toBigInt();
  }

  get initialNFTIDs(): Array<BigInt> {
    return this[8].toBigIntArray();
  }

  get initialTokenBalance(): BigInt {
    return this[9].toBigInt();
  }
}

export class LSSVMPairFactory__routerStatusResult {
  value0: boolean;
  value1: boolean;

  constructor(value0: boolean, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getAllowed(): boolean {
    return this.value0;
  }

  getWasEverAllowed(): boolean {
    return this.value1;
  }
}

export class LSSVMPairFactory extends ethereum.SmartContract {
  static bind(address: Address): LSSVMPairFactory {
    return new LSSVMPairFactory("LSSVMPairFactory", address);
  }

  bondingCurveAllowed(param0: Address): boolean {
    let result = super.call(
      "bondingCurveAllowed",
      "bondingCurveAllowed(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_bondingCurveAllowed(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "bondingCurveAllowed",
      "bondingCurveAllowed(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  callAllowed(param0: Address): boolean {
    let result = super.call("callAllowed", "callAllowed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_callAllowed(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("callAllowed", "callAllowed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createPairERC20(
    params: LSSVMPairFactory__createPairERC20InputParamsStruct
  ): Address {
    let result = super.call(
      "createPairERC20",
      "createPairERC20((address,address,address,address,uint8,uint128,uint96,uint128,uint256[],uint256)):(address)",
      [ethereum.Value.fromTuple(params)]
    );

    return result[0].toAddress();
  }

  try_createPairERC20(
    params: LSSVMPairFactory__createPairERC20InputParamsStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createPairERC20",
      "createPairERC20((address,address,address,address,uint8,uint128,uint96,uint128,uint256[],uint256)):(address)",
      [ethereum.Value.fromTuple(params)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  enumerableERC20Template(): Address {
    let result = super.call(
      "enumerableERC20Template",
      "enumerableERC20Template():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_enumerableERC20Template(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "enumerableERC20Template",
      "enumerableERC20Template():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  enumerableETHTemplate(): Address {
    let result = super.call(
      "enumerableETHTemplate",
      "enumerableETHTemplate():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_enumerableETHTemplate(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "enumerableETHTemplate",
      "enumerableETHTemplate():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPair(potentialPair: Address, variant: i32): boolean {
    let result = super.call("isPair", "isPair(address,uint8):(bool)", [
      ethereum.Value.fromAddress(potentialPair),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(variant))
    ]);

    return result[0].toBoolean();
  }

  try_isPair(
    potentialPair: Address,
    variant: i32
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPair", "isPair(address,uint8):(bool)", [
      ethereum.Value.fromAddress(potentialPair),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(variant))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  missingEnumerableERC20Template(): Address {
    let result = super.call(
      "missingEnumerableERC20Template",
      "missingEnumerableERC20Template():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_missingEnumerableERC20Template(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "missingEnumerableERC20Template",
      "missingEnumerableERC20Template():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  missingEnumerableETHTemplate(): Address {
    let result = super.call(
      "missingEnumerableETHTemplate",
      "missingEnumerableETHTemplate():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_missingEnumerableETHTemplate(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "missingEnumerableETHTemplate",
      "missingEnumerableETHTemplate():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  protocolFeeMultiplier(): BigInt {
    let result = super.call(
      "protocolFeeMultiplier",
      "protocolFeeMultiplier():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_protocolFeeMultiplier(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "protocolFeeMultiplier",
      "protocolFeeMultiplier():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  protocolFeeRecipient(): Address {
    let result = super.call(
      "protocolFeeRecipient",
      "protocolFeeRecipient():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_protocolFeeRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "protocolFeeRecipient",
      "protocolFeeRecipient():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  routerStatus(param0: Address): LSSVMPairFactory__routerStatusResult {
    let result = super.call(
      "routerStatus",
      "routerStatus(address):(bool,bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new LSSVMPairFactory__routerStatusResult(
      result[0].toBoolean(),
      result[1].toBoolean()
    );
  }

  try_routerStatus(
    param0: Address
  ): ethereum.CallResult<LSSVMPairFactory__routerStatusResult> {
    let result = super.tryCall(
      "routerStatus",
      "routerStatus(address):(bool,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LSSVMPairFactory__routerStatusResult(
        value[0].toBoolean(),
        value[1].toBoolean()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _enumerableETHTemplate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _missingEnumerableETHTemplate(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _enumerableERC20Template(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _missingEnumerableERC20Template(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _protocolFeeRecipient(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _protocolFeeMultiplier(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeProtocolFeeMultiplierCall extends ethereum.Call {
  get inputs(): ChangeProtocolFeeMultiplierCall__Inputs {
    return new ChangeProtocolFeeMultiplierCall__Inputs(this);
  }

  get outputs(): ChangeProtocolFeeMultiplierCall__Outputs {
    return new ChangeProtocolFeeMultiplierCall__Outputs(this);
  }
}

export class ChangeProtocolFeeMultiplierCall__Inputs {
  _call: ChangeProtocolFeeMultiplierCall;

  constructor(call: ChangeProtocolFeeMultiplierCall) {
    this._call = call;
  }

  get _protocolFeeMultiplier(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeProtocolFeeMultiplierCall__Outputs {
  _call: ChangeProtocolFeeMultiplierCall;

  constructor(call: ChangeProtocolFeeMultiplierCall) {
    this._call = call;
  }
}

export class ChangeProtocolFeeRecipientCall extends ethereum.Call {
  get inputs(): ChangeProtocolFeeRecipientCall__Inputs {
    return new ChangeProtocolFeeRecipientCall__Inputs(this);
  }

  get outputs(): ChangeProtocolFeeRecipientCall__Outputs {
    return new ChangeProtocolFeeRecipientCall__Outputs(this);
  }
}

export class ChangeProtocolFeeRecipientCall__Inputs {
  _call: ChangeProtocolFeeRecipientCall;

  constructor(call: ChangeProtocolFeeRecipientCall) {
    this._call = call;
  }

  get _protocolFeeRecipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeProtocolFeeRecipientCall__Outputs {
  _call: ChangeProtocolFeeRecipientCall;

  constructor(call: ChangeProtocolFeeRecipientCall) {
    this._call = call;
  }
}

export class CreatePairERC20Call extends ethereum.Call {
  get inputs(): CreatePairERC20Call__Inputs {
    return new CreatePairERC20Call__Inputs(this);
  }

  get outputs(): CreatePairERC20Call__Outputs {
    return new CreatePairERC20Call__Outputs(this);
  }
}

export class CreatePairERC20Call__Inputs {
  _call: CreatePairERC20Call;

  constructor(call: CreatePairERC20Call) {
    this._call = call;
  }

  get params(): CreatePairERC20CallParamsStruct {
    return changetype<CreatePairERC20CallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CreatePairERC20Call__Outputs {
  _call: CreatePairERC20Call;

  constructor(call: CreatePairERC20Call) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreatePairERC20CallParamsStruct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get nft(): Address {
    return this[1].toAddress();
  }

  get bondingCurve(): Address {
    return this[2].toAddress();
  }

  get assetRecipient(): Address {
    return this[3].toAddress();
  }

  get poolType(): i32 {
    return this[4].toI32();
  }

  get delta(): BigInt {
    return this[5].toBigInt();
  }

  get fee(): BigInt {
    return this[6].toBigInt();
  }

  get spotPrice(): BigInt {
    return this[7].toBigInt();
  }

  get initialNFTIDs(): Array<BigInt> {
    return this[8].toBigIntArray();
  }

  get initialTokenBalance(): BigInt {
    return this[9].toBigInt();
  }
}

export class CreatePairETHCall extends ethereum.Call {
  get inputs(): CreatePairETHCall__Inputs {
    return new CreatePairETHCall__Inputs(this);
  }

  get outputs(): CreatePairETHCall__Outputs {
    return new CreatePairETHCall__Outputs(this);
  }
}

export class CreatePairETHCall__Inputs {
  _call: CreatePairETHCall;

  constructor(call: CreatePairETHCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bondingCurve(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _assetRecipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _poolType(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _delta(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _spotPrice(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _initialNFTIDs(): Array<BigInt> {
    return this._call.inputValues[7].value.toBigIntArray();
  }
}

export class CreatePairETHCall__Outputs {
  _call: CreatePairETHCall;

  constructor(call: CreatePairETHCall) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DepositERC20Call extends ethereum.Call {
  get inputs(): DepositERC20Call__Inputs {
    return new DepositERC20Call__Inputs(this);
  }

  get outputs(): DepositERC20Call__Outputs {
    return new DepositERC20Call__Outputs(this);
  }
}

export class DepositERC20Call__Inputs {
  _call: DepositERC20Call;

  constructor(call: DepositERC20Call) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositERC20Call__Outputs {
  _call: DepositERC20Call;

  constructor(call: DepositERC20Call) {
    this._call = call;
  }
}

export class DepositNFTsCall extends ethereum.Call {
  get inputs(): DepositNFTsCall__Inputs {
    return new DepositNFTsCall__Inputs(this);
  }

  get outputs(): DepositNFTsCall__Outputs {
    return new DepositNFTsCall__Outputs(this);
  }
}

export class DepositNFTsCall__Inputs {
  _call: DepositNFTsCall;

  constructor(call: DepositNFTsCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get recipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DepositNFTsCall__Outputs {
  _call: DepositNFTsCall;

  constructor(call: DepositNFTsCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBondingCurveAllowedCall extends ethereum.Call {
  get inputs(): SetBondingCurveAllowedCall__Inputs {
    return new SetBondingCurveAllowedCall__Inputs(this);
  }

  get outputs(): SetBondingCurveAllowedCall__Outputs {
    return new SetBondingCurveAllowedCall__Outputs(this);
  }
}

export class SetBondingCurveAllowedCall__Inputs {
  _call: SetBondingCurveAllowedCall;

  constructor(call: SetBondingCurveAllowedCall) {
    this._call = call;
  }

  get bondingCurve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isAllowed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetBondingCurveAllowedCall__Outputs {
  _call: SetBondingCurveAllowedCall;

  constructor(call: SetBondingCurveAllowedCall) {
    this._call = call;
  }
}

export class SetCallAllowedCall extends ethereum.Call {
  get inputs(): SetCallAllowedCall__Inputs {
    return new SetCallAllowedCall__Inputs(this);
  }

  get outputs(): SetCallAllowedCall__Outputs {
    return new SetCallAllowedCall__Outputs(this);
  }
}

export class SetCallAllowedCall__Inputs {
  _call: SetCallAllowedCall;

  constructor(call: SetCallAllowedCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isAllowed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetCallAllowedCall__Outputs {
  _call: SetCallAllowedCall;

  constructor(call: SetCallAllowedCall) {
    this._call = call;
  }
}

export class SetRouterAllowedCall extends ethereum.Call {
  get inputs(): SetRouterAllowedCall__Inputs {
    return new SetRouterAllowedCall__Inputs(this);
  }

  get outputs(): SetRouterAllowedCall__Outputs {
    return new SetRouterAllowedCall__Outputs(this);
  }
}

export class SetRouterAllowedCall__Inputs {
  _call: SetRouterAllowedCall;

  constructor(call: SetRouterAllowedCall) {
    this._call = call;
  }

  get _router(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isAllowed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetRouterAllowedCall__Outputs {
  _call: SetRouterAllowedCall;

  constructor(call: SetRouterAllowedCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawERC20ProtocolFeesCall extends ethereum.Call {
  get inputs(): WithdrawERC20ProtocolFeesCall__Inputs {
    return new WithdrawERC20ProtocolFeesCall__Inputs(this);
  }

  get outputs(): WithdrawERC20ProtocolFeesCall__Outputs {
    return new WithdrawERC20ProtocolFeesCall__Outputs(this);
  }
}

export class WithdrawERC20ProtocolFeesCall__Inputs {
  _call: WithdrawERC20ProtocolFeesCall;

  constructor(call: WithdrawERC20ProtocolFeesCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawERC20ProtocolFeesCall__Outputs {
  _call: WithdrawERC20ProtocolFeesCall;

  constructor(call: WithdrawERC20ProtocolFeesCall) {
    this._call = call;
  }
}

export class WithdrawETHProtocolFeesCall extends ethereum.Call {
  get inputs(): WithdrawETHProtocolFeesCall__Inputs {
    return new WithdrawETHProtocolFeesCall__Inputs(this);
  }

  get outputs(): WithdrawETHProtocolFeesCall__Outputs {
    return new WithdrawETHProtocolFeesCall__Outputs(this);
  }
}

export class WithdrawETHProtocolFeesCall__Inputs {
  _call: WithdrawETHProtocolFeesCall;

  constructor(call: WithdrawETHProtocolFeesCall) {
    this._call = call;
  }
}

export class WithdrawETHProtocolFeesCall__Outputs {
  _call: WithdrawETHProtocolFeesCall;

  constructor(call: WithdrawETHProtocolFeesCall) {
    this._call = call;
  }
}
