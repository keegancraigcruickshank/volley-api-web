// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file add-ons/v1/private/add_ons.proto (package addons.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum addons.v1.private.AddonType
 */
export declare enum AddonType {
  /**
   * @generated from enum value: ADDON_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ADDON_TYPE_CLOUD_SCORING = 1;
   */
  CLOUD_SCORING = 1,
}

/**
 * @generated from message addons.v1.private.EnableAddonRequest
 */
export declare class EnableAddonRequest extends Message<EnableAddonRequest> {
  /**
   * @generated from field: addons.v1.private.AddonType addon_type = 1;
   */
  addonType: AddonType;

  constructor(data?: PartialMessage<EnableAddonRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "addons.v1.private.EnableAddonRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableAddonRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableAddonRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableAddonRequest;

  static equals(a: EnableAddonRequest | PlainMessage<EnableAddonRequest> | undefined, b: EnableAddonRequest | PlainMessage<EnableAddonRequest> | undefined): boolean;
}

/**
 * @generated from message addons.v1.private.EnableAddonResponse
 */
export declare class EnableAddonResponse extends Message<EnableAddonResponse> {
  constructor(data?: PartialMessage<EnableAddonResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "addons.v1.private.EnableAddonResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableAddonResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableAddonResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableAddonResponse;

  static equals(a: EnableAddonResponse | PlainMessage<EnableAddonResponse> | undefined, b: EnableAddonResponse | PlainMessage<EnableAddonResponse> | undefined): boolean;
}

