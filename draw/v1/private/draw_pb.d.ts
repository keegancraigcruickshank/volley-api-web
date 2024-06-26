// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draw.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

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
 * @generated from enum draw.v1.private.Frequency
 */
export declare enum Frequency {
  /**
   * @generated from enum value: FREQUENCY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: FREQUENCY_ASAP = 1;
   */
  ASAP = 1,

  /**
   * @generated from enum value: FREQUENCY_DAILY = 2;
   */
  DAILY = 2,

  /**
   * @generated from enum value: FREQUENCY_WEEKLY = 3;
   */
  WEEKLY = 3,

  /**
   * @generated from enum value: FREQUENCY_MONTHLY = 4;
   */
  MONTHLY = 4,

  /**
   * @generated from enum value: FREQUENCY_YEARLY = 5;
   */
  YEARLY = 5,
}

/**
 * @generated from enum draw.v1.private.RoundStatus
 */
export declare enum RoundStatus {
  /**
   * @generated from enum value: ROUND_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ROUND_STATUS_PREVIEW = 1;
   */
  PREVIEW = 1,

  /**
   * @generated from enum value: ROUND_STATUS_DRAFT = 2;
   */
  DRAFT = 2,

  /**
   * @generated from enum value: ROUND_STATUS_PUBLISHED = 3;
   */
  PUBLISHED = 3,
}

/**
 * @generated from message draw.v1.private.Points
 */
export declare class Points extends Message<Points> {
  /**
   * @generated from field: int32 win = 1;
   */
  win: number;

  /**
   * @generated from field: int32 tie = 2;
   */
  tie: number;

  /**
   * @generated from field: int32 loss = 3;
   */
  loss: number;

  /**
   * @generated from field: int32 forfeit = 4;
   */
  forfeit: number;

