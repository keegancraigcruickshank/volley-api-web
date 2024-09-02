// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file draw/v1/private/flexible-round-robin/flexible-round-robin.proto (package draw.v1.private.draw.flexibleRoundRobin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum draw.v1.private.draw.flexibleRoundRobin.Frequency
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
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.Points
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
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.Points";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Points;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Points;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Points;

  static equals(a: Points | PlainMessage<Points> | undefined, b: Points | PlainMessage<Points> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw
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

  /**
   * @generated from field: google.protobuf.Timestamp start_date = 5;
   */
  startDate?: Timestamp;

  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.Frequency frequency = 6;
   */
  frequency: Frequency;

  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.Points points = 7;
   */
  points?: Points;

  /**
   * @generated from field: int32 rounds = 8;
   */
  rounds: number;

  /**
   * @generated from field: int32 runtime_length = 9;
   */
  runtimeLength: number;

  /**
   * @generated from field: int32 intermission_length = 10;
   */
  intermissionLength: number;

  /**
   * @generated from field: int32 break_length = 11;
   */
  breakLength: number;

  constructor(data?: PartialMessage<FlexibleRoundRobinDraw>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlexibleRoundRobinDraw;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDraw;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDraw;

  static equals(a: FlexibleRoundRobinDraw | PlainMessage<FlexibleRoundRobinDraw> | undefined, b: FlexibleRoundRobinDraw | PlainMessage<FlexibleRoundRobinDraw> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinMatch
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
   * @generated from field: string playing_space_id = 9;
   */
  playingSpaceId: string;

  /**
   * @generated from field: google.protobuf.Timestamp modified = 10;
   */
  modified?: Timestamp;

  constructor(data?: PartialMessage<FlexibleRoundRobinMatch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinMatch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlexibleRoundRobinMatch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlexibleRoundRobinMatch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlexibleRoundRobinMatch;

  static equals(a: FlexibleRoundRobinMatch | PlainMessage<FlexibleRoundRobinMatch> | undefined, b: FlexibleRoundRobinMatch | PlainMessage<FlexibleRoundRobinMatch> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawRequest
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
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.Frequency frequency = 4;
   */
  frequency: Frequency;

  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.Points points = 5;
   */
  points?: Points;

  /**
   * @generated from field: int32 rounds = 6;
   */
  rounds: number;

  constructor(data?: PartialMessage<CreateFlexibleRoundRobinDrawRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlexibleRoundRobinDrawRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawRequest;

  static equals(a: CreateFlexibleRoundRobinDrawRequest | PlainMessage<CreateFlexibleRoundRobinDrawRequest> | undefined, b: CreateFlexibleRoundRobinDrawRequest | PlainMessage<CreateFlexibleRoundRobinDrawRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawResponse
 */
export declare class CreateFlexibleRoundRobinDrawResponse extends Message<CreateFlexibleRoundRobinDrawResponse> {
  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw draw = 1;
   */
  draw?: FlexibleRoundRobinDraw;

  constructor(data?: PartialMessage<CreateFlexibleRoundRobinDrawResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlexibleRoundRobinDrawResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlexibleRoundRobinDrawResponse;

  static equals(a: CreateFlexibleRoundRobinDrawResponse | PlainMessage<CreateFlexibleRoundRobinDrawResponse> | undefined, b: CreateFlexibleRoundRobinDrawResponse | PlainMessage<CreateFlexibleRoundRobinDrawResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawRequest
 */
export declare class UpdateFlexibleRoundRobinDrawRequest extends Message<UpdateFlexibleRoundRobinDrawRequest> {
  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw draw = 1;
   */
  draw?: FlexibleRoundRobinDraw;

  constructor(data?: PartialMessage<UpdateFlexibleRoundRobinDrawRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFlexibleRoundRobinDrawRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawRequest;

  static equals(a: UpdateFlexibleRoundRobinDrawRequest | PlainMessage<UpdateFlexibleRoundRobinDrawRequest> | undefined, b: UpdateFlexibleRoundRobinDrawRequest | PlainMessage<UpdateFlexibleRoundRobinDrawRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawResponse
 */
export declare class UpdateFlexibleRoundRobinDrawResponse extends Message<UpdateFlexibleRoundRobinDrawResponse> {
  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw draw = 1;
   */
  draw?: FlexibleRoundRobinDraw;

  constructor(data?: PartialMessage<UpdateFlexibleRoundRobinDrawResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFlexibleRoundRobinDrawResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFlexibleRoundRobinDrawResponse;

  static equals(a: UpdateFlexibleRoundRobinDrawResponse | PlainMessage<UpdateFlexibleRoundRobinDrawResponse> | undefined, b: UpdateFlexibleRoundRobinDrawResponse | PlainMessage<UpdateFlexibleRoundRobinDrawResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRequest
 */
export declare class GetFlexibleRoundRobinDrawRequest extends Message<GetFlexibleRoundRobinDrawRequest> {
  /**
   * @generated from field: string draw_id = 1;
   */
  drawId: string;

  constructor(data?: PartialMessage<GetFlexibleRoundRobinDrawRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRequest;

  static equals(a: GetFlexibleRoundRobinDrawRequest | PlainMessage<GetFlexibleRoundRobinDrawRequest> | undefined, b: GetFlexibleRoundRobinDrawRequest | PlainMessage<GetFlexibleRoundRobinDrawRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawResponse
 */
export declare class GetFlexibleRoundRobinDrawResponse extends Message<GetFlexibleRoundRobinDrawResponse> {
  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw draw = 1;
   */
  draw?: FlexibleRoundRobinDraw;

  constructor(data?: PartialMessage<GetFlexibleRoundRobinDrawResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawResponse;

  static equals(a: GetFlexibleRoundRobinDrawResponse | PlainMessage<GetFlexibleRoundRobinDrawResponse> | undefined, b: GetFlexibleRoundRobinDrawResponse | PlainMessage<GetFlexibleRoundRobinDrawResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundRequest
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
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawRoundRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundRequest;

  static equals(a: GetFlexibleRoundRobinDrawRoundRequest | PlainMessage<GetFlexibleRoundRobinDrawRoundRequest> | undefined, b: GetFlexibleRoundRobinDrawRoundRequest | PlainMessage<GetFlexibleRoundRobinDrawRoundRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDrawRoundMetadata
 */
export declare class FlexibleRoundRobinDrawRoundMetadata extends Message<FlexibleRoundRobinDrawRoundMetadata> {
  /**
   * @generated from field: string draw_id = 1;
   */
  drawId: string;

  /**
   * @generated from field: int32 round = 2;
   */
  round: number;

  /**
   * @generated from field: google.protobuf.Timestamp round_date = 3;
   */
  roundDate?: Timestamp;

  constructor(data?: PartialMessage<FlexibleRoundRobinDrawRoundMetadata>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDrawRoundMetadata";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlexibleRoundRobinDrawRoundMetadata;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDrawRoundMetadata;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDrawRoundMetadata;

  static equals(a: FlexibleRoundRobinDrawRoundMetadata | PlainMessage<FlexibleRoundRobinDrawRoundMetadata> | undefined, b: FlexibleRoundRobinDrawRoundMetadata | PlainMessage<FlexibleRoundRobinDrawRoundMetadata> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundResponse
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
   * @generated from field: repeated draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinMatch matches = 3;
   */
  matches: FlexibleRoundRobinMatch[];

  /**
   * @generated from field: draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDrawRoundMetadata metadata = 4;
   */
  metadata?: FlexibleRoundRobinDrawRoundMetadata;

  constructor(data?: PartialMessage<GetFlexibleRoundRobinDrawRoundResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawRoundResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawRoundResponse;

  static equals(a: GetFlexibleRoundRobinDrawRoundResponse | PlainMessage<GetFlexibleRoundRobinDrawRoundResponse> | undefined, b: GetFlexibleRoundRobinDrawRoundResponse | PlainMessage<GetFlexibleRoundRobinDrawRoundResponse> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDrawLeaderboardTeam
 */
export declare class FlexibleRoundRobinDrawLeaderboardTeam extends Message<FlexibleRoundRobinDrawLeaderboardTeam> {
  /**
   * @generated from field: string team_id = 1;
   */
  teamId: string;

  /**
   * @generated from field: string team_name = 2;
   */
  teamName: string;

  /**
   * @generated from field: int32 wins = 3;
   */
  wins: number;

  /**
   * @generated from field: int32 ties = 4;
   */
  ties: number;

  /**
   * @generated from field: int32 losses = 5;
   */
  losses: number;

  /**
   * @generated from field: int32 forfeits = 6;
   */
  forfeits: number;

  /**
   * @generated from field: int32 points = 7;
   */
  points: number;

  /**
   * @generated from field: int32 differential = 8;
   */
  differential: number;

  /**
   * @generated from field: int32 placement = 9;
   */
  placement: number;

  constructor(data?: PartialMessage<FlexibleRoundRobinDrawLeaderboardTeam>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDrawLeaderboardTeam";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlexibleRoundRobinDrawLeaderboardTeam;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDrawLeaderboardTeam;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlexibleRoundRobinDrawLeaderboardTeam;

  static equals(a: FlexibleRoundRobinDrawLeaderboardTeam | PlainMessage<FlexibleRoundRobinDrawLeaderboardTeam> | undefined, b: FlexibleRoundRobinDrawLeaderboardTeam | PlainMessage<FlexibleRoundRobinDrawLeaderboardTeam> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawLeaderboardRequest
 */
export declare class GetFlexibleRoundRobinDrawLeaderboardRequest extends Message<GetFlexibleRoundRobinDrawLeaderboardRequest> {
  /**
   * @generated from field: string draw_id = 1;
   */
  drawId: string;

  constructor(data?: PartialMessage<GetFlexibleRoundRobinDrawLeaderboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawLeaderboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawLeaderboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawLeaderboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawLeaderboardRequest;

  static equals(a: GetFlexibleRoundRobinDrawLeaderboardRequest | PlainMessage<GetFlexibleRoundRobinDrawLeaderboardRequest> | undefined, b: GetFlexibleRoundRobinDrawLeaderboardRequest | PlainMessage<GetFlexibleRoundRobinDrawLeaderboardRequest> | undefined): boolean;
}

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawLeaderboardResponse
 */
export declare class GetFlexibleRoundRobinDrawLeaderboardResponse extends Message<GetFlexibleRoundRobinDrawLeaderboardResponse> {
  /**
   * @generated from field: string draw_id = 1;
   */
  drawId: string;

  /**
   * @generated from field: repeated draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDrawLeaderboardTeam teams = 2;
   */
  teams: FlexibleRoundRobinDrawLeaderboardTeam[];

  constructor(data?: PartialMessage<GetFlexibleRoundRobinDrawLeaderboardResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawLeaderboardResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlexibleRoundRobinDrawLeaderboardResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawLeaderboardResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlexibleRoundRobinDrawLeaderboardResponse;

  static equals(a: GetFlexibleRoundRobinDrawLeaderboardResponse | PlainMessage<GetFlexibleRoundRobinDrawLeaderboardResponse> | undefined, b: GetFlexibleRoundRobinDrawLeaderboardResponse | PlainMessage<GetFlexibleRoundRobinDrawLeaderboardResponse> | undefined): boolean;
}

