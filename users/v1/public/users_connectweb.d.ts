// @generated by protoc-gen-connect-web v0.9.0 with parameter "target=js+dts"
// @generated from file users/v1/public/users.proto (package users.v1.public, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, CreateUserResponse, LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service users.v1.public.PublicUsersService
 */
export declare const PublicUsersService: {
  readonly typeName: "users.v1.public.PublicUsersService",
  readonly methods: {
    /**
     * @generated from rpc users.v1.public.PublicUsersService.Login
     */
    readonly login: {
      readonly name: "Login",
      readonly I: typeof LoginRequest,
      readonly O: typeof LoginResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.public.PublicUsersService.RefreshToken
     */
    readonly refreshToken: {
      readonly name: "RefreshToken",
      readonly I: typeof RefreshTokenRequest,
      readonly O: typeof RefreshTokenResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.public.PublicUsersService.CreateUser
     */
    readonly createUser: {
      readonly name: "CreateUser",
      readonly I: typeof CreateUserRequest,
      readonly O: typeof CreateUserResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

