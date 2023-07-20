// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file players/v1/private/players.proto (package players.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum players.v1.private.SortDirection
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
 * @generated from message players.v1.private.Address
 */
export declare class Address extends Message<Address> {
  /**
   * @generated from field: optional string unit = 1;
   */
  unit?: string;

  /**
   * @generated from field: optional string house_number = 2;
   */
  houseNumber?: string;

  /**
   * @generated from field: optional string street = 3;
   */
  street?: string;

  /**
   * @generated from field: optional string suburb = 4;
   */
  suburb?: string;

  /**
   * @generated from field: optional string state = 5;
   */
  state?: string;

  /**
   * @generated from field: optional string country = 6;
   */
  country?: string;

  /**
   * @generated from field: optional string zip_postcode = 7;
   */
  zipPostcode?: string;

  constructor(data?: PartialMessage<Address>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.Address";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Address;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Address;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Address;

  static equals(a: Address | PlainMessage<Address> | undefined, b: Address | PlainMessage<Address> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.Contact
 */
export declare class Contact extends Message<Contact> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string first_name = 2;
   */
  firstName: string;

  /**
   * @generated from field: optional string last_name = 3;
   */
  lastName?: string;

  /**
   * @generated from field: optional string email = 4;
   */
  email?: string;

  /**
   * @generated from field: optional string mobile = 5;
   */
  mobile?: string;

  /**
   * @generated from field: optional string dob = 6;
   */
  dob?: string;

  /**
   * @generated from field: optional players.v1.private.Address address = 7;
   */
  address?: Address;

  constructor(data?: PartialMessage<Contact>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.Contact";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Contact;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Contact;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Contact;

  static equals(a: Contact | PlainMessage<Contact> | undefined, b: Contact | PlainMessage<Contact> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.Player
 */
export declare class Player extends Message<Player> {
  /**
   * @generated from field: repeated string teams = 1;
   */
  teams: string[];

  /**
   * @generated from field: players.v1.private.Contact player_details = 2;
   */
  playerDetails?: Contact;

  /**
   * @generated from field: optional players.v1.private.Contact emergency_contact = 3;
   */
  emergencyContact?: Contact;

  /**
   * @generated from field: int32 modified = 4;
   */
  modified: number;

  constructor(data?: PartialMessage<Player>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.Player";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Player;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Player;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Player;

  static equals(a: Player | PlainMessage<Player> | undefined, b: Player | PlainMessage<Player> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.CreatePlayerRequest
 */
export declare class CreatePlayerRequest extends Message<CreatePlayerRequest> {
  /**
   * @generated from field: players.v1.private.Player player = 1;
   */
  player?: Player;

  constructor(data?: PartialMessage<CreatePlayerRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.CreatePlayerRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePlayerRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePlayerRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePlayerRequest;

  static equals(a: CreatePlayerRequest | PlainMessage<CreatePlayerRequest> | undefined, b: CreatePlayerRequest | PlainMessage<CreatePlayerRequest> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.CreatePlayerResponse
 */
export declare class CreatePlayerResponse extends Message<CreatePlayerResponse> {
  constructor(data?: PartialMessage<CreatePlayerResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.CreatePlayerResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePlayerResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePlayerResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePlayerResponse;

  static equals(a: CreatePlayerResponse | PlainMessage<CreatePlayerResponse> | undefined, b: CreatePlayerResponse | PlainMessage<CreatePlayerResponse> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.RemovePlayersRequest
 */
export declare class RemovePlayersRequest extends Message<RemovePlayersRequest> {
  /**
   * @generated from field: repeated string ids = 1;
   */
  ids: string[];

  constructor(data?: PartialMessage<RemovePlayersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.RemovePlayersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemovePlayersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemovePlayersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemovePlayersRequest;

  static equals(a: RemovePlayersRequest | PlainMessage<RemovePlayersRequest> | undefined, b: RemovePlayersRequest | PlainMessage<RemovePlayersRequest> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.RemovePlayersResponse
 */
export declare class RemovePlayersResponse extends Message<RemovePlayersResponse> {
  constructor(data?: PartialMessage<RemovePlayersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.RemovePlayersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemovePlayersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemovePlayersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemovePlayersResponse;

  static equals(a: RemovePlayersResponse | PlainMessage<RemovePlayersResponse> | undefined, b: RemovePlayersResponse | PlainMessage<RemovePlayersResponse> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.ModifyPlayerRequest
 */
export declare class ModifyPlayerRequest extends Message<ModifyPlayerRequest> {
  /**
   * @generated from field: players.v1.private.Player player = 1;
   */
  player?: Player;

  constructor(data?: PartialMessage<ModifyPlayerRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.ModifyPlayerRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyPlayerRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyPlayerRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyPlayerRequest;

  static equals(a: ModifyPlayerRequest | PlainMessage<ModifyPlayerRequest> | undefined, b: ModifyPlayerRequest | PlainMessage<ModifyPlayerRequest> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.ModifyPlayerResponse
 */
export declare class ModifyPlayerResponse extends Message<ModifyPlayerResponse> {
  constructor(data?: PartialMessage<ModifyPlayerResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.ModifyPlayerResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyPlayerResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyPlayerResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyPlayerResponse;

  static equals(a: ModifyPlayerResponse | PlainMessage<ModifyPlayerResponse> | undefined, b: ModifyPlayerResponse | PlainMessage<ModifyPlayerResponse> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.ListPlayersRequest
 */
export declare class ListPlayersRequest extends Message<ListPlayersRequest> {
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
   * @generated from field: optional players.v1.private.SortDirection sortDirection = 4;
   */
  sortDirection?: SortDirection;

  constructor(data?: PartialMessage<ListPlayersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.ListPlayersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPlayersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPlayersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPlayersRequest;

  static equals(a: ListPlayersRequest | PlainMessage<ListPlayersRequest> | undefined, b: ListPlayersRequest | PlainMessage<ListPlayersRequest> | undefined): boolean;
}

/**
 * @generated from message players.v1.private.ListPlayersResponse
 */
export declare class ListPlayersResponse extends Message<ListPlayersResponse> {
  /**
   * @generated from field: repeated players.v1.private.Player players = 1;
   */
  players: Player[];

  /**
   * @generated from field: int32 totalCount = 2;
   */
  totalCount: number;

  constructor(data?: PartialMessage<ListPlayersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "players.v1.private.ListPlayersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPlayersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPlayersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPlayersResponse;

  static equals(a: ListPlayersResponse | PlainMessage<ListPlayersResponse> | undefined, b: ListPlayersResponse | PlainMessage<ListPlayersResponse> | undefined): boolean;
}
