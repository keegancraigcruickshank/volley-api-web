// @generated by protoc-gen-connect-web v0.3.0 with parameter "target=js+dts"
// @generated from file users/v1/private/users.proto (package users.v1.private, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {GetMeRequest, GetMeResponse, LogoutRequest, LogoutResponse, SetActiveOrgRequest, SetActiveOrgResponse, SetDefaultOrgRequest, SetDefaultOrgResponse} from "./users_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service users.v1.private.PrivateUsersService
 */
export const PrivateUsersService = {
  typeName: "users.v1.private.PrivateUsersService",
  methods: {
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.GetMe
     */
    getMe: {
      name: "GetMe",
      I: GetMeRequest,
      O: GetMeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.SetActiveOrg
     */
    setActiveOrg: {
      name: "SetActiveOrg",
      I: SetActiveOrgRequest,
      O: SetActiveOrgResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.Logout
     */
    logout: {
      name: "Logout",
      I: LogoutRequest,
      O: LogoutResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.SetDefaultOrg
     */
    setDefaultOrg: {
      name: "SetDefaultOrg",
      I: SetDefaultOrgRequest,
      O: SetDefaultOrgResponse,
      kind: MethodKind.Unary,
    },
  }
};

