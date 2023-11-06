// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file locations/v1/private/locations.proto (package locations.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum locations.v1.private.SortDirection
 */
export const SortDirection = proto3.makeEnum(
  "locations.v1.private.SortDirection",
  [
    {no: 0, name: "ASC"},
    {no: 1, name: "DESC"},
  ],
);

/**
 * @generated from message locations.v1.private.SiteLocation
 */
export const SiteLocation = proto3.makeMessageType(
  "locations.v1.private.SiteLocation",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message locations.v1.private.RemoveLocationsRequest
 */
export const RemoveLocationsRequest = proto3.makeMessageType(
  "locations.v1.private.RemoveLocationsRequest",
  () => [
    { no: 1, name: "locationIds", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message locations.v1.private.RemoveLocationsResponse
 */
export const RemoveLocationsResponse = proto3.makeMessageType(
  "locations.v1.private.RemoveLocationsResponse",
  [],
);

/**
 * @generated from message locations.v1.private.AddLocationRequest
 */
export const AddLocationRequest = proto3.makeMessageType(
  "locations.v1.private.AddLocationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message locations.v1.private.AddLocationResponse
 */
export const AddLocationResponse = proto3.makeMessageType(
  "locations.v1.private.AddLocationResponse",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message locations.v1.private.ListLocationsRequest
 */
export const ListLocationsRequest = proto3.makeMessageType(
  "locations.v1.private.ListLocationsRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "pageSize", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "sortDirection", kind: "enum", T: proto3.getEnumType(SortDirection), opt: true },
  ],
);

/**
 * @generated from message locations.v1.private.ListLocationsResponse
 */
export const ListLocationsResponse = proto3.makeMessageType(
  "locations.v1.private.ListLocationsResponse",
  () => [
    { no: 1, name: "locations", kind: "message", T: SiteLocation, repeated: true },
    { no: 2, name: "totalCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message locations.v1.private.ModifyLocationRequest
 */
export const ModifyLocationRequest = proto3.makeMessageType(
  "locations.v1.private.ModifyLocationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message locations.v1.private.ModifyLocationResponse
 */
export const ModifyLocationResponse = proto3.makeMessageType(
  "locations.v1.private.ModifyLocationResponse",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

