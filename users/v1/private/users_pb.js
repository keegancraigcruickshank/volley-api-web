// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file users/v1/private/users.proto (package users.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.private.User
 */
export const User = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.User",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "org_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "last_logout", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "created_at", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "updated_at", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "default_org", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "active_org", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "active_org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message users.v1.private.Organisation
 */
export const Organisation = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.Organisation",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.ApiToken
 */
export const ApiToken = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.ApiToken",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_modified", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message users.v1.private.SetDefaultOrgRequest
 */
export const SetDefaultOrgRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.SetDefaultOrgRequest",
  () => [
    { no: 1, name: "default_org", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.SetDefaultOrgResponse
 */
export const SetDefaultOrgResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.SetDefaultOrgResponse",
  [],
);

/**
 * @generated from message users.v1.private.GetMeRequest
 */
export const GetMeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.GetMeRequest",
  [],
);

/**
 * @generated from message users.v1.private.GetMeResponse
 */
export const GetMeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.GetMeResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message users.v1.private.UpdateMeRequest
 */
export const UpdateMeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.UpdateMeRequest",
  () => [
    { no: 1, name: "given_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "family_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message users.v1.private.UpdateMeResponse
 */
export const UpdateMeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.UpdateMeResponse",
  [],
);

/**
 * @generated from message users.v1.private.LogoutRequest
 */
export const LogoutRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.LogoutRequest",
  [],
);

/**
 * @generated from message users.v1.private.LogoutResponse
 */
export const LogoutResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.LogoutResponse",
  [],
);

/**
 * @generated from message users.v1.private.SetActiveOrgRequest
 */
export const SetActiveOrgRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.SetActiveOrgRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.SetActiveOrgResponse
 */
export const SetActiveOrgResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.SetActiveOrgResponse",
  [],
);

/**
 * @generated from message users.v1.private.ResendVerificationRequest
 */
export const ResendVerificationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.ResendVerificationRequest",
  [],
);

/**
 * @generated from message users.v1.private.ResendVerificationResponse
 */
export const ResendVerificationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.ResendVerificationResponse",
  [],
);

/**
 * @generated from message users.v1.private.CreateApiTokenRequest
 */
export const CreateApiTokenRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.CreateApiTokenRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.CreateApiTokenResponse
 */
export const CreateApiTokenResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.CreateApiTokenResponse",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.ListApiTokensRequest
 */
export const ListApiTokensRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.ListApiTokensRequest",
  [],
);

/**
 * @generated from message users.v1.private.ListApiTokensResponse
 */
export const ListApiTokensResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.ListApiTokensResponse",
  () => [
    { no: 1, name: "tokens", kind: "message", T: ApiToken, repeated: true },
  ],
);

/**
 * @generated from message users.v1.private.RemoveApiTokenRequest
 */
export const RemoveApiTokenRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.RemoveApiTokenRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.RemoveApiTokenResponse
 */
export const RemoveApiTokenResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.RemoveApiTokenResponse",
  [],
);

/**
 * @generated from message users.v1.private.ListOrganisationsRequest
 */
export const ListOrganisationsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.ListOrganisationsRequest",
  [],
);

/**
 * @generated from message users.v1.private.ListOrganisationsResponse
 */
export const ListOrganisationsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.ListOrganisationsResponse",
  () => [
    { no: 1, name: "organisations", kind: "message", T: Organisation, repeated: true },
  ],
);

/**
 * @generated from message users.v1.private.CreateNewOrganisationRequest
 */
export const CreateNewOrganisationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.CreateNewOrganisationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.CreateNewOrganisationResponse
 */
export const CreateNewOrganisationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.CreateNewOrganisationResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.DeleteOrganisationRequest
 */
export const DeleteOrganisationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.DeleteOrganisationRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.DeleteOrganisationResponse
 */
export const DeleteOrganisationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.DeleteOrganisationResponse",
  [],
);

/**
 * @generated from message users.v1.private.FreshUserSetupRequest
 */
export const FreshUserSetupRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.FreshUserSetupRequest",
  () => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.FreshUserSetupResponse
 */
export const FreshUserSetupResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.FreshUserSetupResponse",
  [],
);

/**
 * @generated from message users.v1.private.GetOrganisationRequest
 */
export const GetOrganisationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.GetOrganisationRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message users.v1.private.GetOrganisationResponse
 */
export const GetOrganisationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "users.v1.private.GetOrganisationResponse",
  () => [
    { no: 1, name: "organisation", kind: "message", T: Organisation },
  ],
);

