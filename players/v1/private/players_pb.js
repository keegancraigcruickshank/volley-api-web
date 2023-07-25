// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file players/v1/private/players.proto (package players.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum players.v1.private.SortDirection
 */
export const SortDirection = proto3.makeEnum(
  "players.v1.private.SortDirection",
  [
    {no: 0, name: "ASC"},
    {no: 1, name: "DESC"},
  ],
);

/**
 * @generated from message players.v1.private.Address
 */
export const Address = proto3.makeMessageType(
  "players.v1.private.Address",
  () => [
    { no: 1, name: "unit", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "house_number", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "street", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "suburb", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "zip_postcode", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message players.v1.private.Contact
 */
export const Contact = proto3.makeMessageType(
  "players.v1.private.Contact",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "mobile", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "dob", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "address", kind: "message", T: Address, opt: true },
  ],
);

/**
 * @generated from message players.v1.private.PlayerDetails
 */
export const PlayerDetails = proto3.makeMessageType(
  "players.v1.private.PlayerDetails",
  () => [
    { no: 1, name: "teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "mobile", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "dob", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "address", kind: "message", T: Address, opt: true },
  ],
);

/**
 * @generated from message players.v1.private.Player
 */
export const Player = proto3.makeMessageType(
  "players.v1.private.Player",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "orgId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "details", kind: "message", T: PlayerDetails },
    { no: 4, name: "modified", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message players.v1.private.CreatePlayerRequest
 */
export const CreatePlayerRequest = proto3.makeMessageType(
  "players.v1.private.CreatePlayerRequest",
  () => [
    { no: 1, name: "player", kind: "message", T: Player },
  ],
);

/**
 * @generated from message players.v1.private.CreatePlayerResponse
 */
export const CreatePlayerResponse = proto3.makeMessageType(
  "players.v1.private.CreatePlayerResponse",
  [],
);

/**
 * @generated from message players.v1.private.RemovePlayersRequest
 */
export const RemovePlayersRequest = proto3.makeMessageType(
  "players.v1.private.RemovePlayersRequest",
  () => [
    { no: 1, name: "ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message players.v1.private.RemovePlayersResponse
 */
export const RemovePlayersResponse = proto3.makeMessageType(
  "players.v1.private.RemovePlayersResponse",
  [],
);

/**
 * @generated from message players.v1.private.ModifyPlayerRequest
 */
export const ModifyPlayerRequest = proto3.makeMessageType(
  "players.v1.private.ModifyPlayerRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: PlayerDetails },
  ],
);

/**
 * @generated from message players.v1.private.ModifyPlayerResponse
 */
export const ModifyPlayerResponse = proto3.makeMessageType(
  "players.v1.private.ModifyPlayerResponse",
  [],
);

/**
 * @generated from message players.v1.private.ListPlayersRequest
 */
export const ListPlayersRequest = proto3.makeMessageType(
  "players.v1.private.ListPlayersRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "pageSize", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "sortDirection", kind: "enum", T: proto3.getEnumType(SortDirection), opt: true },
  ],
);

/**
 * @generated from message players.v1.private.ListPlayersResponse
 */
export const ListPlayersResponse = proto3.makeMessageType(
  "players.v1.private.ListPlayersResponse",
  () => [
    { no: 1, name: "players", kind: "message", T: Player, repeated: true },
    { no: 2, name: "totalCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

