// @generated by protoc-gen-es v0.2.0 with parameter "target=js+dts"
// @generated from file users/v1/private/users.proto (package users.v1.private, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.private.GetMeRequest
 */
export declare class GetMeRequest extends Message<GetMeRequest> {
  constructor(data?: PartialMessage<GetMeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetMeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeRequest;

  static equals(a: GetMeRequest | PlainMessage<GetMeRequest> | undefined, b: GetMeRequest | PlainMessage<GetMeRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetMeResponse
 */
export declare class GetMeResponse extends Message<GetMeResponse> {
  /**
   * @generated from field: string first_name = 1;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 2;
   */
  lastName: string;

  /**
   * @generated from field: string email = 3;
   */
  email: string;

  constructor(data?: PartialMessage<GetMeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetMeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeResponse;

  static equals(a: GetMeResponse | PlainMessage<GetMeResponse> | undefined, b: GetMeResponse | PlainMessage<GetMeResponse> | undefined): boolean;
}

