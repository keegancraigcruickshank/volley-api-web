// @generated by protoc-gen-es v0.2.0 with parameter "target=js+dts"
// @generated from file teams/v1/private/teams.proto (package teams.v1.private, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message teams.v1.private.Team
 */
export declare class Team extends Message<Team> {
  /**
   * @generated from field: string organisation = 1;
   */
  organisation: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  constructor(data?: PartialMessage<Team>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.Team";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Team;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Team;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Team;

  static equals(a: Team | PlainMessage<Team> | undefined, b: Team | PlainMessage<Team> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.CreateTeamRequest
 */
export declare class CreateTeamRequest extends Message<CreateTeamRequest> {
  /**
   * @generated from field: teams.v1.private.Team team = 1;
   */
  team?: Team;

  constructor(data?: PartialMessage<CreateTeamRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.CreateTeamRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTeamRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTeamRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTeamRequest;

  static equals(a: CreateTeamRequest | PlainMessage<CreateTeamRequest> | undefined, b: CreateTeamRequest | PlainMessage<CreateTeamRequest> | undefined): boolean;
}

/**
 * @generated from message teams.v1.private.CreateTeamResponse
 */
export declare class CreateTeamResponse extends Message<CreateTeamResponse> {
  /**
   * @generated from field: teams.v1.private.Team team = 1;
   */
  team?: Team;

  constructor(data?: PartialMessage<CreateTeamResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "teams.v1.private.CreateTeamResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTeamResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTeamResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTeamResponse;

  static equals(a: CreateTeamResponse | PlainMessage<CreateTeamResponse> | undefined, b: CreateTeamResponse | PlainMessage<CreateTeamResponse> | undefined): boolean;
}
