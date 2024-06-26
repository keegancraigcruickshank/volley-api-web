// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draw.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FlexibleRoundRobinDraw } from "./flexible-round-robin/flexible-round-robin_pb.js";

/**
 * @generated from enum draw.v1.private.DrawType
 */
export declare enum DrawType {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: FLEXIBLE_ROUND_ROBIN = 1;
   */
  FLEXIBLE_ROUND_ROBIN = 1,
}

/**
 * @generated from message draw.v1.private.Draw
 */
export declare class Draw extends Message<Draw> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: google.protobuf.Timestamp modified = 3;
   */
  modified?: Timestamp;

  /**
   * @generated from field: int32 type = 4;
   */
  type: number;

  constructor(data?: PartialMessage<Draw>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.Draw";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Draw;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Draw;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Draw;

  static equals(a: Draw | PlainMessage<Draw> | undefined, b: Draw | PlainMessage<Draw> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.GetDrawRequest
 */
export declare class GetDrawRequest extends Message<GetDrawRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<GetDrawRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.GetDrawRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDrawRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDrawRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDrawRequest;

  static equals(a: GetDrawRequest | PlainMessage<GetDrawRequest> | undefined, b: GetDrawRequest | PlainMessage<GetDrawRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.GetDrawResponse
 */
export declare class GetDrawResponse extends Message<GetDrawResponse> {
  /**
   * @generated from oneof draw.v1.private.GetDrawResponse.draw
   */
  draw: {
    /**
     * @generated from field: draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw flexible_round_robin_draw = 1;
     */
    value: FlexibleRoundRobinDraw;
    case: "flexibleRoundRobinDraw";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GetDrawResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.GetDrawResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDrawResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDrawResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDrawResponse;

  static equals(a: GetDrawResponse | PlainMessage<GetDrawResponse> | undefined, b: GetDrawResponse | PlainMessage<GetDrawResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.DeleteDrawRequest
 */
export declare class DeleteDrawRequest extends Message<DeleteDrawRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<DeleteDrawRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.DeleteDrawRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDrawRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDrawRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDrawRequest;

  static equals(a: DeleteDrawRequest | PlainMessage<DeleteDrawRequest> | undefined, b: DeleteDrawRequest | PlainMessage<DeleteDrawRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.DeleteDrawResponse
 */
export declare class DeleteDrawResponse extends Message<DeleteDrawResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<DeleteDrawResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.DeleteDrawResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDrawResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDrawResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDrawResponse;

  static equals(a: DeleteDrawResponse | PlainMessage<DeleteDrawResponse> | undefined, b: DeleteDrawResponse | PlainMessage<DeleteDrawResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.ListDrawsRequest
 */
export declare class ListDrawsRequest extends Message<ListDrawsRequest> {
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

  constructor(data?: PartialMessage<ListDrawsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.ListDrawsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDrawsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDrawsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDrawsRequest;

  static equals(a: ListDrawsRequest | PlainMessage<ListDrawsRequest> | undefined, b: ListDrawsRequest | PlainMessage<ListDrawsRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.ListDrawsResponse
 */
export declare class ListDrawsResponse extends Message<ListDrawsResponse> {
  /**
   * @generated from field: repeated draw.v1.private.Draw draw = 1;
   */
  draw: Draw[];

  /**
   * @generated from field: int32 totalCount = 2;
   */
  totalCount: number;

  constructor(data?: PartialMessage<ListDrawsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.ListDrawsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDrawsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDrawsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDrawsResponse;

  static equals(a: ListDrawsResponse | PlainMessage<ListDrawsResponse> | undefined, b: ListDrawsResponse | PlainMessage<ListDrawsResponse> | undefined): boolean;
}

