// @generated by protoc-gen-connect-query v1.4.1 with parameter "target=js+dts"
// @generated from file users/v1/public/users.proto (package users.v1.public, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { GetTokenRequest, GetTokenResponse } from "./users_pb.js";

/**
 * @generated from rpc users.v1.public.PublicUsersService.GetToken
 */
export const getToken = {
  localName: "getToken",
  name: "GetToken",
  kind: MethodKind.Unary,
  I: GetTokenRequest,
  O: GetTokenResponse,
  service: {
    typeName: "users.v1.public.PublicUsersService"
  }
};