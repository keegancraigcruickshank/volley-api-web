// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file divisions/v1/private/divisions.proto (package divisions.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum divisions.v1.private.SortDirection
 */
export declare enum SortDirection {
  /**
   * @generated from enum value: ASC = 0;
   */
  ASC = 0,

  /**
   * @generated from enum value: DESC = 1;
   */
  DESC = 1,
}

/**
 * @generated from message divisions.v1.private.Bound
 */
export declare class Bound extends Message<Bound> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string day = 2;
   */
  day: string;

  /**
   * @generated from field: int32 lower_bound = 3;
   */
  lowerBound: number;

  /**
   * @generated from field: int32 upper_bound = 4;
   */
  upperBound: number;

  constructor(data?: PartialMessage<Bound>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.Bound";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bound;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bound;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bound;

  static equals(a: Bound | PlainMessage<Bound> | undefined, b: Bound | PlainMessage<Bound> | undefined): boolean;
}

/**
 * @generated from message divisions.v1.private.Division
 */
export declare class Division extends Message<Division> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: repeated divisions.v1.private.Bound bounds = 3;
   */
  bounds: Bound[];

  /**
   * @generated from field: int32 modified = 4;
   */
  modified: number;

  constructor(data?: PartialMessage<Division>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.Division";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Division;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Division;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Division;

  static equals(a: Division | PlainMessage<Division> | undefined, b: Division | PlainMessage<Division> | undefined): boolean;
}

/**
 * @generated from message divisions.v1.private.AddDivisionRequest
 */
export declare class AddDivisionRequest extends Message<AddDivisionRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated divisions.v1.private.Bound bounds = 2;
   */
  bounds: Bound[];

  constructor(data?: PartialMessage<AddDivisionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.AddDivisionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddDivisionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddDivisionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddDivisionRequest;

  static equals(a: AddDivisionRequest | PlainMessage<AddDivisionRequest> | undefined, b: AddDivisionRequest | PlainMessage<AddDivisionRequest> | undefined): boolean;
}

/**
 * @generated from message divisions.v1.private.AddDivisionResponse
 */
export declare class AddDivisionResponse extends Message<AddDivisionResponse> {
  constructor(data?: PartialMessage<AddDivisionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.AddDivisionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddDivisionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddDivisionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddDivisionResponse;

  static equals(a: AddDivisionResponse | PlainMessage<AddDivisionResponse> | undefined, b: AddDivisionResponse | PlainMessage<AddDivisionResponse> | undefined): boolean;
}

/**
 * @generated from message divisions.v1.private.ListDivisionsRequest
 */
export declare class ListDivisionsRequest extends Message<ListDivisionsRequest> {
  /**
   * @generated from field: optional string query = 1;
   */
  query?: string;

  /**
   * @generated from field: optional int32 page = 2;
   */
  page?: number;

  /**
   * @generated from field: optional int32 pageSize = 3;
   */
  pageSize?: number;

  /**
   * @generated from field: optional divisions.v1.private.SortDirection sortDirection = 4;
   */
  sortDirection?: SortDirection;

  constructor(data?: PartialMessage<ListDivisionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.ListDivisionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDivisionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDivisionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDivisionsRequest;

  static equals(a: ListDivisionsRequest | PlainMessage<ListDivisionsRequest> | undefined, b: ListDivisionsRequest | PlainMessage<ListDivisionsRequest> | undefined): boolean;
}

/**
 * @generated from message divisions.v1.private.ListDivisionsResponse
 */
export declare class ListDivisionsResponse extends Message<ListDivisionsResponse> {
  /**
   * @generated from field: repeated divisions.v1.private.Division divisions = 1;
   */
  divisions: Division[];

  /**
   * @generated from field: int32 totalCount = 2;
   */
  totalCount: number;

  constructor(data?: PartialMessage<ListDivisionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.ListDivisionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDivisionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDivisionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDivisionsResponse;

  static equals(a: ListDivisionsResponse | PlainMessage<ListDivisionsResponse> | undefined, b: ListDivisionsResponse | PlainMessage<ListDivisionsResponse> | undefined): boolean;
}

/**
 * @generated from message divisions.v1.private.RemoveDivisionsRequest
 */
export declare class RemoveDivisionsRequest extends Message<RemoveDivisionsRequest> {
  /**
   * @generated from field: repeated string ids = 1;
   */
  ids: string[];

  constructor(data?: PartialMessage<RemoveDivisionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.RemoveDivisionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveDivisionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveDivisionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveDivisionsRequest;

  static equals(a: RemoveDivisionsRequest | PlainMessage<RemoveDivisionsRequest> | undefined, b: RemoveDivisionsRequest | PlainMessage<RemoveDivisionsRequest> | undefined): boolean;
}

/**
 * @generated from message divisions.v1.private.RemoveDivisionsResponse
 */
export declare class RemoveDivisionsResponse extends Message<RemoveDivisionsResponse> {
  constructor(data?: PartialMessage<RemoveDivisionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "divisions.v1.private.RemoveDivisionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveDivisionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveDivisionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveDivisionsResponse;

  static equals(a: RemoveDivisionsResponse | PlainMessage<RemoveDivisionsResponse> | undefined, b: RemoveDivisionsResponse | PlainMessage<RemoveDivisionsResponse> | undefined): boolean;
}

