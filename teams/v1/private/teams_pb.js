// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file teams/v1/private/teams.proto (package teams.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum teams.v1.private.SortDirection
 */
export const SortDirection = /*@__PURE__*/ proto3.makeEnum(
  "teams.v1.private.SortDirection",
  [
    {no: 0, name: "ASC"},
    {no: 1, name: "DESC"},
  ],
);

/**
 * @generated from message teams.v1.private.ListedTeam
 */
export const ListedTeam = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.ListedTeam",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "players", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "modified", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message teams.v1.private.AddTeamRequest
 */
export const AddTeamRequest = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.AddTeamRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "players", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message teams.v1.private.AddTeamResponse
 */
export const AddTeamResponse = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.AddTeamResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "players", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message teams.v1.private.ListTeamsRequest
 */
export const ListTeamsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.ListTeamsRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "pageSize", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "sortDirection", kind: "enum", T: proto3.getEnumType(SortDirection), opt: true },
    { no: 5, name: "teamIds", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message teams.v1.private.ListTeamsResponse
 */
export const ListTeamsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.ListTeamsResponse",
  () => [
    { no: 1, name: "teams", kind: "message", T: ListedTeam, repeated: true },
    { no: 2, name: "totalCount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message teams.v1.private.RemoveTeamsRequest
 */
export const RemoveTeamsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.RemoveTeamsRequest",
  () => [
    { no: 1, name: "teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message teams.v1.private.RemoveTeamsResponse
 */
export const RemoveTeamsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.RemoveTeamsResponse",
  [],
);

/**
 * @generated from message teams.v1.private.UpdateTeamRequest
 */
export const UpdateTeamRequest = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.UpdateTeamRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "players", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message teams.v1.private.UpdateTeamResponse
 */
export const UpdateTeamResponse = /*@__PURE__*/ proto3.makeMessageType(
  "teams.v1.private.UpdateTeamResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "players", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

