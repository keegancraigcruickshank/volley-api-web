// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file users/v1/public/users.proto (package users.v1.public, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.public.CreateUserRequest
 */
export declare class CreateUserRequest extends Message<CreateUserRequest> {
  /**
   * @generated from field: string firstName = 1;
   */
  firstName: string;

  /**
   * @generated from field: string lastName = 2;
   */
  lastName: string;

  /**
   * @generated from field: string email = 3;
   */
  email: string;

  /**
   * @generated from field: string password = 4;
   */
  password: string;

  /**
   * @generated from field: string orgName = 5;
   */
  orgName: string;

  constructor(data?: PartialMessage<CreateUserRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.CreateUserRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUserRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUserRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUserRequest;

  static equals(a: CreateUserRequest | PlainMessage<CreateUserRequest> | undefined, b: CreateUserRequest | PlainMessage<CreateUserRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.CreateUserResponse
 */
export declare class CreateUserResponse extends Message<CreateUserResponse> {
  constructor(data?: PartialMessage<CreateUserResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.CreateUserResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUserResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUserResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUserResponse;

  static equals(a: CreateUserResponse | PlainMessage<CreateUserResponse> | undefined, b: CreateUserResponse | PlainMessage<CreateUserResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.RefreshTokenRequest
 */
export declare class RefreshTokenRequest extends Message<RefreshTokenRequest> {
  constructor(data?: PartialMessage<RefreshTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.RefreshTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenRequest;

  static equals(a: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined, b: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.RefreshTokenResponse
 */
export declare class RefreshTokenResponse extends Message<RefreshTokenResponse> {
  constructor(data?: PartialMessage<RefreshTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.RefreshTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenResponse;

  static equals(a: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined, b: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.LoginRequest
 */
export declare class LoginRequest extends Message<LoginRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  constructor(data?: PartialMessage<LoginRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.LoginRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginRequest;

  static equals(a: LoginRequest | PlainMessage<LoginRequest> | undefined, b: LoginRequest | PlainMessage<LoginRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.LoginResponse
 */
export declare class LoginResponse extends Message<LoginResponse> {
  constructor(data?: PartialMessage<LoginResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.LoginResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginResponse;

  static equals(a: LoginResponse | PlainMessage<LoginResponse> | undefined, b: LoginResponse | PlainMessage<LoginResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.VerifyEmailRequest
 */
export declare class VerifyEmailRequest extends Message<VerifyEmailRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<VerifyEmailRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.VerifyEmailRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailRequest;

  static equals(a: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined, b: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.VerifyEmailResponse
 */
export declare class VerifyEmailResponse extends Message<VerifyEmailResponse> {
  constructor(data?: PartialMessage<VerifyEmailResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.VerifyEmailResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailResponse;

  static equals(a: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined, b: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.SendResetPasswordLinkRequest
 */
export declare class SendResetPasswordLinkRequest extends Message<SendResetPasswordLinkRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  constructor(data?: PartialMessage<SendResetPasswordLinkRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.SendResetPasswordLinkRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResetPasswordLinkRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResetPasswordLinkRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResetPasswordLinkRequest;

  static equals(a: SendResetPasswordLinkRequest | PlainMessage<SendResetPasswordLinkRequest> | undefined, b: SendResetPasswordLinkRequest | PlainMessage<SendResetPasswordLinkRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.SendResetPasswordLinkResponse
 */
export declare class SendResetPasswordLinkResponse extends Message<SendResetPasswordLinkResponse> {
  constructor(data?: PartialMessage<SendResetPasswordLinkResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.SendResetPasswordLinkResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResetPasswordLinkResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResetPasswordLinkResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResetPasswordLinkResponse;

  static equals(a: SendResetPasswordLinkResponse | PlainMessage<SendResetPasswordLinkResponse> | undefined, b: SendResetPasswordLinkResponse | PlainMessage<SendResetPasswordLinkResponse> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.ResetPasswordRequest
 */
export declare class ResetPasswordRequest extends Message<ResetPasswordRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  constructor(data?: PartialMessage<ResetPasswordRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.ResetPasswordRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetPasswordRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetPasswordRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetPasswordRequest;

  static equals(a: ResetPasswordRequest | PlainMessage<ResetPasswordRequest> | undefined, b: ResetPasswordRequest | PlainMessage<ResetPasswordRequest> | undefined): boolean;
}

/**
 * @generated from message users.v1.public.ResetPasswordResponse
 */
export declare class ResetPasswordResponse extends Message<ResetPasswordResponse> {
  constructor(data?: PartialMessage<ResetPasswordResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "users.v1.public.ResetPasswordResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetPasswordResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetPasswordResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetPasswordResponse;

  static equals(a: ResetPasswordResponse | PlainMessage<ResetPasswordResponse> | undefined, b: ResetPasswordResponse | PlainMessage<ResetPasswordResponse> | undefined): boolean;
}

