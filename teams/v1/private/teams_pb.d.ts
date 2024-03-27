// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file teams/v1/private/teams.proto (package teams.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum teams.v1.private.SortDirection
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
 * @generated from message teams.v1.private.ListedTeam
 */
export declare class ListedTeam extends Message<ListedTeam> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: repeated string players = 3;
   */
  players: string[];

  /**
   * @generated from field: int32 modified = 4;
   */
  modified: number;

  constructor(data?: PartialMessage<ListedTeam>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.ListedTeam";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListedTeam;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListedTeam;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListedTeam;

  static equals(a: ListedTeam | PlainMessage<ListedTeam> | undefined, b: ListedTeam | PlainMessage<ListedTeam> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.AddTeamRequest
 */
export declare class AddTeamRequest extends Message<AddTeamRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated string players = 2;
   */
  players: string[];

  constructor(data?: PartialMessage<AddTeamRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.AddTeamRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddTeamRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddTeamRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddTeamRequest;

  static equals(a: AddTeamRequest | PlainMessage<AddTeamRequest> | undefined, b: AddTeamRequest | PlainMessage<AddTeamRequest> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.AddTeamResponse
 */
export declare class AddTeamResponse extends Message<AddTeamResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: repeated string players = 3;
   */
  players: string[];

  constructor(data?: PartialMessage<AddTeamResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.AddTeamResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddTeamResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddTeamResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddTeamResponse;

  static equals(a: AddTeamResponse | PlainMessage<AddTeamResponse> | undefined, b: AddTeamResponse | PlainMessage<AddTeamResponse> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.ListTeamsRequest
 */
export declare class ListTeamsRequest extends Message<ListTeamsRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * @generated from field: optional int32 page = 2;
   */
  page?: number;

  /**
   * @generated from field: optional int32 pageSize = 3;
   */
  pageSize?: number;

  /**
   * @generated from field: optional teams.v1.private.SortDirection sortDirection = 4;
   */
  sortDirection?: SortDirection;

  constructor(data?: PartialMessage<ListTeamsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.ListTeamsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTeamsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTeamsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTeamsRequest;

  static equals(a: ListTeamsRequest | PlainMessage<ListTeamsRequest> | undefined, b: ListTeamsRequest | PlainMessage<ListTeamsRequest> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.ListTeamsResponse
 */
export declare class ListTeamsResponse extends Message<ListTeamsResponse> {
  /**
   * @generated from field: repeated teams.v1.private.ListedTeam teams = 1;
   */
  teams: ListedTeam[];

  /**
   * @generated from field: int32 totalCount = 2;
   */
  totalCount: number;

  constructor(data?: PartialMessage<ListTeamsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.ListTeamsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTeamsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTeamsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTeamsResponse;

  static equals(a: ListTeamsResponse | PlainMessage<ListTeamsResponse> | undefined, b: ListTeamsResponse | PlainMessage<ListTeamsResponse> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.RemoveTeamsRequest
 */
export declare class RemoveTeamsRequest extends Message<RemoveTeamsRequest> {
  /**
   * @generated from field: repeated string teams = 1;
   */
  teams: string[];

  constructor(data?: PartialMessage<RemoveTeamsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.RemoveTeamsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveTeamsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveTeamsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveTeamsRequest;

  static equals(a: RemoveTeamsRequest | PlainMessage<RemoveTeamsRequest> | undefined, b: RemoveTeamsRequest | PlainMessage<RemoveTeamsRequest> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.RemoveTeamsResponse
 */
export declare class RemoveTeamsResponse extends Message<RemoveTeamsResponse> {
  constructor(data?: PartialMessage<RemoveTeamsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.RemoveTeamsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveTeamsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveTeamsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveTeamsResponse;

  static equals(a: RemoveTeamsResponse | PlainMessage<RemoveTeamsResponse> | undefined, b: RemoveTeamsResponse | PlainMessage<RemoveTeamsResponse> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.UpdateTeamRequest
 */
export declare class UpdateTeamRequest extends Message<UpdateTeamRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * @generated from field: repeated string players = 3;
   */
  players: string[];

  constructor(data?: PartialMessage<UpdateTeamRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.UpdateTeamRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateTeamRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateTeamRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateTeamRequest;

  static equals(a: UpdateTeamRequest | PlainMessage<UpdateTeamRequest> | undefined, b: UpdateTeamRequest | PlainMessage<UpdateTeamRequest> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.UpdateTeamResponse
 */
export declare class UpdateTeamResponse extends Message<UpdateTeamResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: repeated string players = 3;
   */
  players: string[];

  constructor(data?: PartialMessage<UpdateTeamResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.UpdateTeamResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateTeamResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateTeamResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateTeamResponse;

  static equals(a: UpdateTeamResponse | PlainMessage<UpdateTeamResponse> | undefined, b: UpdateTeamResponse | PlainMessage<UpdateTeamResponse> | undefined): boolean;
}

