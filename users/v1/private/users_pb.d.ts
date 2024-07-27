// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
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
 * @generated from message users.v1.private.Organisation
 */
export declare class Organisation extends Message<Organisation> {
  /**
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  constructor(data?: PartialMessage<Organisation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.Organisation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organisation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organisation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organisation;

  static equals(a: Organisation | PlainMessage<Organisation> | undefined, b: Organisation | PlainMessage<Organisation> | undefined): boolean;
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
 * @generated from message users.v1.private.UpdateMeRequest
 */
export declare class UpdateMeRequest extends Message<UpdateMeRequest> {
  /**
   * @generated from field: optional string given_name = 1;
   */
  givenName?: string;

  /**
   * @generated from field: optional string family_name = 2;
   */
  familyName?: string;

  /**
   * @generated from field: optional string email = 3;
   */
  email?: string;

  constructor(data?: PartialMessage<UpdateMeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.UpdateMeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateMeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateMeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateMeRequest;

  static equals(a: UpdateMeRequest | PlainMessage<UpdateMeRequest> | undefined, b: UpdateMeRequest | PlainMessage<UpdateMeRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.UpdateMeResponse
 */
export declare class UpdateMeResponse extends Message<UpdateMeResponse> {
  constructor(data?: PartialMessage<UpdateMeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.UpdateMeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateMeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateMeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateMeResponse;

  static equals(a: UpdateMeResponse | PlainMessage<UpdateMeResponse> | undefined, b: UpdateMeResponse | PlainMessage<UpdateMeResponse> | undefined): boolean;
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
   * @generated from field: string token = 1;
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

/**
 * @generated from message users.v1.private.ListOrganisationsRequest
 */
export declare class ListOrganisationsRequest extends Message<ListOrganisationsRequest> {
  constructor(data?: PartialMessage<ListOrganisationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.ListOrganisationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganisationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganisationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganisationsRequest;

  static equals(a: ListOrganisationsRequest | PlainMessage<ListOrganisationsRequest> | undefined, b: ListOrganisationsRequest | PlainMessage<ListOrganisationsRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.ListOrganisationsResponse
 */
export declare class ListOrganisationsResponse extends Message<ListOrganisationsResponse> {
  /**
   * @generated from field: repeated users.v1.private.Organisation organisations = 1;
   */
  organisations: Organisation[];

  constructor(data?: PartialMessage<ListOrganisationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.ListOrganisationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganisationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganisationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganisationsResponse;

  static equals(a: ListOrganisationsResponse | PlainMessage<ListOrganisationsResponse> | undefined, b: ListOrganisationsResponse | PlainMessage<ListOrganisationsResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.CreateNewOrganisationRequest
 */
export declare class CreateNewOrganisationRequest extends Message<CreateNewOrganisationRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<CreateNewOrganisationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.CreateNewOrganisationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNewOrganisationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNewOrganisationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNewOrganisationRequest;

  static equals(a: CreateNewOrganisationRequest | PlainMessage<CreateNewOrganisationRequest> | undefined, b: CreateNewOrganisationRequest | PlainMessage<CreateNewOrganisationRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.CreateNewOrganisationResponse
 */
export declare class CreateNewOrganisationResponse extends Message<CreateNewOrganisationResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  constructor(data?: PartialMessage<CreateNewOrganisationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.CreateNewOrganisationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNewOrganisationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNewOrganisationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNewOrganisationResponse;

  static equals(a: CreateNewOrganisationResponse | PlainMessage<CreateNewOrganisationResponse> | undefined, b: CreateNewOrganisationResponse | PlainMessage<CreateNewOrganisationResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.DeleteOrganisationRequest
 */
export declare class DeleteOrganisationRequest extends Message<DeleteOrganisationRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<DeleteOrganisationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.DeleteOrganisationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteOrganisationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteOrganisationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteOrganisationRequest;

  static equals(a: DeleteOrganisationRequest | PlainMessage<DeleteOrganisationRequest> | undefined, b: DeleteOrganisationRequest | PlainMessage<DeleteOrganisationRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.DeleteOrganisationResponse
 */
export declare class DeleteOrganisationResponse extends Message<DeleteOrganisationResponse> {
  constructor(data?: PartialMessage<DeleteOrganisationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.DeleteOrganisationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteOrganisationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteOrganisationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteOrganisationResponse;

  static equals(a: DeleteOrganisationResponse | PlainMessage<DeleteOrganisationResponse> | undefined, b: DeleteOrganisationResponse | PlainMessage<DeleteOrganisationResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.FreshUserSetupRequest
 */
export declare class FreshUserSetupRequest extends Message<FreshUserSetupRequest> {
  /**
   * @generated from field: string first_name = 1;
   */
  firstName: string;

  /**
   * @generated from field: string last_name = 2;
   */
  lastName: string;

  /**
   * @generated from field: string org_name = 3;
   */
  orgName: string;

  constructor(data?: PartialMessage<FreshUserSetupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.FreshUserSetupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FreshUserSetupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FreshUserSetupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FreshUserSetupRequest;

  static equals(a: FreshUserSetupRequest | PlainMessage<FreshUserSetupRequest> | undefined, b: FreshUserSetupRequest | PlainMessage<FreshUserSetupRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.FreshUserSetupResponse
 */
export declare class FreshUserSetupResponse extends Message<FreshUserSetupResponse> {
  constructor(data?: PartialMessage<FreshUserSetupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.FreshUserSetupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FreshUserSetupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FreshUserSetupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FreshUserSetupResponse;

  static equals(a: FreshUserSetupResponse | PlainMessage<FreshUserSetupResponse> | undefined, b: FreshUserSetupResponse | PlainMessage<FreshUserSetupResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetOrganisationRequest
 */
export declare class GetOrganisationRequest extends Message<GetOrganisationRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<GetOrganisationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetOrganisationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganisationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganisationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganisationRequest;

  static equals(a: GetOrganisationRequest | PlainMessage<GetOrganisationRequest> | undefined, b: GetOrganisationRequest | PlainMessage<GetOrganisationRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetOrganisationResponse
 */
export declare class GetOrganisationResponse extends Message<GetOrganisationResponse> {
  /**
   * @generated from field: users.v1.private.Organisation organisation = 1;
   */
  organisation?: Organisation;

  constructor(data?: PartialMessage<GetOrganisationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetOrganisationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganisationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganisationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganisationResponse;

  static equals(a: GetOrganisationResponse | PlainMessage<GetOrganisationResponse> | undefined, b: GetOrganisationResponse | PlainMessage<GetOrganisationResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetBillingLinkRequest
 */
export declare class GetBillingLinkRequest extends Message<GetBillingLinkRequest> {
  constructor(data?: PartialMessage<GetBillingLinkRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetBillingLinkRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBillingLinkRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBillingLinkRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBillingLinkRequest;

  static equals(a: GetBillingLinkRequest | PlainMessage<GetBillingLinkRequest> | undefined, b: GetBillingLinkRequest | PlainMessage<GetBillingLinkRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetBillingLinkResponse
 */
export declare class GetBillingLinkResponse extends Message<GetBillingLinkResponse> {
  /**
   * @generated from field: string URL = 1;
   */
  URL: string;

  constructor(data?: PartialMessage<GetBillingLinkResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetBillingLinkResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBillingLinkResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBillingLinkResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBillingLinkResponse;

  static equals(a: GetBillingLinkResponse | PlainMessage<GetBillingLinkResponse> | undefined, b: GetBillingLinkResponse | PlainMessage<GetBillingLinkResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetSubscriptionRequest
 */
export declare class GetSubscriptionRequest extends Message<GetSubscriptionRequest> {
  constructor(data?: PartialMessage<GetSubscriptionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetSubscriptionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSubscriptionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSubscriptionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSubscriptionRequest;

  static equals(a: GetSubscriptionRequest | PlainMessage<GetSubscriptionRequest> | undefined, b: GetSubscriptionRequest | PlainMessage<GetSubscriptionRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetSubscriptionResponse
 */
export declare class GetSubscriptionResponse extends Message<GetSubscriptionResponse> {
  /**
   * @generated from field: string subscription = 1;
   */
  subscription: string;

  constructor(data?: PartialMessage<GetSubscriptionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetSubscriptionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSubscriptionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSubscriptionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSubscriptionResponse;

  static equals(a: GetSubscriptionResponse | PlainMessage<GetSubscriptionResponse> | undefined, b: GetSubscriptionResponse | PlainMessage<GetSubscriptionResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetTokenRequest
 */
export declare class GetTokenRequest extends Message<GetTokenRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  constructor(data?: PartialMessage<GetTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenRequest;

  static equals(a: GetTokenRequest | PlainMessage<GetTokenRequest> | undefined, b: GetTokenRequest | PlainMessage<GetTokenRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.private.GetTokenResponse
 */
export declare class GetTokenResponse extends Message<GetTokenResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  constructor(data?: PartialMessage<GetTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.private.GetTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenResponse;

  static equals(a: GetTokenResponse | PlainMessage<GetTokenResponse> | undefined, b: GetTokenResponse | PlainMessage<GetTokenResponse> | undefined): boolean;
}

