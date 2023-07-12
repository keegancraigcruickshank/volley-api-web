// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file users/v1/private/users.proto (package users.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.private.User
 */
export declare class User extends Message<User> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string first_name = 2;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 3;
   */
  lastName: string;

  /**
   * @generated from field: string email = 4;
   */
  email: string;

  /**
   * @generated from field: repeated string org_ids = 5;
   */
  orgIds: string[];

  /**
   * @generated from field: int32 last_logout = 6;
   */
  lastLogout: number;

  /**
   * @generated from field: int32 created_at = 7;
   */
  createdAt: number;

  /**
   * @generated from field: int32 updated_at = 8;
   */
  updatedAt: number;

  /**
   * @generated from field: string default_org = 9;
   */
  defaultOrg: string;

  /**
   * @generated from field: string active_org = 10;
   */
  activeOrg: string;

  /**
   * @generated from field: string active_org_name = 11;
   */
  activeOrgName: string;

  /**
   * @generated from field: bool verified = 12;
   */
  verified: boolean;

  constructor(data?: PartialMessage<User>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.User";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.ApiToken
 */
export declare class ApiToken extends Message<ApiToken> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: int32 last_modified = 3;
   */
  lastModified: number;

  constructor(data?: PartialMessage<ApiToken>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.ApiToken";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApiToken;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApiToken;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApiToken;

  static equals(a: ApiToken | PlainMessage<ApiToken> | undefined, b: ApiToken | PlainMessage<ApiToken> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.SetDefaultOrgRequest
 */
export declare class SetDefaultOrgRequest extends Message<SetDefaultOrgRequest> {
  /**
   * @generated from field: string default_org = 1;
   */
  defaultOrg: string;

  constructor(data?: PartialMessage<SetDefaultOrgRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.SetDefaultOrgRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetDefaultOrgRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetDefaultOrgRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetDefaultOrgRequest;

  static equals(a: SetDefaultOrgRequest | PlainMessage<SetDefaultOrgRequest> | undefined, b: SetDefaultOrgRequest | PlainMessage<SetDefaultOrgRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.SetDefaultOrgResponse
 */
export declare class SetDefaultOrgResponse extends Message<SetDefaultOrgResponse> {
  constructor(data?: PartialMessage<SetDefaultOrgResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.SetDefaultOrgResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetDefaultOrgResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetDefaultOrgResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetDefaultOrgResponse;

  static equals(a: SetDefaultOrgResponse | PlainMessage<SetDefaultOrgResponse> | undefined, b: SetDefaultOrgResponse | PlainMessage<SetDefaultOrgResponse> | undefined): boolean;
}

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
   * @generated from field: users.v1.private.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<GetMeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetMeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeResponse;

  static equals(a: GetMeResponse | PlainMessage<GetMeResponse> | undefined, b: GetMeResponse | PlainMessage<GetMeResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.LogoutRequest
 */
export declare class LogoutRequest extends Message<LogoutRequest> {
  constructor(data?: PartialMessage<LogoutRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.LogoutRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutRequest;

  static equals(a: LogoutRequest | PlainMessage<LogoutRequest> | undefined, b: LogoutRequest | PlainMessage<LogoutRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.LogoutResponse
 */
export declare class LogoutResponse extends Message<LogoutResponse> {
  constructor(data?: PartialMessage<LogoutResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.LogoutResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutResponse;

  static equals(a: LogoutResponse | PlainMessage<LogoutResponse> | undefined, b: LogoutResponse | PlainMessage<LogoutResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.SetActiveOrgRequest
 */
export declare class SetActiveOrgRequest extends Message<SetActiveOrgRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<SetActiveOrgRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.SetActiveOrgRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetActiveOrgRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetActiveOrgRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetActiveOrgRequest;

  static equals(a: SetActiveOrgRequest | PlainMessage<SetActiveOrgRequest> | undefined, b: SetActiveOrgRequest | PlainMessage<SetActiveOrgRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.SetActiveOrgResponse
 */
export declare class SetActiveOrgResponse extends Message<SetActiveOrgResponse> {
  constructor(data?: PartialMessage<SetActiveOrgResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.SetActiveOrgResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetActiveOrgResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetActiveOrgResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetActiveOrgResponse;

  static equals(a: SetActiveOrgResponse | PlainMessage<SetActiveOrgResponse> | undefined, b: SetActiveOrgResponse | PlainMessage<SetActiveOrgResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.ResendVerificationRequest
 */
export declare class ResendVerificationRequest extends Message<ResendVerificationRequest> {
  constructor(data?: PartialMessage<ResendVerificationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.ResendVerificationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResendVerificationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResendVerificationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResendVerificationRequest;

  static equals(a: ResendVerificationRequest | PlainMessage<ResendVerificationRequest> | undefined, b: ResendVerificationRequest | PlainMessage<ResendVerificationRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.ResendVerificationResponse
 */
export declare class ResendVerificationResponse extends Message<ResendVerificationResponse> {
  constructor(data?: PartialMessage<ResendVerificationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.ResendVerificationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResendVerificationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResendVerificationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResendVerificationResponse;

  static equals(a: ResendVerificationResponse | PlainMessage<ResendVerificationResponse> | undefined, b: ResendVerificationResponse | PlainMessage<ResendVerificationResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.CreateApiTokenRequest
 */
export declare class CreateApiTokenRequest extends Message<CreateApiTokenRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<CreateApiTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.CreateApiTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateApiTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateApiTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateApiTokenRequest;

  static equals(a: CreateApiTokenRequest | PlainMessage<CreateApiTokenRequest> | undefined, b: CreateApiTokenRequest | PlainMessage<CreateApiTokenRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.CreateApiTokenResponse
 */
export declare class CreateApiTokenResponse extends Message<CreateApiTokenResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string token = 3;
   */
  token: string;

  constructor(data?: PartialMessage<CreateApiTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.CreateApiTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateApiTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateApiTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateApiTokenResponse;

  static equals(a: CreateApiTokenResponse | PlainMessage<CreateApiTokenResponse> | undefined, b: CreateApiTokenResponse | PlainMessage<CreateApiTokenResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.ListApiTokensRequest
 */
export declare class ListApiTokensRequest extends Message<ListApiTokensRequest> {
  constructor(data?: PartialMessage<ListApiTokensRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.ListApiTokensRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListApiTokensRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListApiTokensRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListApiTokensRequest;

  static equals(a: ListApiTokensRequest | PlainMessage<ListApiTokensRequest> | undefined, b: ListApiTokensRequest | PlainMessage<ListApiTokensRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.ListApiTokensResponse
 */
export declare class ListApiTokensResponse extends Message<ListApiTokensResponse> {
  /**
   * @generated from field: repeated users.v1.private.ApiToken tokens = 1;
   */
  tokens: ApiToken[];

  /**
   * @generated from field: int32 count = 2;
   */
  count: number;

  constructor(data?: PartialMessage<ListApiTokensResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.ListApiTokensResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListApiTokensResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListApiTokensResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListApiTokensResponse;

  static equals(a: ListApiTokensResponse | PlainMessage<ListApiTokensResponse> | undefined, b: ListApiTokensResponse | PlainMessage<ListApiTokensResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.RemoveApiTokenRequest
 */
export declare class RemoveApiTokenRequest extends Message<RemoveApiTokenRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<RemoveApiTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.RemoveApiTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveApiTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveApiTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveApiTokenRequest;

  static equals(a: RemoveApiTokenRequest | PlainMessage<RemoveApiTokenRequest> | undefined, b: RemoveApiTokenRequest | PlainMessage<RemoveApiTokenRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.RemoveApiTokenResponse
 */
export declare class RemoveApiTokenResponse extends Message<RemoveApiTokenResponse> {
  constructor(data?: PartialMessage<RemoveApiTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.RemoveApiTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveApiTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveApiTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveApiTokenResponse;

  static equals(a: RemoveApiTokenResponse | PlainMessage<RemoveApiTokenResponse> | undefined, b: RemoveApiTokenResponse | PlainMessage<RemoveApiTokenResponse> | undefined): boolean;
}

