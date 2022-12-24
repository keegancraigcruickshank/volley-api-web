// @generated by protoc-gen-es v0.2.0 with parameter "target=js+dts"
// @generated from file users/v1/users.proto (package users.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.GetMeRequest
 */
export declare class GetMeRequest extends Message<GetMeRequest> {
  constructor(data?: PartialMessage<GetMeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.GetMeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeRequest;

  static equals(a: GetMeRequest | PlainMessage<GetMeRequest> | undefined, b: GetMeRequest | PlainMessage<GetMeRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.GetMeResponse
 */
export declare class GetMeResponse extends Message<GetMeResponse> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * @generated from field: string first_name = 3;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 4;
   */
  lastName: string;

  /**
   * @generated from field: string email = 5;
   */
  email: string;

  /**
   * @generated from field: string nickname = 6;
   */
  nickname: string;

  constructor(data?: PartialMessage<GetMeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.GetMeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeResponse;

  static equals(a: GetMeResponse | PlainMessage<GetMeResponse> | undefined, b: GetMeResponse | PlainMessage<GetMeResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.CreateOrgRequest
 */
export declare class CreateOrgRequest extends Message<CreateOrgRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string address = 2;
   */
  address: string;

  /**
   * @generated from field: string phone = 3;
   */
  phone: string;

  constructor(data?: PartialMessage<CreateOrgRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.CreateOrgRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrgRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrgRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrgRequest;

  static equals(a: CreateOrgRequest | PlainMessage<CreateOrgRequest> | undefined, b: CreateOrgRequest | PlainMessage<CreateOrgRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.CreateOrgResponse
 */
export declare class CreateOrgResponse extends Message<CreateOrgResponse> {
  /**
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * @generated from field: string phone = 4;
   */
  phone: string;

  constructor(data?: PartialMessage<CreateOrgResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.CreateOrgResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrgResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrgResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrgResponse;

  static equals(a: CreateOrgResponse | PlainMessage<CreateOrgResponse> | undefined, b: CreateOrgResponse | PlainMessage<CreateOrgResponse> | undefined): boolean;
}

