// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js+dts"
// @generated from file users/v1/private/users.proto (package users.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateApiTokenRequest, CreateApiTokenResponse, CreateNewOrganisationRequest, CreateNewOrganisationResponse, DeleteOrganisationRequest, DeleteOrganisationResponse, FreshUserSetupRequest, FreshUserSetupResponse, GetBillingLinkRequest, GetBillingLinkResponse, GetMeRequest, GetMeResponse, GetOrganisationRequest, GetOrganisationResponse, GetSubscriptionRequest, GetSubscriptionResponse, ListApiTokensRequest, ListApiTokensResponse, ListOrganisationsRequest, ListOrganisationsResponse, RemoveApiTokenRequest, RemoveApiTokenResponse, ResendVerificationRequest, ResendVerificationResponse, SetDefaultOrgRequest, SetDefaultOrgResponse, UpdateMeRequest, UpdateMeResponse } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

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
     * @generated from rpc users.v1.private.PrivateUsersService.GetBillingLink
     */
    getBillingLink: {
      name: "GetBillingLink",
      I: GetBillingLinkRequest,
      O: GetBillingLinkResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.GetSubscription
     */
    getSubscription: {
      name: "GetSubscription",
      I: GetSubscriptionRequest,
      O: GetSubscriptionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.UpdateMe
     */
    updateMe: {
      name: "UpdateMe",
      I: UpdateMeRequest,
      O: UpdateMeResponse,
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
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.CreateApiToken
     */
    createApiToken: {
      name: "CreateApiToken",
      I: CreateApiTokenRequest,
      O: CreateApiTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.ListApiTokens
     */
    listApiTokens: {
      name: "ListApiTokens",
      I: ListApiTokensRequest,
      O: ListApiTokensResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.RemoveApiToken
     */
    removeApiToken: {
      name: "RemoveApiToken",
      I: RemoveApiTokenRequest,
      O: RemoveApiTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.ListOrganisations
     */
    listOrganisations: {
      name: "ListOrganisations",
      I: ListOrganisationsRequest,
      O: ListOrganisationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.GetOrganisation
     */
    getOrganisation: {
      name: "GetOrganisation",
      I: GetOrganisationRequest,
      O: GetOrganisationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.CreateNewOrganisation
     */
    createNewOrganisation: {
      name: "CreateNewOrganisation",
      I: CreateNewOrganisationRequest,
      O: CreateNewOrganisationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.FreshUserSetup
     */
    freshUserSetup: {
      name: "FreshUserSetup",
      I: FreshUserSetupRequest,
      O: FreshUserSetupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.DeleteOrganisation
     */
    deleteOrganisation: {
      name: "DeleteOrganisation",
      I: DeleteOrganisationRequest,
      O: DeleteOrganisationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.v1.private.PrivateUsersService.ResendVerification
     */
    resendVerification: {
      name: "ResendVerification",
      I: ResendVerificationRequest,
      O: ResendVerificationResponse,
      kind: MethodKind.Unary,
    },
  }
};

