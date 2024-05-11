// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file divisions/v1/private/divisions.proto (package divisions.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum divisions.v1.private.SortDirection
 */
export const SortDirection = /*@__PURE__*/ proto3.makeEnum(
  "divisions.v1.private.SortDirection",
  [
    {no: 0, name: "ASC"},
    {no: 1, name: "DESC"},
  ],
);

/**
 * @generated from message divisions.v1.private.Bound
 */
export const Bound = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.Bound",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "day", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "lower_bound", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "upper_bound", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message divisions.v1.private.Division
 */
export const Division = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.Division",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bounds", kind: "message", T: Bound, repeated: true },
    { no: 4, name: "modified", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message divisions.v1.private.ListedDivision
 */
export const ListedDivision = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.ListedDivision",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "modified", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message divisions.v1.private.AddDivisionRequest
 */
export const AddDivisionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.AddDivisionRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bounds", kind: "message", T: Bound, repeated: true },
  ],
);

/**
 * @generated from message divisions.v1.private.AddDivisionResponse
 */
export const AddDivisionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.AddDivisionResponse",
  [],
);

/**
 * @generated from message divisions.v1.private.UpdateDivisionRequest
 */
export const UpdateDivisionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.UpdateDivisionRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bounds", kind: "message", T: Bound, repeated: true },
  ],
);

/**
 * @generated from message divisions.v1.private.UpdateDivisionResponse
 */
export const UpdateDivisionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.UpdateDivisionResponse",
  [],
);

/**
 * @generated from message divisions.v1.private.GetDivisionRequest
 */
export const GetDivisionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.GetDivisionRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message divisions.v1.private.GetDivisionResponse
 */
export const GetDivisionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.GetDivisionResponse",
  () => [
    { no: 1, name: "division", kind: "message", T: Division },
    { no: 2, name: "teamCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message divisions.v1.private.ListDivisionsRequest
 */
export const ListDivisionsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.ListDivisionsRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "pageSize", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "sortDirection", kind: "enum", T: proto3.getEnumType(SortDirection), opt: true },
  ],
);

/**
 * @generated from message divisions.v1.private.ListDivisionsResponse
 */
export const ListDivisionsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.ListDivisionsResponse",
  () => [
    { no: 1, name: "divisions", kind: "message", T: ListedDivision, repeated: true },
    { no: 2, name: "totalCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message divisions.v1.private.RemoveDivisionsRequest
 */
export const RemoveDivisionsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.RemoveDivisionsRequest",
  () => [
    { no: 1, name: "ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message divisions.v1.private.RemoveDivisionsResponse
 */
export const RemoveDivisionsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "divisions.v1.private.RemoveDivisionsResponse",
  [],
);

