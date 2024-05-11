// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=js+dts"
// @generated from file users/v1/private/users.proto (package users.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateApiTokenRequest, CreateApiTokenResponse, CreateNewOrganisationRequest, CreateNewOrganisationResponse, DeleteOrganisationRequest, DeleteOrganisationResponse, FreshUserSetupRequest, FreshUserSetupResponse, GetMeRequest, GetMeResponse, ListApiTokensRequest, ListApiTokensResponse, ListOrganisationsRequest, ListOrganisationsResponse, LogoutRequest, LogoutResponse, RemoveApiTokenRequest, RemoveApiTokenResponse, ResendVerificationRequest, ResendVerificationResponse, SetActiveOrgRequest, SetActiveOrgResponse, SetDefaultOrgRequest, SetDefaultOrgResponse } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service users.v1.private.PrivateUsersService
 */
export declare const PrivateUsersService: {
  readonly typeName: "users.v1.private.PrivateUsersService",
  readonly methods: {
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.GetMe
     */
    readonly getMe: {
      readonly name: "GetMe",
      readonly I: typeof GetMeRequest,
      readonly O: typeof GetMeResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.ResendVerification
     */
    readonly resendVerification: {
      readonly name: "ResendVerification",
      readonly I: typeof ResendVerificationRequest,
      readonly O: typeof ResendVerificationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.SetActiveOrg
     */
    readonly setActiveOrg: {
      readonly name: "SetActiveOrg",
      readonly I: typeof SetActiveOrgRequest,
      readonly O: typeof SetActiveOrgResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.Logout
     */
    readonly logout: {
      readonly name: "Logout",
      readonly I: typeof LogoutRequest,
      readonly O: typeof LogoutResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.SetDefaultOrg
     */
    readonly setDefaultOrg: {
      readonly name: "SetDefaultOrg",
      readonly I: typeof SetDefaultOrgRequest,
      readonly O: typeof SetDefaultOrgResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.CreateApiToken
     */
    readonly createApiToken: {
      readonly name: "CreateApiToken",
      readonly I: typeof CreateApiTokenRequest,
      readonly O: typeof CreateApiTokenResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.ListApiTokens
     */
    readonly listApiTokens: {
      readonly name: "ListApiTokens",
      readonly I: typeof ListApiTokensRequest,
      readonly O: typeof ListApiTokensResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.RemoveApiToken
     */
    readonly removeApiToken: {
      readonly name: "RemoveApiToken",
      readonly I: typeof RemoveApiTokenRequest,
      readonly O: typeof RemoveApiTokenResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.ListOrganisations
     */
    readonly listOrganisations: {
      readonly name: "ListOrganisations",
      readonly I: typeof ListOrganisationsRequest,
      readonly O: typeof ListOrganisationsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.CreateNewOrganisation
     */
    readonly createNewOrganisation: {
      readonly name: "CreateNewOrganisation",
      readonly I: typeof CreateNewOrganisationRequest,
      readonly O: typeof CreateNewOrganisationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.FreshUserSetup
     */
    readonly freshUserSetup: {
      readonly name: "FreshUserSetup",
      readonly I: typeof FreshUserSetupRequest,
      readonly O: typeof FreshUserSetupResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.DeleteOrganisation
     */
    readonly deleteOrganisation: {
      readonly name: "DeleteOrganisation",
      readonly I: typeof DeleteOrganisationRequest,
      readonly O: typeof DeleteOrganisationResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

