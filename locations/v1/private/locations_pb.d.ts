// @generated by protoc-gen-es v0.2.0 with parameter "target=js+dts"
// @generated from file locations/v1/private/locations.proto (package locations.v1.private, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message locations.v1.private.SiteLocation
 */
export declare class SiteLocation extends Message<SiteLocation> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  constructor(data?: PartialMessage<SiteLocation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.SiteLocation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SiteLocation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SiteLocation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SiteLocation;

  static equals(a: SiteLocation | PlainMessage<SiteLocation> | undefined, b: SiteLocation | PlainMessage<SiteLocation> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.RemoveLocationsRequest
 */
export declare class RemoveLocationsRequest extends Message<RemoveLocationsRequest> {
  /**
   * @generated from field: repeated string locationIds = 1;
   */
  locationIds: string[];

  constructor(data?: PartialMessage<RemoveLocationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.RemoveLocationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLocationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLocationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLocationsRequest;

  static equals(a: RemoveLocationsRequest | PlainMessage<RemoveLocationsRequest> | undefined, b: RemoveLocationsRequest | PlainMessage<RemoveLocationsRequest> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.RemoveLocationsResponse
 */
export declare class RemoveLocationsResponse extends Message<RemoveLocationsResponse> {
  constructor(data?: PartialMessage<RemoveLocationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.RemoveLocationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveLocationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveLocationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveLocationsResponse;

  static equals(a: RemoveLocationsResponse | PlainMessage<RemoveLocationsResponse> | undefined, b: RemoveLocationsResponse | PlainMessage<RemoveLocationsResponse> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.AddLocationRequest
 */
export declare class AddLocationRequest extends Message<AddLocationRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<AddLocationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.AddLocationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLocationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLocationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLocationRequest;

  static equals(a: AddLocationRequest | PlainMessage<AddLocationRequest> | undefined, b: AddLocationRequest | PlainMessage<AddLocationRequest> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.AddLocationResponse
 */
export declare class AddLocationResponse extends Message<AddLocationResponse> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  constructor(data?: PartialMessage<AddLocationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.AddLocationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddLocationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddLocationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddLocationResponse;

  static equals(a: AddLocationResponse | PlainMessage<AddLocationResponse> | undefined, b: AddLocationResponse | PlainMessage<AddLocationResponse> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.ListLocationsRequest
 */
export declare class ListLocationsRequest extends Message<ListLocationsRequest> {
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
   * @generated from field: optional string sortDirection = 4;
   */
  sortDirection?: string;

  constructor(data?: PartialMessage<ListLocationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.ListLocationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLocationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLocationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLocationsRequest;

  static equals(a: ListLocationsRequest | PlainMessage<ListLocationsRequest> | undefined, b: ListLocationsRequest | PlainMessage<ListLocationsRequest> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.ListLocationsResponse
 */
export declare class ListLocationsResponse extends Message<ListLocationsResponse> {
  /**
   * @generated from field: repeated locations.v1.private.SiteLocation locations = 1;
   */
  locations: SiteLocation[];

  /**
   * @generated from field: int32 totalCount = 2;
   */
  totalCount: number;

  constructor(data?: PartialMessage<ListLocationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.ListLocationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLocationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLocationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLocationsResponse;

  static equals(a: ListLocationsResponse | PlainMessage<ListLocationsResponse> | undefined, b: ListLocationsResponse | PlainMessage<ListLocationsResponse> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.ModifyLocationRequest
 */
export declare class ModifyLocationRequest extends Message<ModifyLocationRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  constructor(data?: PartialMessage<ModifyLocationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.ModifyLocationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyLocationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyLocationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyLocationRequest;

  static equals(a: ModifyLocationRequest | PlainMessage<ModifyLocationRequest> | undefined, b: ModifyLocationRequest | PlainMessage<ModifyLocationRequest> | undefined): boolean;
}

/**
 * @generated from message locations.v1.private.ModifyLocationResponse
 */
export declare class ModifyLocationResponse extends Message<ModifyLocationResponse> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  constructor(data?: PartialMessage<ModifyLocationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "locations.v1.private.ModifyLocationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyLocationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyLocationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyLocationResponse;

  static equals(a: ModifyLocationResponse | PlainMessage<ModifyLocationResponse> | undefined, b: ModifyLocationResponse | PlainMessage<ModifyLocationResponse> | undefined): boolean;
}

