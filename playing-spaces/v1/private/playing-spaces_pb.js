// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file playing-spaces/v1/private/playing-spaces.proto (package playing_spaces.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum playing_spaces.v1.private.SortDirection
 */
export const SortDirection = /*@__PURE__*/ proto3.makeEnum(
  "playing_spaces.v1.private.SortDirection",
  [
    {no: 0, name: "ASC"},
    {no: 1, name: "DESC"},
  ],
);

/**
 * @generated from message playing_spaces.v1.private.PlayingSpace
 */
export const PlayingSpace = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.PlayingSpace",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "location_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "location_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message playing_spaces.v1.private.CreatePlayingSpaceRequest
 */
export const CreatePlayingSpaceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.CreatePlayingSpaceRequest",
  () => [
    { no: 1, name: "location_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message playing_spaces.v1.private.CreatePlayingSpaceResponse
 */
export const CreatePlayingSpaceResponse = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.CreatePlayingSpaceResponse",
  () => [
    { no: 1, name: "playingSpace", kind: "message", T: PlayingSpace },
  ],
);

/**
 * @generated from message playing_spaces.v1.private.RemovePlayingSpacesRequest
 */
export const RemovePlayingSpacesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.RemovePlayingSpacesRequest",
  () => [
    { no: 1, name: "playingSpaceIds", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message playing_spaces.v1.private.RemovePlayingSpacesResponse
 */
export const RemovePlayingSpacesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.RemovePlayingSpacesResponse",
  [],
);

/**
 * @generated from message playing_spaces.v1.private.ModifyPlayingSpaceRequest
 */
export const ModifyPlayingSpaceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.ModifyPlayingSpaceRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "location_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message playing_spaces.v1.private.ModifyPlayingSpaceResponse
 */
export const ModifyPlayingSpaceResponse = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.ModifyPlayingSpaceResponse",
  () => [
    { no: 1, name: "playingSpace", kind: "message", T: PlayingSpace },
  ],
);

/**
 * @generated from message playing_spaces.v1.private.ListPlayingSpacesRequest
 */
export const ListPlayingSpacesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.ListPlayingSpacesRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "pageSize", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "sortDirection", kind: "enum", T: proto3.getEnumType(SortDirection), opt: true },
  ],
);

/**
 * @generated from message playing_spaces.v1.private.ListPlayingSpacesResponse
 */
export const ListPlayingSpacesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "playing_spaces.v1.private.ListPlayingSpacesResponse",
  () => [
    { no: 1, name: "playingSpaces", kind: "message", T: PlayingSpace, repeated: true },
    { no: 2, name: "totalCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

