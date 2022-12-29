// @generated by protoc-gen-es v0.2.0 with parameter "target=js+dts"
// @generated from file users/v1/public/users.proto (package users.v1.public, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.public.RegisterUserRequest
 */
export const RegisterUserRequest = proto3.makeMessageType(
  "users.v1.public.RegisterUserRequest",
  () => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.RegisterUserResponse
 */
export const RegisterUserResponse = proto3.makeMessageType(
  "users.v1.public.RegisterUserResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.LoginUserRequest
 */
export const LoginUserRequest = proto3.makeMessageType(
  "users.v1.public.LoginUserRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.LoginUserResponse
 */
export const LoginUserResponse = proto3.makeMessageType(
  "users.v1.public.LoginUserResponse",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "refresh", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.RefreshUserRequest
 */
export const RefreshUserRequest = proto3.makeMessageType(
  "users.v1.public.RefreshUserRequest",
  () => [
    { no: 1, name: "refresh", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.public.RefreshUserResponse
 */
export const RefreshUserResponse = proto3.makeMessageType(
  "users.v1.public.RefreshUserResponse",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "refresh", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

