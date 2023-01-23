// @generated by protoc-gen-es v0.2.0 with parameter "target=js+dts"
// @generated from file users/v1/private/users.proto (package users.v1.private, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.private.GetMeRequest
 */
export const GetMeRequest = proto3.makeMessageType(
  "users.v1.private.GetMeRequest",
  [],
);

/**
 * @generated from message users.v1.private.GetMeResponse
 */
export const GetMeResponse = proto3.makeMessageType(
  "users.v1.private.GetMeResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "org_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "last_logout", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message users.v1.private.LogoutRequest
 */
export const LogoutRequest = proto3.makeMessageType(
  "users.v1.private.LogoutRequest",
  [],
);

/**
 * @generated from message users.v1.private.LogoutResponse
 */
export const LogoutResponse = proto3.makeMessageType(
  "users.v1.private.LogoutResponse",
  [],
);

