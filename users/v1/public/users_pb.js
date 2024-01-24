// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file users/v1/public/users.proto (package users.v1.public, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.public.CreateUserRequest
 */
export const CreateUserRequest = proto3.makeMessageType(
  "users.v1.public.CreateUserRequest",
  () => [
    { no: 1, name: "firstName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lastName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "orgName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.CreateUserResponse
 */
export const CreateUserResponse = proto3.makeMessageType(
  "users.v1.public.CreateUserResponse",
  [],
);

/**
 * @generated from message users.v1.public.RefreshTokenRequest
 */
export const RefreshTokenRequest = proto3.makeMessageType(
  "users.v1.public.RefreshTokenRequest",
  [],
);

/**
 * @generated from message users.v1.public.RefreshTokenResponse
 */
export const RefreshTokenResponse = proto3.makeMessageType(
  "users.v1.public.RefreshTokenResponse",
  [],
);

/**
 * @generated from message users.v1.public.LoginRequest
 */
export const LoginRequest = proto3.makeMessageType(
  "users.v1.public.LoginRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.LoginResponse
 */
export const LoginResponse = proto3.makeMessageType(
  "users.v1.public.LoginResponse",
  [],
);

/**
 * @generated from message users.v1.public.VerifyEmailRequest
 */
export const VerifyEmailRequest = proto3.makeMessageType(
  "users.v1.public.VerifyEmailRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.VerifyEmailResponse
 */
export const VerifyEmailResponse = proto3.makeMessageType(
  "users.v1.public.VerifyEmailResponse",
  [],
);

/**
 * @generated from message users.v1.public.SendResetPasswordLinkRequest
 */
export const SendResetPasswordLinkRequest = proto3.makeMessageType(
  "users.v1.public.SendResetPasswordLinkRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.SendResetPasswordLinkResponse
 */
export const SendResetPasswordLinkResponse = proto3.makeMessageType(
  "users.v1.public.SendResetPasswordLinkResponse",
  [],
);

/**
 * @generated from message users.v1.public.ResetPasswordRequest
 */
export const ResetPasswordRequest = proto3.makeMessageType(
  "users.v1.public.ResetPasswordRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.ResetPasswordResponse
 */
export const ResetPasswordResponse = proto3.makeMessageType(
  "users.v1.public.ResetPasswordResponse",
  [],
);