  constructor(data?: PartialMessage<Points>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.Points";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Points;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Points;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Points;

  static equals(a: Points | PlainMessage<Points> | undefined, b: Points | PlainMessage<Points> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.FlexibleRoundRobinDraw
 */
export declare class FlexibleRoundRobinDraw extends Message<FlexibleRoundRobinDraw> {
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
   * @generated from field: string division_id = 4;
   */
  divisionId: string;

  constructor(data?: PartialMessage<FlexibleRoundRobinDraw>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.FlexibleRoundRobinDraw";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlexibleRoundRobinDraw;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDraw;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDraw;

  static equals(a: FlexibleRoundRobinDraw | PlainMessage<FlexibleRoundRobinDraw> | undefined, b: FlexibleRoundRobinDraw | PlainMessage<FlexibleRoundRobinDraw> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.FlexibleRoundRobinMatch
 */
export declare class FlexibleRoundRobinMatch extends Message<FlexibleRoundRobinMatch> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string draw_id = 2;
   */
  drawId: string;

  /**
   * @generated from field: int32 round = 3;
   */
  round: number;

  /**
   * @generated from field: string team_one = 4;
   */
  teamOne: string;

  /**
   * @generated from field: string team_two = 5;
   */
  teamTwo: string;

  /**
   * @generated from field: int32 team_one_score = 6;
   */
  teamOneScore: number;

  /**
   * @generated from field: int32 team_two_score = 7;
   */
  teamTwoScore: number;

  /**
   * @generated from field: google.protobuf.Timestamp modified = 8;
   */
  modified?: Timestamp;

  constructor(data?: PartialMessage<FlexibleRoundRobinMatch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.FlexibleRoundRobinMatch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlexibleRoundRobinMatch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlexibleRoundRobinMatch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlexibleRoundRobinMatch;

  static equals(a: FlexibleRoundRobinMatch | PlainMessage<FlexibleRoundRobinMatch> | undefined, b: FlexibleRoundRobinMatch | PlainMessage<FlexibleRoundRobinMatch> | undefined): boolean;
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
     * @generated from field: draw.v1.private.FlexibleRoundRobinDraw flexible_round_robin_draw = 1;
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
 * @generated from message draw.v1.private.CreateFlexibleRoundRobinDrawRequest
 */
export declare class CreateFlexibleRoundRobinDrawRequest extends Message<CreateFlexibleRoundRobinDrawRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string division_id = 2;
   */
  divisionId: string;

  /**
   * @generated from field: optional google.protobuf.Timestamp start_date = 3;
   */
  startDate?: Timestamp;

  /**
   * @generated from field: draw.v1.private.Frequency frequency = 4;
   */
  frequency: Frequency;

  /**
   * @generated from field: draw.v1.private.Points points = 5;
   */
  points?: Points;

  /**
   * @generated from field: int32 rounds = 6;
   */
  rounds: number;

  constructor(data?: PartialMessage<CreateFlexibleRoundRobinDrawRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.CreateFlexibleRoundRobinDrawRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlexibleRoundRobinDrawRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawRequest;

  static equals(a: CreateFlexibleRoundRobinDrawRequest | PlainMessage<CreateFlexibleRoundRobinDrawRequest> | undefined, b: CreateFlexibleRoundRobinDrawRequest | PlainMessage<CreateFlexibleRoundRobinDrawRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.CreateFlexibleRoundRobinDrawResponse
 */
export declare class CreateFlexibleRoundRobinDrawResponse extends Message<CreateFlexibleRoundRobinDrawResponse> {
  /**
   * @generated from field: draw.v1.private.FlexibleRoundRobinDraw draw = 1;
   */
  draw?: FlexibleRoundRobinDraw;

  constructor(data?: PartialMessage<CreateFlexibleRoundRobinDrawResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.CreateFlexibleRoundRobinDrawResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlexibleRoundRobinDrawResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawResponse;

  static equals(a: CreateFlexibleRoundRobinDrawResponse | PlainMessage<CreateFlexibleRoundRobinDrawResponse> | undefined, b: CreateFlexibleRoundRobinDrawResponse | PlainMessage<CreateFlexibleRoundRobinDrawResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.UpdateFlexibleRoundRobinDrawRequest
 */
export declare class UpdateFlexibleRoundRobinDrawRequest extends Message<UpdateFlexibleRoundRobinDrawRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: repeated string teams = 3;
   */
  teams: string[];

  constructor(data?: PartialMessage<UpdateFlexibleRoundRobinDrawRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.UpdateFlexibleRoundRobinDrawRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFlexibleRoundRobinDrawRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawRequest;

  static equals(a: UpdateFlexibleRoundRobinDrawRequest | PlainMessage<UpdateFlexibleRoundRobinDrawRequest> | undefined, b: UpdateFlexibleRoundRobinDrawRequest | PlainMessage<UpdateFlexibleRoundRobinDrawRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.UpdateFlexibleRoundRobinDrawResponse
 */
export declare class UpdateFlexibleRoundRobinDrawResponse extends Message<UpdateFlexibleRoundRobinDrawResponse> {
  /**
   * @generated from field: draw.v1.private.FlexibleRoundRobinDraw draw = 1;
   */
  draw?: FlexibleRoundRobinDraw;

  constructor(data?: PartialMessage<UpdateFlexibleRoundRobinDrawResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.UpdateFlexibleRoundRobinDrawResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFlexibleRoundRobinDrawResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawResponse;

  static equals(a: UpdateFlexibleRoundRobinDrawResponse | PlainMessage<UpdateFlexibleRoundRobinDrawResponse> | undefined, b: UpdateFlexibleRoundRobinDrawResponse | PlainMessage<UpdateFlexibleRoundRobinDrawResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.GetFlexibleRoundRobinDrawRoundRequest
 */
export declare class GetFlexibleRoundRobinDrawRoundRequest extends Message<GetFlexibleRoundRobinDrawRoundRequest> {
  /**
   * @generated from field: string draw_id = 1;
   */
  drawId: string;

  /**
   * @generated from field: int32 round = 2;
   */
  round: number;

  constructor(data?: PartialMessage<GetFlexibleRoundRobinDrawRoundRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.GetFlexibleRoundRobinDrawRoundRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawRoundRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundRequest;

  static equals(a: GetFlexibleRoundRobinDrawRoundRequest | PlainMessage<GetFlexibleRoundRobinDrawRoundRequest> | undefined, b: GetFlexibleRoundRobinDrawRoundRequest | PlainMessage<GetFlexibleRoundRobinDrawRoundRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.GetFlexibleRoundRobinDrawRoundResponse
 */
export declare class GetFlexibleRoundRobinDrawRoundResponse extends Message<GetFlexibleRoundRobinDrawRoundResponse> {
  /**
   * @generated from field: string draw_id = 1;
   */
  drawId: string;

  /**
   * @generated from field: int32 round = 2;
   */
  round: number;

  /**
   * @generated from field: draw.v1.private.RoundStatus status = 3;
   */
  status: RoundStatus;

  /**
   * @generated from field: repeated draw.v1.private.FlexibleRoundRobinMatch matches = 4;
   */
  matches: FlexibleRoundRobinMatch[];

  constructor(data?: PartialMessage<GetFlexibleRoundRobinDrawRoundResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.GetFlexibleRoundRobinDrawRoundResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawRoundResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundResponse;

  static equals(a: GetFlexibleRoundRobinDrawRoundResponse | PlainMessage<GetFlexibleRoundRobinDrawRoundResponse> | undefined, b: GetFlexibleRoundRobinDrawRoundResponse | PlainMessage<GetFlexibleRoundRobinDrawRoundResponse> | undefined): boolean;
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

