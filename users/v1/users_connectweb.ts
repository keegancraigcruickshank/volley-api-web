// @generated by protoc-gen-connect-web v0.3.0 with parameter "target=ts"
// @generated from file users/v1/users.proto (package users.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {GetMeRequest, GetMeResponse, LoginRequest, LoginResponse} from "./users_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service users.v1.UsersService
 */
export const UsersService = {
  typeName: "users.v1.UsersService",
  methods: {
    /**
     * @generated from rpc users.v1.UsersService.GetMe
     */
    getMe: {
      name: "GetMe",
      I: GetMeRequest,
      O: GetMeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.UsersService.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: LoginResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

